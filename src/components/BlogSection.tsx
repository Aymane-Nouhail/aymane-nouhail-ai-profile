import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Calendar, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '@/constants';

const BlogSection = () => {
  const navigate = useNavigate();
  
  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  const recentPosts = BLOG_POSTS.filter(post => !post.featured).slice(0, 4);

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
                <Card 
                  key={post.id} 
                  className="card-glow p-8 group cursor-pointer"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
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
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto font-medium text-primary hover:text-primary-glow"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/blog/${post.slug}`);
                        }}
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/blog/${post.slug}`);
                        }}
                      >
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
                <Card 
                  key={post.id} 
                  className="card-glow p-6 group cursor-pointer h-full flex flex-col"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
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
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between p-0 h-auto text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/blog/${post.slug}`);
                      }}
                    >
                      Read More
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default BlogSection;