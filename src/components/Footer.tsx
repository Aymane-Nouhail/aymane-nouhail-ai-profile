import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/aymane-nouhail', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/aymane-nouhail', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Aymane.Nouhail@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <h3 className="text-xl font-bold glow-text mb-2">Aymane Nouhail</h3>
                <p className="text-muted-foreground">
                  Generative AI Data Scientist passionate about building intelligent RAG systems 
                  and production-ready AI solutions that drive real business impact.
                </p>
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📍 Paris, France</p>
                <p>📧 Aymane.Nouhail@gmail.com</p>
                <p>📱 +33 7 51 32 09 93</p>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4 bg-primary/5 border-primary/30 hover:bg-primary/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© {currentYear} Aymane Nouhail. Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">Last updated: July 2025</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="p-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;