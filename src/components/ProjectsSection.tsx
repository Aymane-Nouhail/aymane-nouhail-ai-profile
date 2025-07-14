import { useState, useMemo, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play, Award, ChevronDown, Building2, Filter, X } from 'lucide-react';
import { Project } from '@/types';
import { CONTACT_INFO } from '@/constants';

const ProjectsSection = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>(['All']);
  const [activeCompanyFilter, setActiveCompanyFilter] = useState<string>('All');
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showTechFilters, setShowTechFilters] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCompanyDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const projects: Project[] = [
    {
      id: 'carrefour-rag',
      title: 'RAG-based Radio Ad Generator',
      description: 'AI-powered platform for generating radio advertisement scripts from product briefs',
      longDescription: 'Built a comprehensive platform for a major retail client that parsed 500+ PowerPoint slides into structured data, separating main scripts and diffusion dates. Implemented RAG architecture with script embedding and retrieval search to feed relevant previous ads to the LLM for inspiration. Features hard-coded logic for determining appropriate date variations based on diffusion and availability dates. Transitioned from notebooks to production on cloud platform.',
      techStack: ['Python', 'LangChain', 'Pandas', 'RAG', 'Prompt Engineering', 'Streamlit'],
      categories: ['RAG', 'NLP', 'Production'],
      achievements: ['500+ PowerPoint slides processed', 'Production deployment on cloud platform', 'Advanced prompt engineering'],
      company: 'Publicis Re:Sources',
      period: 'Oct 2024 – present',
      featured: true
    },
    {
      id: 'multimodal-ai-enhancement',
      title: 'Multimodal AI Enhancement',
      description: 'Extended agentic conversational AI with comprehensive multimedia processing capabilities',
      longDescription: 'Led the implementation of multimodal support for an enterprise conversational AI system, enabling processing of images, videos, and audio files alongside text. Developed unified multimodal pipelines that seamlessly integrate visual and audio understanding with existing RAG architecture. Implemented advanced preprocessing for different media types and optimized inference workflows for production deployment.',
      techStack: ['Multimodal AI', 'Computer Vision', 'Audio Processing', 'LangChain', 'Pipeline Optimization'],
      categories: ['Multimodal', 'AI Enhancement', 'Production'],
      achievements: ['Image, video & audio processing', 'Unified multimodal pipeline', 'Production optimization', 'Media type integration'],
      company: 'Publicis Re:Sources',
      period: 'Oct 2024 – present',
      featured: true
    },
    {
      id: 'conversational-ai-maintenance',
      title: 'Conversational AI System Maintenance',
      description: 'Comprehensive maintenance and optimization of enterprise-grade agentic conversational AI',
      longDescription: 'Responsible for maintaining and enhancing a production conversational AI system, focusing on bug fixes, performance optimization, and system reliability. Implemented chunk deduplication optimization, resolved web source display issues, and corrected page numbering inconsistencies. Developed comprehensive testing framework with mocking functionality for AgentExecutor, reducing test costs and improving development speed.',
      techStack: ['LangChain', 'LangGraph', 'Testing Frameworks', 'Performance Optimization', 'Debugging'],
      categories: ['Maintenance', 'Testing', 'Performance', 'Production'],
      achievements: ['Bug resolution & system stability', 'Test framework development', 'Performance optimization', 'Cost reduction through mocking'],
      company: 'Publicis Re:Sources',
      period: 'Oct 2024 – present'
    },
    {
      id: 'textstudio-api',
      title: 'TextStudio Translation & Summarization API',
      description: 'Containerized FastAPI service for document processing deployed on Azure',
      longDescription: 'Developed and deployed a production-ready API for document translation and summarization using FastAPI and LangChain. The service is containerized with Docker and deployed to Azure Container Registry, providing scalable document processing capabilities. Features async LLM inference endpoints with comprehensive error handling and monitoring.',
      techStack: ['FastAPI', 'LangChain', 'Docker', 'Azure Container Registry', 'Async Programming'],
      categories: ['Production', 'Microservices', 'DevOps'],
      achievements: ['Azure production deployment', 'Containerized architecture', 'API documentation'],
      company: 'Publicis Re:Sources',
      period: 'Oct 2024 – present',
      featured: true
    },
    {
      id: 'smart-home-assistant',
      title: 'Smart Home Voice Assistant',
      description: 'Raspberry Pi-based RAG voice assistant for natural language device control',
      longDescription: 'Developed a comprehensive voice assistant POC for a green technology company featuring natural language device automation and hands-free activation using trigger words. Built with RAG architecture for knowledge-base Q&A and smart device integration, supporting lights, appliances, and multimedia control through conversational interface.',
      techStack: ['Python', 'Raspberry Pi', 'RAG', 'Voice Recognition', 'IoT Integration', 'Natural Language Processing'],
      categories: ['IoT', 'Voice AI', 'RAG'],
      achievements: ['Voice activation system', 'Smart home integration', 'Natural language control', 'Edge deployment'],
      company: 'Green Energy Park ',
      period: 'Apr 2024 – July 2024',
      featured: true
    },
    {
      id: 'moodai-therapy',
      title: 'MoodAI Therapy Assistant',
      description: 'Dynamic journaling app with mood-aware chatbot personas and longitudinal tracking',
      longDescription: 'Created a proof-of-concept therapy assistant featuring mood-aware chatbot personas that adapt tone based on user sentiment analysis. Developed RAG pipeline mapping journal sentiment to tailored CBT-based prompts for personalized guidance. Includes time-series database for longitudinal mood tracking with CSV export capabilities for user and therapist review.',
      techStack: ['React', 'FastAPI', 'Azure', 'Time-series Database', 'Sentiment Analysis', 'CBT', 'RAG Pipeline'],
      categories: ['Healthcare', 'NLP', 'Full-Stack'],
      achievements: ['Sentiment-aware responses', 'Longitudinal mood tracking', 'CBT integration', 'Azure deployment'],
      company: 'Personal Project',
      period: 'Personal Project',
      featured: true
    },
    {
      id: 'salesforce-optimization',
      title: 'CRM Opportunity Deduplication',
      description: 'AI-powered solution to prevent duplicate opportunities through advanced prompt engineering',
      longDescription: 'Developed prompt engineering solution to avoid opportunity duplication in CRM systems. Created Python POC demonstrating JSON preprocessing methodology to simplify LLM classification tasks. Proposed innovative approach to preprocess data before LLM analysis, improving accuracy and reduced computational overhead.',
      techStack: ['Python', 'Prompt Engineering', 'JSON Processing', 'CRM Integration', 'LLM Classification'],
      categories: ['NLP', 'Optimization', 'CRM'],
      achievements: ['Prompt engineering innovation', 'Python POC development', 'Classification optimization'],
      company: 'Publicis Re:Sources',
      period: 'Oct 2024 – present'
    },
    {
      id: 'llm-clustering-framework',
      title: 'LLM Clustering Framework',
      description: 'Comprehensive framework for evaluating LLM-enhanced clustering techniques with multiple enhancement methods',
      longDescription: 'Built a comprehensive evaluation framework for LLM-enhanced clustering techniques inspired by Viswanathan et al. (2023). Implemented multiple enhancement methods including keyphrase expansion, LLM-based clustering correction, and pairwise constraints with LLM oracle. Features configurable prompts, automatic embedding caching, and comprehensive multi-metric evaluation (Accuracy, F1, NMI, ARI) across different datasets.',
      techStack: ['Python', 'OpenAI Embeddings', 'Hugging Face', 'KMeans', 'LLM Integration', 'Research Framework'],
      categories: ['Clustering', 'Research', 'Evaluation'],
      achievements: ['Multi-method clustering evaluation', 'LLM oracle integration', 'Automated experiment logging', 'Research framework implementation'],
      githubUrl: 'https://github.com/Aymane-Nouhail/llm-clustering-project',
      company: 'Personal Project',
      period: 'May 2025',
      featured: true
    },
    {
      id: 'medical-thesis-statistical-analysis',
      title: 'Medical Thesis Statistical Analysis',
      description: 'Comprehensive statistical analysis for two medical research theses examining pediatric pain management and medical education outcomes',
      longDescription: 'Provided end-to-end statistical consulting for two independent medical research projects. First study analyzed the impact of parental presence on pediatric pain perception in clinical settings, involving complex survey data and pain scale measurements. Second study examined the relationship between training satisfaction and career pathway choices among medical students and residents. Performed comprehensive data preprocessing, exploratory data analysis, hypothesis testing, and results interpretation. Delivered publication-ready statistical reports with clear visualizations and clinical interpretations for medical audiences.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Statsmodels', 'Statistical Testing', 'Data Visualization'],
      categories: ['Healthcare', 'Statistics', 'Research', 'Data Analysis'],
      achievements: ['Two medical thesis statistical analyses', 'Advanced hypothesis testing (Mann-Whitney, Chi-Squared)', 'Clinical data interpretation', 'Publication-ready reporting', 'Medical research methodology'],
      company: 'Freelance Client',
      period: 'Medical Research Consulting'
    },
    {
      id: 'nameplate-information-extraction',
      title: 'Nameplate Information Extraction Model',
      description: 'OCR and NER-based system for extracting structured information from industrial equipment nameplates',
      longDescription: 'Developed a comprehensive information extraction pipeline for processing industrial equipment nameplates using OCR and custom Named Entity Recognition models. The system transcribes text from nameplate images and extracts key information including manufacturer, model, and serial numbers. Implemented data preprocessing and annotation workflows to prepare training data, then designed and optimized a custom NER model using spaCy. The solution enables automated digitization of equipment information for inventory management and maintenance tracking systems.',
      techStack: ['Python', 'spaCy', 'OCR', 'Named Entity Recognition', 'Data Preprocessing', 'Text Annotation', 'Model Training'],
      categories: ['NLP', 'OCR', 'Information Extraction', 'Machine Learning'],
      achievements: ['Custom NER model development', 'OCR text preprocessing pipeline', 'Data annotation and structuring', 'Performance evaluation with F1-score and recall metrics', 'Industrial equipment data digitization'],
      company: 'Personal Project',
      period: 'NLP Research Project'
    }
  ];

  const categories = ['All', 'RAG', 'NLP', 'Production', 'Multimodal', 'AI Enhancement', 'Maintenance', 'Performance', 'IoT', 'Voice AI', 'Healthcare', 'Full-Stack', 'DevOps', 'Microservices', 'Testing', 'Optimization', 'CRM', 'Clustering', 'Research', 'Evaluation', 'Statistics', 'Data Analysis', 'OCR', 'Information Extraction', 'Machine Learning'];

  const companyFilters = ['All', 'Publicis Re:Sources', 'Green Energy Park ', 'Personal/Freelance'];

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Show only featured projects unless "Show All" is toggled
    if (!showAllProjects) {
      filtered = filtered.filter(project => project.featured);
    }
    
    // First filter by company
    if (activeCompanyFilter !== 'All') {
      if (activeCompanyFilter === 'Personal/Freelance') {
        filtered = filtered.filter(project => 
          project.company === 'Personal Project' || project.company === 'Freelance Client'
        );
      } else {
        filtered = filtered.filter(project => project.company === activeCompanyFilter);
      }
    }
    
    // Then filter by categories
    if (activeFilters.includes('All')) {
      return filtered;
    }
    
    return filtered.filter(project => 
      project.categories.some(category => activeFilters.includes(category))
    );
  }, [activeFilters, activeCompanyFilter, showAllProjects]);

  const handleFilterToggle = (category: string) => {
    if (category === 'All') {
      setActiveFilters(['All']);
    } else {
      setActiveFilters(prev => {
        const newFilters = prev.filter(f => f !== 'All');
        if (newFilters.includes(category)) {
          const updated = newFilters.filter(f => f !== category);
          return updated.length === 0 ? ['All'] : updated;
        } else {
          return [...newFilters, category];
        }
      });
    }
  };

  const handleCompanyFilterChange = (company: string) => {
    setActiveCompanyFilter(company);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI <span className="glow-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Production-ready AI solutions, RAG systems, and innovative applications that demonstrate real-world impact across industries
            </p>
            
            {/* Featured/All Projects Toggle */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setShowAllProjects(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !showAllProjects
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                ⭐ Featured Projects ({projects.filter(p => p.featured).length})
              </button>
              <button
                onClick={() => setShowAllProjects(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  showAllProjects
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                📂 All Projects ({projects.length})
              </button>
            </div>
          </div>

          {/* Enhanced Filter Controls */}
          <div className="mb-12 space-y-6">
            {/* Primary Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Company Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
                  className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:bg-accent/50 transition-colors min-w-[240px] justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">
                      {activeCompanyFilter === 'All' ? 'All Organizations' : activeCompanyFilter}
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showCompanyDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showCompanyDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-10">
                    {companyFilters.map((company) => (
                      <button
                        key={company}
                        onClick={() => {
                          handleCompanyFilterChange(company);
                          setShowCompanyDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-accent/50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          activeCompanyFilter === company ? 'bg-accent/30 font-medium' : ''
                        }`}
                      >
                        {company === 'All' ? 'All Organizations' : company}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Technology Filter Toggle */}
              <button
                onClick={() => setShowTechFilters(!showTechFilters)}
                className={`flex items-center gap-2 px-6 py-3 border rounded-lg transition-colors ${
                  showTechFilters || !activeFilters.includes('All')
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border hover:bg-accent/50'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span className="font-medium">Technology Filters</span>
                {!activeFilters.includes('All') && (
                  <Badge variant="secondary" className="ml-1 bg-primary-foreground/20 text-primary-foreground">
                    {activeFilters.length}
                  </Badge>
                )}
              </button>
            </div>

            {/* Active Filters Display */}
            {(!activeFilters.includes('All') || activeCompanyFilter !== 'All') && (
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {activeCompanyFilter !== 'All' && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Building2 className="w-3 h-3" />
                    {activeCompanyFilter === 'Personal/Freelance' ? 'Personal/Freelance' : activeCompanyFilter}
                    <button
                      onClick={() => handleCompanyFilterChange('All')}
                      className="ml-1 hover:bg-destructive/20 rounded-full"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                )}
                {!activeFilters.includes('All') && activeFilters.map((filter) => (
                  <Badge key={filter} variant="outline" className="flex items-center gap-1">
                    {filter}
                    <button
                      onClick={() => handleFilterToggle(filter)}
                      className="ml-1 hover:bg-destructive/20 rounded-full"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
                <button
                  onClick={() => {
                    setActiveFilters(['All']);
                    setActiveCompanyFilter('All');
                  }}
                  className="text-xs text-muted-foreground hover:text-foreground underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Expandable Technology Filters */}
            {showTechFilters && (
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleFilterToggle(category)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                        activeFilters.includes(category)
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {category}
                      {activeFilters.includes(category) && category !== 'All' && (
                        <span className="ml-1">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Results Summary */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredProjects.length}</span> of{' '}
                <span className="font-medium text-foreground">
                  {showAllProjects ? projects.length : projects.filter(p => p.featured).length}
                </span>{' '}
                {showAllProjects ? 'projects' : 'featured projects'}
              </p>
            </div>
          </div>

          {/* Projects Grid - All Same Size */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className={`card-glow p-8 group h-full flex flex-col ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
                <div className="space-y-6 flex-1">
                  {/* Project Header */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {project.title}
                        </h4>
                        {project.featured && showAllProjects && (
                          <span className="text-primary text-sm flex-shrink-0">⭐</span>
                        )}
                      </div>
                      {project.company && (
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30 text-xs flex-shrink-0 self-start">
                          {project.company}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
                    {project.period && (
                      <p className="text-xs text-muted-foreground mt-2">📅 {project.period}</p>
                    )}
                  </div>

                  {/* Achievements */}
                  {project.achievements && (
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Categories */}
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Categories:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((category) => (
                        <Badge key={category} variant="outline" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h5 className="font-medium text-foreground mb-2">Tech Stack:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-stack-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-6 mt-6 border-t border-border">
                  {project.demoUrl && (
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      // For now, scroll to contact section to discuss the project
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work or discussing a collaboration?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;