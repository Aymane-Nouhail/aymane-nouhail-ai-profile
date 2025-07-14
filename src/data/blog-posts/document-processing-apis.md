# Document Processing at Scale: Translation and Summarization APIs

Building robust document processing APIs that handle translation and summarization at enterprise scale requires careful consideration of performance, quality, and cost optimization. Here's what I learned while developing production-ready document processing systems.

## The Scale Challenge

Enterprise document processing faces unique challenges:

- **Volume**: Thousands of documents processed daily
- **Variety**: Multiple file formats (PDF, DOCX, TXT, HTML)
- **Languages**: Multilingual content requiring accurate translation
- **Quality**: Consistent summarization quality across domains
- **Performance**: Sub-second response times for real-time use cases

## API Architecture Design

### FastAPI Foundation

FastAPI provides an excellent foundation for document processing APIs:

```python
from fastapi import FastAPI, UploadFile, HTTPException, BackgroundTasks
from pydantic import BaseModel
from typing import List, Optional
import asyncio

app = FastAPI(
    title="Document Processing API",
    description="Translation and Summarization at Scale",
    version="1.0.0"
)

class TranslationRequest(BaseModel):
    text: str
    source_language: str
    target_language: str
    model_preference: Optional[str] = "auto"

class SummarizationRequest(BaseModel):
    text: str
    summary_length: Optional[str] = "medium"  # short, medium, long
    style: Optional[str] = "extractive"  # extractive, abstractive
```

### Document Processing Pipeline

A robust pipeline handles various document formats:

```python
class DocumentProcessor:
    def __init__(self):
        self.parsers = {
            'pdf': PDFParser(),
            'docx': DOCXParser(),
            'txt': TextParser(),
            'html': HTMLParser(),
            'json': JSONParser()
        }
        
    async def process_document(self, file: UploadFile) -> ProcessedDocument:
        # Detect file type
        file_type = self.detect_file_type(file)
        
        # Parse document
        parser = self.parsers.get(file_type)
        if not parser:
            raise UnsupportedFileTypeError(f"File type {file_type} not supported")
        
        try:
            # Extract text content
            content = await parser.extract_text(file)
            
            # Extract metadata
            metadata = await parser.extract_metadata(file)
            
            # Detect language
            detected_language = self.detect_language(content)
            
            return ProcessedDocument(
                content=content,
                metadata=metadata,
                language=detected_language,
                file_type=file_type
            )
            
        except Exception as e:
            logger.error(f"Document processing failed: {e}")
            raise DocumentProcessingError(f"Failed to process document: {str(e)}")
```

## Translation Service Implementation

### Multi-Model Translation Strategy

Using multiple translation models for better quality and reliability:

```python
class TranslationService:
    def __init__(self):
        self.models = {
            'azure': AzureTranslator(),
            'google': GoogleTranslator(),
            'openai': OpenAITranslator(),
            'local': LocalTranslationModel()
        }
        self.quality_evaluator = TranslationQualityEvaluator()
        
    async def translate(self, text: str, source_lang: str, target_lang: str) -> TranslationResult:
        # Select best model for language pair
        model = self.select_optimal_model(source_lang, target_lang)
        
        try:
            # Primary translation
            translation = await model.translate(text, source_lang, target_lang)
            
            # Quality check
            quality_score = await self.quality_evaluator.evaluate(
                source_text=text,
                translated_text=translation,
                source_lang=source_lang,
                target_lang=target_lang
            )
            
            # Use fallback if quality is poor
            if quality_score < 0.7:
                fallback_model = self.get_fallback_model(model)
                translation = await fallback_model.translate(text, source_lang, target_lang)
            
            return TranslationResult(
                translated_text=translation,
                source_language=source_lang,
                target_language=target_lang,
                quality_score=quality_score,
                model_used=model.name
            )
            
        except Exception as e:
            logger.error(f"Translation failed: {e}")
            raise TranslationError(f"Translation failed: {str(e)}")
```

### Language Detection and Preprocessing

Accurate language detection is crucial for translation quality:

```python
class LanguageDetector:
    def __init__(self):
        self.detector = langdetect.DetectorFactory.create()
        self.confidence_threshold = 0.95
        
    def detect_language(self, text: str) -> LanguageDetection:
        # Clean text for better detection
        cleaned_text = self.preprocess_text(text)
        
        try:
            # Multiple detection attempts
            detections = []
            for _ in range(3):
                self.detector.seed = None  # Reset for variety
                lang = self.detector.detect(cleaned_text)
                confidence = self.detector.get_probabilities()[0].prob
                detections.append((lang, confidence))
            
            # Consensus approach
            best_detection = max(detections, key=lambda x: x[1])
            
            return LanguageDetection(
                language=best_detection[0],
                confidence=best_detection[1],
                is_reliable=best_detection[1] > self.confidence_threshold
            )
            
        except Exception as e:
            logger.warning(f"Language detection failed: {e}")
            return LanguageDetection(
                language='unknown',
                confidence=0.0,
                is_reliable=False
            )
    
    def preprocess_text(self, text: str) -> str:
        # Remove URLs, emails, numbers that can confuse detection
        import re
        text = re.sub(r'http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+', '', text)
        text = re.sub(r'\S+@\S+', '', text)
        text = re.sub(r'\d+', '', text)
        return text.strip()
```

## Summarization Service

### Adaptive Summarization Strategy

Different types of content require different summarization approaches:

```python
class SummarizationService:
    def __init__(self):
        self.extractive_model = ExtractiveSummarizer()
        self.abstractive_model = AbstractiveSummarizer()
        self.content_analyzer = ContentAnalyzer()
        
    async def summarize(self, text: str, options: SummarizationOptions) -> SummaryResult:
        # Analyze content characteristics
        content_analysis = self.content_analyzer.analyze(text)
        
        # Choose optimal strategy
        strategy = self.select_strategy(content_analysis, options)
        
        if strategy == 'extractive':
            summary = await self.extractive_summarize(text, options)
        else:
            summary = await self.abstractive_summarize(text, options)
        
        # Quality validation
        quality_metrics = self.evaluate_summary_quality(text, summary)
        
        return SummaryResult(
            summary=summary,
            original_length=len(text.split()),
            summary_length=len(summary.split()),
            compression_ratio=len(summary.split()) / len(text.split()),
            quality_metrics=quality_metrics,
            strategy_used=strategy
        )
    
    def select_strategy(self, content_analysis: ContentAnalysis, options: SummarizationOptions) -> str:
        # Decision logic based on content characteristics
        if content_analysis.content_type == 'technical':
            return 'extractive'  # Preserve technical accuracy
        elif content_analysis.narrative_structure:
            return 'abstractive'  # Better for storytelling
        elif options.preserve_key_phrases:
            return 'extractive'
        else:
            return options.preferred_strategy or 'abstractive'
```

### Quality Metrics for Summarization

Measuring summary quality programmatically:

```python
class SummaryQualityEvaluator:
    def __init__(self):
        self.rouge_evaluator = RougeEvaluator()
        self.semantic_evaluator = SemanticSimilarityEvaluator()
        
    def evaluate_summary_quality(self, original: str, summary: str) -> QualityMetrics:
        # ROUGE scores for n-gram overlap
        rouge_scores = self.rouge_evaluator.compute(original, summary)
        
        # Semantic similarity
        semantic_score = self.semantic_evaluator.compute_similarity(original, summary)
        
        # Coherence check
        coherence_score = self.measure_coherence(summary)
        
        # Factual consistency (basic)
        factual_score = self.check_factual_consistency(original, summary)
        
        # Information density
        density_score = self.calculate_information_density(original, summary)
        
        return QualityMetrics(
            rouge_1=rouge_scores['rouge-1']['f'],
            rouge_2=rouge_scores['rouge-2']['f'],
            rouge_l=rouge_scores['rouge-l']['f'],
            semantic_similarity=semantic_score,
            coherence=coherence_score,
            factual_consistency=factual_score,
            information_density=density_score,
            overall_score=self.compute_overall_score(rouge_scores, semantic_score, coherence_score)
        )
```

## Performance Optimization

### Caching Strategy

Multi-level caching for improved performance:

```python
class CachedDocumentProcessor:
    def __init__(self):
        self.memory_cache = TTLCache(maxsize=1000, ttl=3600)  # 1 hour
        self.redis_cache = RedisCache()
        self.processor = DocumentProcessor()
        
    async def process_with_cache(self, file_hash: str, file: UploadFile) -> ProcessedDocument:
        # Check memory cache first
        if file_hash in self.memory_cache:
            return self.memory_cache[file_hash]
        
        # Check Redis cache
        cached_result = await self.redis_cache.get(f"doc:{file_hash}")
        if cached_result:
            result = ProcessedDocument.from_json(cached_result)
            self.memory_cache[file_hash] = result
            return result
        
        # Process document
        result = await self.processor.process_document(file)
        
        # Cache results
        self.memory_cache[file_hash] = result
        await self.redis_cache.set(
            f"doc:{file_hash}", 
            result.to_json(), 
            expire=86400  # 24 hours
        )
        
        return result
```

### Batch Processing

Efficient batch processing for high-volume scenarios:

```python
@app.post("/batch-translate")
async def batch_translate(
    requests: List[TranslationRequest],
    background_tasks: BackgroundTasks
):
    # Group by language pairs for efficiency
    grouped_requests = group_by_language_pair(requests)
    
    batch_id = str(uuid.uuid4())
    
    # Process in background
    background_tasks.add_task(
        process_translation_batch, 
        batch_id, 
        grouped_requests
    )
    
    return {
        "batch_id": batch_id,
        "status": "processing",
        "total_requests": len(requests)
    }

async def process_translation_batch(batch_id: str, grouped_requests: Dict):
    results = {}
    
    for (source_lang, target_lang), batch_requests in grouped_requests.items():
        # Process batch with same language pair together
        batch_texts = [req.text for req in batch_requests]
        
        # Use batch translation API for efficiency
        batch_translations = await translation_service.translate_batch(
            texts=batch_texts,
            source_lang=source_lang,
            target_lang=target_lang
        )
        
        # Store results
        for i, req in enumerate(batch_requests):
            results[req.id] = batch_translations[i]
    
    # Store batch results
    await cache.set(f"batch:{batch_id}", results, expire=3600)
```

## API Endpoints

### Translation Endpoints

```python
@app.post("/translate", response_model=TranslationResult)
async def translate_text(request: TranslationRequest):
    """Translate text between languages"""
    try:
        result = await translation_service.translate(
            text=request.text,
            source_lang=request.source_language,
            target_lang=request.target_language
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/translate-document")
async def translate_document(
    file: UploadFile,
    target_language: str,
    source_language: Optional[str] = None
):
    """Translate entire document"""
    try:
        # Process document
        doc = await document_processor.process_document(file)
        
        # Detect source language if not provided
        if not source_language:
            source_language = doc.language
        
        # Translate content
        translation = await translation_service.translate(
            text=doc.content,
            source_lang=source_language,
            target_lang=target_language
        )
        
        return {
            "original_language": source_language,
            "target_language": target_language,
            "translated_content": translation.translated_text,
            "quality_score": translation.quality_score,
            "metadata": doc.metadata
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

### Summarization Endpoints

```python
@app.post("/summarize", response_model=SummaryResult)
async def summarize_text(request: SummarizationRequest):
    """Generate summary of text"""
    try:
        options = SummarizationOptions(
            length=request.summary_length,
            style=request.style
        )
        
        result = await summarization_service.summarize(
            text=request.text,
            options=options
        )
        
        return result
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/summarize-document")
async def summarize_document(
    file: UploadFile,
    summary_length: str = "medium",
    style: str = "abstractive"
):
    """Summarize entire document"""
    try:
        # Process document
        doc = await document_processor.process_document(file)
        
        # Generate summary
        options = SummarizationOptions(length=summary_length, style=style)
        summary = await summarization_service.summarize(doc.content, options)
        
        return {
            "original_document": {
                "length": len(doc.content.split()),
                "language": doc.language,
                "file_type": doc.file_type
            },
            "summary": summary.summary,
            "compression_ratio": summary.compression_ratio,
            "quality_metrics": summary.quality_metrics
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

## Monitoring and Analytics

### Performance Monitoring

```python
from prometheus_client import Counter, Histogram, Gauge
import time

# Metrics
translation_requests = Counter('translation_requests_total', 'Total translation requests')
translation_duration = Histogram('translation_duration_seconds', 'Translation processing time')
translation_quality = Gauge('translation_quality_score', 'Average translation quality score')

@app.middleware("http")
async def add_process_time_header(request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response
```

## Key Lessons Learned

### 1. Quality vs. Speed Trade-offs

- **Extractive summarization**: Faster, more accurate for technical content
- **Abstractive summarization**: Better for narrative content, slower
- **Translation models**: Balance between quality and latency

### 2. Caching is Critical

- Document parsing is expensive - cache processed content
- Translation caching can save 80% of API costs
- Use different TTLs based on content type

### 3. Language Detection Matters

- Poor language detection leads to poor translation quality
- Preprocessing text improves detection accuracy
- Always include confidence scores for downstream decisions

### 4. Error Handling and Fallbacks

- Always have fallback models available
- Graceful degradation for partial failures
- Clear error messages for debugging

---

*This post is based on experience building and scaling document processing APIs that handle millions of documents monthly. The techniques described have been proven in production environments with strict performance and quality requirements.*
