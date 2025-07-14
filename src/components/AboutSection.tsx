import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const skills = {
    programming: [
      'Python', 'OOP', 'Git', 'LangChain', 'FastAPI', 'Docker', 
      'Azure', 'CI/CD', 'PostgreSQL', 'MySQL', 'Prisma ORM'
    ],
    mathematics: [
      'Calculus', 'Linear Algebra', 'Probability', 'Statistics', 
      'Machine Learning Algorithms'
    ],
    languages: [
      'English (C1 - IELTS 7.5/9)', 
      'French (C1 - TCF 566/699)'
    ]
  };

  const education = [
    {
      degree: "Master's in Machine Learning for Data Science",
      school: "Université Paris Cité",
      location: "Paris, France",
      period: "Sept 2024 – present",
      current: true,
      description: "Industry-focused program combining advanced ML techniques with practical deployment skills. Covering deep learning, NLP, generative AI, and reinforcement learning alongside cloud computing, containerization, and big data analytics.",
      highlights: ["Deep Learning & NLP", "Generative AI", "Cloud Computing", "Data Engineering", "Reinforcement Learning"]
    },
    {
      degree: "Bachelor's in Data Science",
      school: "Mohammed VI Polytechnic University",
      location: "Benguerir, Morocco",
      period: "Sept 2021 – June 2024",
      current: false,
      description: "Rigorous theoretical foundation in mathematics and computer science with comprehensive coverage of statistical methods, optimization theory, and algorithmic thinking. Strong emphasis on mathematical rigor and analytical problem-solving.",
      highlights: ["Linear Algebra & Real Analysis", "Stochastic Processes", "Convex Optimization", "Statistical Inference", "C++ & Java Programming"]
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="glow-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about transforming complex data challenges into intelligent AI solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio Section */}
            <div className="space-y-6">
              <Card className="card-glow p-8">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">My Story</h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    As an AI-oriented Data Scientist, I specialize in building and maintaining 
                    <strong className="text-primary"> Retrieval-Augmented Generation (RAG)</strong> and 
                    <strong className="text-primary"> agentic applications</strong> using modern software 
                    engineering practices.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    My journey combines academic rigor with practical industry experience, having worked 
                    with cutting-edge AI technologies at <strong className="text-accent">Publicis Re:Sources </strong> 
                    and <strong className="text-accent">Green Energy Park</strong>. I'm passionate about 
                    creating AI solutions that deliver real business value while maintaining high engineering standards.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing my Master's at Université Paris Cité, I continue to explore the 
                    intersection of machine learning theory and practical AI deployment, with a focus on 
                    containerization, CI/CD pipelines, and scalable architecture design.
                  </p>
                </div>
              </Card>

              {/* Education */}
              <Card className="card-glow p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-4">
                        <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${edu.current ? 'bg-primary' : 'bg-muted'}`}></div>
                        <div className="flex-1">
                          <div className="mb-3">
                            <h4 className="font-semibold text-foreground text-lg">{edu.degree}</h4>
                            <p className="text-primary font-medium">{edu.school}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                              <span>{edu.location}</span>
                              <span className="hidden sm:block">•</span>
                              <span>{edu.period}</span>
                              {edu.current && (
                                <Badge variant="secondary" className="text-xs w-fit">Current</Badge>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {edu.description}
                          </p>
                          
                          <div>
                            <h5 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wide">Key Areas</h5>
                            <div className="flex flex-wrap gap-1">
                              {edu.highlights.map((highlight, idx) => (
                                <span key={idx} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < education.length - 1 && (
                        <div className="absolute left-1.5 top-12 w-px h-16 bg-border"></div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <Card className="card-glow p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Programming & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((skill) => (
                        <span key={skill} className="tech-stack-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Mathematics & ML</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.mathematics.map((skill) => (
                        <span key={skill} className="tech-stack-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <span key={skill} className="tech-stack-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Current Focus */}
              <Card className="card-glow p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Current Focus</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Research & Development</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-foreground font-medium">Scalable RAG Architectures</span>
                          <p className="text-muted-foreground text-sm">Designing production-ready retrieval systems with advanced chunking strategies and embedding optimization</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-foreground font-medium">Multimodal AI Integration</span>
                          <p className="text-muted-foreground text-sm">Extending conversational AI with comprehensive image, video, and audio processing capabilities</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-foreground font-medium">Agentic Workflow Optimization</span>
                          <p className="text-muted-foreground text-sm">Building intelligent agents with LangGraph for complex decision-making and task automation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Engineering Excellence</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-foreground font-medium">MLOps & Deployment</span>
                          <p className="text-muted-foreground text-sm">Implementing CI/CD pipelines, containerization, and monitoring for AI systems in production</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-foreground font-medium">Cloud Architecture</span>
                          <p className="text-muted-foreground text-sm">Designing scalable AI solutions on Azure with microservices architecture and serverless computing</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="text-foreground font-medium">Performance Optimization</span>
                          <p className="text-muted-foreground text-sm">Fine-tuning inference speed, cost efficiency, and system reliability for enterprise applications</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Industry Impact</h4>
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/10">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Currently contributing to enterprise-grade AI solutions at <span className="text-primary font-medium">Publicis Re:Sources</span>, 
                        focusing on production RAG systems and multimodal AI capabilities. Committed to delivering 
                        <span className="text-accent font-medium"> scalable generative AI applications</span> while maintaining a strong 
                        emphasis on software engineering best practices and robust deployment strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;