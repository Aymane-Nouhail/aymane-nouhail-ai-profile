import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '@/constants';
import { scrollToSection } from '@/utils/helpers';

const HeroSection = () => {
  const scrollToNext = () => {
    scrollToSection('about');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4 animate-slide-up">
            Hi there! I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="glow-text">Aymane</span>{' '}
            <span className="text-foreground">Nouhail</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Generative AI Data Scientist
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Building intelligent RAG systems and agentic applications with modern engineering practices. 
            Transforming data into actionable AI solutions that drive real business impact.
          </p>

          {/* Location & Contact */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <span className="flex items-center gap-2">
              📍 {CONTACT_INFO.location}
            </span>
            <span className="flex items-center gap-2">
              📧 {CONTACT_INFO.email}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-scale-in" style={{ animationDelay: '1s' }}>
            <Button 
              size="lg"
              className="hero-gradient px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              View My Work
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg bg-card/50 border-border hover:bg-card hover:scale-105 transition-all duration-300"
            >
              Get in Touch
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 animate-scale-in" style={{ animationDelay: '1.2s' }}>
            <a 
              href={CONTACT_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href={CONTACT_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="p-3 rounded-full bg-card/50 border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to next section"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;