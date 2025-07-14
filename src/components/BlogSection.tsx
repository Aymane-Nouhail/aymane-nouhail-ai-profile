import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Calendar, ExternalLink } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  featured?: boolean;
  slug: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Production-Ready RAG Systems: Lessons from FileGPT',
      excerpt: 'Deep dive into the architectural decisions and engineering practices that make RAG systems scalable, maintainable, and production-ready. From data ingestion pipelines to multimodal embedding strategies.',
      readTime: '12 min read',
      publishedAt: '2024-12-15',
      tags: ['RAG', 'Production', 'LangChain', 'Architecture'],
      featured: true,
      slug: 'production-ready-rag-systems'
    },
    {
      id: '2',
      title: 'Optimizing LangChain Workflows: From Seconds to Milliseconds',
      excerpt: 'How we reduced test execution time by 99% using strategic mocking and test optimization techniques. A practical guide to testing AI workflows efficiently.',
      readTime: '8 min read',
      publishedAt: '2024-11-28',
      tags: ['LangChain', 'Testing', 'Performance', 'Development'],
      featured: true,
      slug: 'optimizing-langchain-workflows'
    },
    {
      id: '3',
      title: 'Multimodal AI in Practice: Extending RAG Beyond Text',
      excerpt: 'Implementing multimodal capabilities in AI applications. From image and video processing to audio analysis, learn how to build truly comprehensive AI systems.',
      readTime: '15 min read',
      publishedAt: '2024-11-10',
      tags: ['Multimodal AI', 'Computer Vision', 'Audio Processing', 'RAG'],
      slug: 'multimodal-ai-in-practice'
    },
    {
      id: '4',
      title: 'MLOps for AI Teams: Containerization and CI/CD Best Practices',
      excerpt: 'A comprehensive guide to deploying AI applications using Docker, Azure, and GitHub Actions. Learn the MLOps practices that enable rapid, reliable deployments.',
      readTime: '10 min read',
      publishedAt: '2024-10-22',
      tags: ['MLOps', 'Docker', 'Azure', 'CI/CD'],
      slug: 'mlops-for-ai-teams'
    },
    {
      id: '5',
      title: 'The Future of Agentic AI: Designing Intelligent Workflows',
      excerpt: 'Exploring the next generation of AI systems that can plan, execute, and adapt. From simple chatbots to complex agentic workflows that solve real-world problems.',
      readTime: '14 min read',
      publishedAt: '2024-10-05',
      tags: ['Agentic AI', 'AI Agents', 'Workflow Design', 'Future Tech'],
      slug: 'future-of-agentic-ai'
    },
    {
      id: '6',
      title: 'Voice AI for Smart Homes: Building Natural Language Interfaces',
      excerpt: 'From concept to deployment: creating voice-controlled smart home systems using RAG architectures and natural language processing on edge devices.',
      readTime: '11 min read',
      publishedAt: '2024-09-18',
      tags: ['Voice AI', 'IoT', 'Edge Computing', 'Smart Home'],
      slug: 'voice-ai-smart-homes'
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 4);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="glow-text">Blog</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep dives into AI engineering, practical tutorials, and lessons learned from building production AI systems
            </p>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="text-primary">⭐</span>
              Featured Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="card-glow p-8 group cursor-pointer">
                  <div className="space-y-4">
                    {/* Post Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                        Featured
                      </Badge>
                    </div>

                    {/* Post Content */}
                    <div>
                      <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="tech-stack-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-4">
                      <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary-glow">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Recent Articles</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentPosts.map((post) => (
                <Card key={post.id} className="card-glow p-6 group cursor-pointer h-full flex flex-col">
                  <div className="space-y-3 flex-1">
                    {/* Post Meta */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Post Content */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Primary Tag */}
                    <div>
                      <Badge variant="outline" className="text-xs">
                        {post.tags[0]}
                      </Badge>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="pt-4 mt-4 border-t border-border">
                    <Button variant="ghost" className="w-full justify-between p-0 h-auto text-sm font-medium">
                      Read More
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Blog CTA */}
          <div className="text-center">
            <Card className="card-glow p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest insights on AI engineering, RAG systems, and production ML delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button className="hero-gradient px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                No spam, unsubscribe anytime. Updates about new articles and AI insights.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;