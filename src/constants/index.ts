import { BlogPost, ContactInfo } from '@/types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const CONTACT_INFO: ContactInfo = {
  name: 'Aymane Nouhail',
  email: 'Aymane.Nouhail@gmail.com',
  github: 'https://github.com/aymane-nouhail',
  linkedin: 'https://linkedin.com/in/aymane-nouhail',
  location: 'Paris, France'
};

export const SOCIAL_LINKS = [
  { icon: Github, href: CONTACT_INFO.github, label: 'GitHub' },
  { icon: Linkedin, href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${CONTACT_INFO.email}`, label: 'Email' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Building Production-Ready RAG Systems: Lessons from Enterprise AI',
    excerpt: 'Deep dive into the architectural decisions and engineering practices that make RAG systems scalable, maintainable, and production-ready. From document parsing pipelines to multimodal embedding strategies.',
    readTime: '12 min read',
    publishedAt: '2024-12-15',
    tags: ['RAG', 'Production', 'LangChain', 'Architecture'],
    featured: true,
    slug: 'production-ready-rag-systems'
  },
  {
    id: '2',
    title: 'LLM-Powered Creative Content Generation: Automating Ad Script Writing',
    excerpt: 'How we built an AI system that generates radio advertising scripts using retrieval-augmented generation and domain-specific knowledge. A case study in creative automation.',
    readTime: '10 min read',
    publishedAt: '2024-11-28',
    tags: ['LLMs', 'Creative AI', 'Content Generation', 'Advertising'],
    featured: true,
    slug: 'llm-creative-content-generation'
  },
  {
    id: '3',
    title: 'Document Processing at Scale: Translation and Summarization APIs',
    excerpt: 'Building robust APIs for document translation and summarization using FastAPI and modern LLMs. Learn about handling multilingual content and maintaining quality at scale.',
    readTime: '9 min read',
    publishedAt: '2024-11-10',
    tags: ['FastAPI', 'Translation', 'Summarization', 'Document Processing'],
    slug: 'document-processing-apis'
  },
  {
    id: '4',
    title: 'Prompt Engineering for Business Applications: CRM Optimization',
    excerpt: 'Practical techniques for prompt engineering in enterprise environments. How we improved workflow efficiency through strategic prompt design and preprocessing.',
    readTime: '8 min read',
    publishedAt: '2024-10-22',
    tags: ['Prompt Engineering', 'CRM', 'Workflow Optimization', 'Enterprise AI'],
    slug: 'prompt-engineering-enterprise'
  },
  {
    id: '5',
    title: 'Debugging LLM Applications: Common Pitfalls and Solutions',
    excerpt: 'Lessons learned from maintaining and debugging production LLM applications. From chunking strategies to context management and performance optimization.',
    readTime: '11 min read',
    publishedAt: '2024-10-05',
    tags: ['Debugging', 'LLMs', 'Production', 'Troubleshooting'],
    slug: 'debugging-llm-applications'
  },
  {
    id: '6',
    title: 'LangGraph for Complex AI Workflows: Beyond Simple Chains',
    excerpt: 'Moving from linear LangChain workflows to complex graph-based architectures. How LangGraph enables more sophisticated AI application patterns.',
    readTime: '13 min read',
    publishedAt: '2024-09-18',
    tags: ['LangGraph', 'AI Workflows', 'Graph Architecture', 'Advanced Patterns'],
    slug: 'langgraph-complex-workflows'
  }
];

export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export const SEO_DATA = {
  title: 'Aymane Nouhail - Generative AI Data Scientist',
  description: 'AI-oriented Data Scientist specializing in RAG systems and agentic applications. Building intelligent AI solutions with modern engineering practices in Paris, France.',
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": CONTACT_INFO.name,
    "jobTitle": "Generative AI Data Scientist",
    "description": "AI-oriented Data Scientist specializing in RAG systems and agentic applications",
    "email": CONTACT_INFO.email,
    "url": "https://aymane-nouhail.com",
    "sameAs": [
      CONTACT_INFO.linkedin,
      CONTACT_INFO.github,
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "France"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Publicis Groupe"
    }
  }
};
