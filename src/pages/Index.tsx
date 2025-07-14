import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title and meta
    document.title = 'Aymane Nouhail - Generative AI Data Scientist';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'AI-oriented Data Scientist specializing in RAG systems and agentic applications. Building intelligent AI solutions with modern engineering practices in Paris, France.'
      );
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aymane Nouhail",
      "jobTitle": "Generative AI Data Scientist",
      "description": "AI-oriented Data Scientist focused on building and maintaining Retrieval-Augmented Generation (RAG) and agentic applications",
      "url": window.location.origin,
      "email": "Aymane.Nouhail@gmail.com",
      "telephone": "+33751320993",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "addressCountry": "France"
      },
      "sameAs": [
        "https://github.com/aymane-nouhail",
        "https://linkedin.com/in/aymane-nouhail"
      ],
      "knowsAbout": [
        "Artificial Intelligence",
        "Machine Learning",
        "RAG Systems",
        "Python",
        "LangChain",
        "Azure",
        "Docker",
        "FastAPI"
      ]
    };

    // Add or update structured data script
    let structuredDataScript = document.getElementById('structured-data') as HTMLScriptElement;
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
