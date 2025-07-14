import { useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Play, Award } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  categories: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  achievements?: string[];
  company?: string;
  period?: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 'carrefour-rag',
      title: 'RAG-based Radio Ad Generator',
      description: 'AI-powered platform for generating radio advertisement scripts from product briefs',
      longDescription: 'Built a comprehensive platform for Carrefour that parsed 500+ PowerPoint slides into structured data, separating main scripts and diffusion dates. Implemented RAG architecture with script embedding and retrieval search to feed relevant previous ads to the LLM for inspiration. Features hard-coded logic for determining appropriate date variations based on diffusion and availability dates. Transitioned from notebooks to production on Streamline platform.',
      techStack: ['Python', 'LangChain', 'Pandas', 'RAG', 'Prompt Engineering', 'Streamlit'],
      categories: ['RAG', 'NLP', 'Production'],
      achievements: ['500+ PowerPoint slides processed', 'Production deployment on Streamline', 'Advanced prompt engineering'],
      company: 'Publicis Re:Sources',
      period: 'Oct 2024 – present'
    },
    {
      id: 'filegpt-multimodal',
      title: 'FileGPT Multimodal Enhancement',
      description: 'Extended FileGPT with comprehensive multimedia processing and dynamic configuration',
      longDescription: 'Led multiple critical improvements to FileGPT including multimodal support (image, video, audio), bug fixes for web source display, chunk deduplication optimization, and page numbering corrections. Implemented mocking functionality for AgentExecutor and LangGraph migration, reducing test costs and improving speed. Currently migrating configuration from static files to dynamic database-driven system with real-time updates.',
      techStack: ['LangChain', 'LangGraph', 'Streamlit', 'Multimodal AI', 'Testing', 'Database Migration'],
      categories: ['Multimodal', 'RAG', 'Full-Stack', 'Testing'],
      achievements: ['Multimodal AI integration', 'Test optimization & mocking', 'Dynamic configuration system', 'Bug resolution'],
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
      period: 'Oct 2024 – present'
    },
    {
      id: 'smart-home-assistant',
      title: 'Smart Home Voice Assistant',
      description: 'Raspberry Pi-based RAG voice assistant for natural language device control',
      longDescription: 'Developed a comprehensive voice assistant POC for Green Energy Park featuring natural language device automation and hands-free activation using trigger words. Built with RAG architecture for knowledge-base Q&A and smart device integration, supporting lights, appliances, and multimedia control through conversational interface.',
      techStack: ['Python', 'Raspberry Pi', 'RAG', 'Voice Recognition', 'IoT Integration', 'Natural Language Processing'],
      categories: ['IoT', 'Voice AI', 'RAG'],
      achievements: ['Voice activation system', 'Smart home integration', 'Natural language control', 'Edge deployment'],
      company: 'Green Energy Park',
      period: 'Apr 2024 – July 2024'
    },
    {
      id: 'moodai-therapy',
      title: 'MoodAI Therapy Assistant',
      description: 'Dynamic journaling app with mood-aware chatbot personas and longitudinal tracking',
      longDescription: 'Created a proof-of-concept therapy assistant featuring mood-aware chatbot personas that adapt tone based on user sentiment analysis. Developed RAG pipeline mapping journal sentiment to tailored CBT-based prompts for personalized guidance. Includes time-series database for longitudinal mood tracking with CSV export capabilities for user and therapist review.',
      techStack: ['React', 'FastAPI', 'Azure', 'Time-series Database', 'Sentiment Analysis', 'CBT', 'RAG Pipeline'],
      categories: ['Healthcare', 'NLP', 'Full-Stack'],
      achievements: ['Sentiment-aware responses', 'Longitudinal mood tracking', 'CBT integration', 'Azure deployment'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/aymane-nouhail',
      period: 'Personal Project'
    },
    {
      id: 'salesforce-optimization',
      title: 'Salesforce Opportunity Deduplication',
      description: 'AI-powered solution to prevent duplicate opportunities through advanced prompt engineering',
      longDescription: 'Developed prompt engineering solution to avoid opportunity duplication in Salesforce. Created Python POC demonstrating JSON preprocessing methodology to simplify LLM classification tasks. Proposed innovative approach to preprocess data before LLM analysis, improving accuracy and reducing computational overhead.',
      techStack: ['Python', 'Prompt Engineering', 'JSON Processing', 'Salesforce', 'LLM Classification'],
      categories: ['NLP', 'Optimization', 'CRM'],
      achievements: ['Prompt engineering innovation', 'Python POC development', 'Classification optimization'],
      company: 'Publicis Re:Sources',
      period: 'Oct 2024 – present'
    }
  ];

  const categories = ['All', 'RAG', 'NLP', 'Production', 'Multimodal', 'IoT', 'Voice AI', 'Healthcare', 'Full-Stack', 'DevOps', 'Microservices', 'Testing', 'Optimization', 'CRM'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI <span className="glow-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Production-ready AI solutions, RAG systems, and innovative applications that demonstrate real-world impact across industries
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`project-filter-btn ${activeFilter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid - All Same Size */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-glow p-8 group h-full flex flex-col">
                <div className="space-y-6 flex-1">
                  {/* Project Header */}
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      {project.company && (
                        <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30 text-xs">
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
                    <Button variant="default" size="sm" className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
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
            <Button 
              size="lg"
              className="hero-gradient px-8 hover:scale-105 transition-all duration-300"
            >
              View Full Portfolio on GitHub
              <Github className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;