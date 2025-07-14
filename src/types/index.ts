export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  featured?: boolean;
  slug: string;
}

export interface Project {
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

export interface ContactInfo {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}

export interface SocialLink {
  icon: any;
  href: string;
  label: string;
}
