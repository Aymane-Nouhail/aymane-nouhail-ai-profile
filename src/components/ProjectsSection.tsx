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
  featured?: boolean;
  achievements?: string[];
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects: Project[] = [
    {
      id: 'carrefour-rag',
      title: 'RAG-based Radio Ad Generator',
      description: 'AI-powered marketing solution for automated script generation',
      longDescription: 'Built a sophisticated RAG-based system for Carrefour that ingested 500+ marketing campaigns into a database to automate radio advertisement script generation. This solution cut production time significantly and boosted output by 30%.',
      techStack: ['Python', 'LangChain', 'FastAPI', 'Azure', 'Docker', 'PostgreSQL'],
      categories: ['RAG', 'NLP', 'Production'],
      achievements: ['30% increase in output', '500+ campaigns processed', 'Production deployment'],
      featured: true
    },
    {
      id: 'filegpt-multimodal',
      title: 'FileGPT Multimodal Enhancement',
      description: 'Extended FileGPT with image, video, and audio processing capabilities',
      longDescription: 'Added comprehensive multimodal support to FileGPT, enabling ingestion, embedding, and retrieval of multimedia content alongside text. Implemented advanced front-end configuration panels and migrated from static files to Prisma-managed database.',
      techStack: ['LangChain', 'Prisma', 'TypeScript', 'Multimodal AI', 'Database Design'],
      categories: ['Multimodal', 'RAG', 'Full-Stack'],
      achievements: ['Multimodal AI integration', 'Database migration', 'User feedback iteration'],
      featured: true
    },
    {
      id: 'smart-home-assistant',
      title: 'Smart Home Voice Assistant',
      description: 'Raspberry Pi-based RAG voice assistant for smart home control',
      longDescription: 'Developed a comprehensive voice assistant POC for Green Energy Park featuring natural language device automation, hands-free activation, and multimedia control. Built with RAG architecture for knowledge-base Q&A and smart device integration.',
      techStack: ['Python', 'Raspberry Pi', 'NLP', 'IoT', 'Voice Recognition', 'RAG'],
      categories: ['IoT', 'Voice AI', 'RAG'],
      achievements: ['Voice activation', 'Smart home integration', 'Natural language control'],
      githubUrl: 'https://github.com/aymane-nouhail'
    },
    {
      id: 'moodai-therapy',
      title: 'MoodAI Therapy Assistant',
      description: 'Dynamic journaling app with mood-aware chatbot personas',
      longDescription: 'Created a proof-of-concept therapy assistant featuring mood-aware chatbot personas that adapt tone based on user sentiment. Developed RAG pipeline mapping journal sentiment to tailored CBT-based prompts for personalized guidance.',
      techStack: ['React', 'FastAPI', 'Azure', 'Time-series DB', 'Sentiment Analysis', 'CBT'],
      categories: ['Healthcare', 'NLP', 'Full-Stack'],
      achievements: ['Sentiment-aware responses', 'Longitudinal tracking', 'CBT integration'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/aymane-nouhail',
      featured: true
    },
    {
      id: 'azure-microservice',
      title: 'Containerized FastAPI Microservice',
      description: 'Production-ready document processing service on Azure',
      longDescription: 'Packaged and deployed a containerized FastAPI microservice to Azure App Service via ACR with comprehensive document summarization and translation endpoints. Implemented GitHub Actions CI/CD pipeline for automated deployment.',
      techStack: ['FastAPI', 'Docker', 'Azure App Service', 'ACR', 'GitHub Actions', 'CI/CD'],
      categories: ['DevOps', 'Microservices', 'Production'],
      achievements: ['Azure deployment', 'CI/CD automation', 'Production monitoring'],
      githubUrl: 'https://github.com/aymane-nouhail'
    },
    {
      id: 'langchain-optimization',
      title: 'LangChain Testing Optimization',
      description: 'Performance optimization for AI workflow testing',
      longDescription: 'Introduced mocking AgentExecutor in FileGPT unit tests to simulate LangChain workflows, dramatically reducing test runtime from seconds to fractions of a second while maintaining test coverage and reliability.',
      techStack: ['Python', 'LangChain', 'Unit Testing', 'Mocking', 'Performance Optimization'],
      categories: ['Testing', 'Performance', 'Development'],
      achievements: ['99% test time reduction', 'Maintained coverage', 'Development velocity improvement'],
      githubUrl: 'https://github.com/aymane-nouhail'
    }
  ];

  const categories = ['All', 'RAG', 'NLP', 'Full-Stack', 'Production', 'Multimodal', 'IoT', 'Voice AI', 'Healthcare', 'DevOps', 'Microservices', 'Testing', 'Performance', 'Development'];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(project => project.categories.includes(activeFilter));
  }, [activeFilter]);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="glow-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of AI-driven solutions, RAG systems, and production deployments that demonstrate real-world impact
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

          {/* Featured Projects Grid */}
          {activeFilter === 'All' && (
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">⭐ Featured Work</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <Card key={project.id} className="card-glow p-8 group">
                    <div className="space-y-6">
                      {/* Project Header */}
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                          {project.featured && (
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                              <Award className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
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

                      {/* Tech Stack */}
                      <div>
                        <h5 className="font-medium text-foreground mb-3">Tech Stack:</h5>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="tech-stack-badge">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4">
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
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-glow p-6 group h-full flex flex-col">
                <div className="space-y-4 flex-1">
                  {/* Project Header */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1">
                    {project.categories.map((category) => (
                      <Badge key={category} variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  {/* Tech Stack (limited) */}
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-muted/50 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-muted/50 rounded">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                  {project.demoUrl && (
                    <Button variant="default" size="sm" className="flex-1 text-xs">
                      <Play className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                  )}
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