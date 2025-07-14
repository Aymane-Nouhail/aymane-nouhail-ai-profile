import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';
import { NAV_ITEMS } from '@/constants';
import { scrollToSection } from '@/utils/helpers';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on a blog post page
  const isBlogPostPage = location.pathname.startsWith('/blog/');

  useEffect(() => {
    const handleScroll = () => {
      // Only handle scroll-based active section on the homepage
      if (isBlogPostPage) return;
      
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBlogPostPage]);

  const handleScrollToSection = (sectionId: string) => {
    if (isBlogPostPage) {
      // If we're on a blog post page, navigate to homepage with hash
      navigate(`/#${sectionId}`);
    } else {
      // If we're on homepage, scroll to section
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Aymane_Nouhail_Resume.pdf';
    link.download = 'Aymane_Nouhail_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => {
                if (isBlogPostPage) {
                  navigate('/');
                } else {
                  handleScrollToSection('home');
                }
              }}
              className="text-xl font-bold glow-text hover:scale-105 transition-transform"
            >
              AN
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resume Download Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleResumeDownload}
              className="bg-primary/10 border-primary/30 hover:bg-primary/20"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-card border border-border rounded-lg mt-2 p-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollToSection(item.id)}
                  className={`nav-link text-left ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleResumeDownload}
                className="bg-primary/10 border-primary/30 hover:bg-primary/20 w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;