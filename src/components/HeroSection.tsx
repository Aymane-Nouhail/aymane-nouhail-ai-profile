import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Zap, Brain, Code2, Sparkles, Database, Cpu, Lightbulb } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';
import { scrollToSection } from '@/utils/helpers';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Aymane Nouhail';
  
  const scrollToNext = () => {
    scrollToSection('about');
  };

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const techStack = [
    { name: 'Python', icon: Code2 },
    { name: 'RAG Systems', icon: Brain },
    { name: 'LangChain', icon: Zap },
    { name: 'Azure', icon: Database },
    { name: 'FastAPI', icon: Cpu },
    { name: 'AI Research', icon: Lightbulb },
  ];

  const FloatingTechBadge = ({ tech, delay, position }: { tech: any, delay: number, position: string }) => (
    <div 
      className={`absolute ${position} animate-float-gentle opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-110 z-10`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full border border-primary/40 backdrop-blur-sm shadow-lg">
        <tech.icon className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium text-foreground">{tech.name}</span>
      </div>
    </div>
  );

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 animate-gradient-shift"></div>
        
        {/* Multiple Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 border-2 border-primary/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-accent/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-accent/20 animate-bounce-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Floating Tech Stack Badges */}
      <FloatingTechBadge tech={techStack[0]} delay={0} position="top-24 left-1/3" />      
      <FloatingTechBadge tech={techStack[1]} delay={1} position="top-24 right-1/3" />     
      <FloatingTechBadge tech={techStack[2]} delay={2} position="bottom-24 left-1/3" />   
      <FloatingTechBadge tech={techStack[3]} delay={3} position="bottom-24 right-1/3" /> 
      <FloatingTechBadge tech={techStack[4]} delay={1.5} position="top-1/2 left-20" />    
      <FloatingTechBadge tech={techStack[5]} delay={2.5} position="top-1/2 right-20" />   
      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          {/* Animated Greeting with Icon */}
          <div className="animate-slide-up">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              <p className="text-lg text-muted-foreground">
                Hi there! I'm
              </p>
            </div>
          </div>

          {/* Typing Animation Name */}
          <div className="relative mb-6">
            <h1 className="text-5xl md:text-7xl font-bold animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="glow-text-enhanced">{displayText}</span>
              <span className="animate-blink text-primary">|</span>
            </h1>
            {/* Glowing backdrop */}
            <div className="absolute inset-0 text-5xl md:text-7xl font-bold text-primary/20 blur-2xl -z-10">
              {displayText}
            </div>
          </div>

          {/* Enhanced Title with Icons */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
              <Brain className="w-8 h-8 text-primary animate-pulse hidden sm:block" />
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                Generative AI Data Scientist
              </h2>
              <Zap className="w-8 h-8 text-accent animate-pulse hidden sm:block" />
            </div>
          </div>

          {/* Enhanced Tagline with Card Background */}
          <div className="animate-slide-up mb-8" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-105">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Building intelligent <span className="text-primary font-semibold glow-text">RAG systems</span> and{' '}
                  <span className="text-accent font-semibold glow-text">agentic applications</span> with modern engineering practices.{' '}
                  Transforming data into actionable AI solutions that drive{' '}
                  <span className="text-primary font-semibold">real business impact</span>.
                </p>
              </div>
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>

          {/* Enhanced Location & Contact */}
          <div className="animate-slide-up mb-12" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <span className="text-red-400">📍</span>
                <span className="text-muted-foreground font-medium">{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <span className="text-blue-400">📧</span>
                <span className="text-muted-foreground font-medium">{CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="animate-scale-in mb-12" style={{ animationDelay: '1s' }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="group relative overflow-hidden hero-gradient px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/20"
                onClick={() => scrollToSection('projects')}
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ExternalLink className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group px-8 py-6 text-lg bg-card/50 border-2 border-primary/30 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-primary/10"
                onClick={() => scrollToSection('contact')}
              >
                <span className="flex items-center">
                  Get in Touch
                  <Mail className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>

          {/* Enhanced Social Links */}
          <div className="animate-scale-in" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center justify-center gap-6">
              <a 
                href={CONTACT_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-gradient-to-br from-card/80 to-card/40 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Github className="w-6 h-6 group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
              <a 
                href={CONTACT_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-gradient-to-br from-card/80 to-card/40 border border-border hover:border-blue-400/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
              <a 
                href={`mailto:${CONTACT_INFO.email}`}
                className="group relative p-4 rounded-full bg-gradient-to-br from-card/80 to-card/40 border border-border hover:border-accent/50 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-6 h-6 group-hover:text-accent transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="group fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-medium opacity-70 group-hover:opacity-100">Explore</span>
          <div className="p-2 rounded-full border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 animate-bounce">
            <ArrowDown className="w-5 h-5" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;