import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import MermaidDiagram from '@/components/MermaidDiagram';
import { BLOG_POSTS } from '@/constants';
import 'highlight.js/styles/github-dark.css';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  // Find the current post
  const currentPost = BLOG_POSTS.find(post => post.slug === slug);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        // Load the markdown files from the public directory
        const response = await fetch(`/src/data/blog-posts/${slug}.md`);
        if (!response.ok) {
          // Try alternative path
          const response2 = await import(`../data/blog-posts/${slug}.md?raw`);
          setContent(response2.default);
        } else {
          const text = await response.text();
          setContent(text);
        }
      } catch (err) {
        try {
          // Fallback: try to import directly
          const module = await import(`../data/blog-posts/${slug}.md?raw`);
          setContent(module.default);
        } catch (err2) {
          console.error('Failed to load blog post:', err2);
          setError('Failed to load blog post content.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const sharePost = () => {
    if (navigator.share && currentPost) {
      navigator.share({
        title: currentPost.title,
        text: currentPost.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
              <p className="text-muted-foreground mb-8">
                The blog post you're looking for doesn't exist.
              </p>
              <Link to="/#blog">
                <Button>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Link to="/#blog">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>
            </div>

            {/* Article Header */}
            <Card className="card-glow p-8 mb-8">
              <div className="space-y-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(currentPost.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {currentPost.readTime}
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={sharePost}
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {currentPost.title}
                </h1>

                {/* Excerpt */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentPost.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {currentPost.tags.map((tag) => (
                    <span key={tag} className="tech-stack-badge">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Divider */}
                <hr className="border-border" />

                {/* Article Content */}
                {loading ? (
                  <div className="flex items-center justify-center py-16">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : error ? (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground mb-4">{error}</p>
                    <p className="text-sm text-muted-foreground">
                      Check back soon as I'm adding the full blog functionality!
                    </p>
                  </div>
                ) : (
                  <div className="prose prose-invert prose-lg max-w-none">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeHighlight, rehypeRaw]}
                      components={{
                        // Skip the first h1 if it matches the post title
                        h1: ({ children, ...props }) => {
                          const text = children?.toString() || '';
                          if (text === currentPost.title) {
                            return null; // Skip redundant title
                          }
                          return (
                            <h1 className="text-3xl font-bold mb-6 text-foreground border-b border-border pb-4">
                              {children}
                            </h1>
                          );
                        },
                        h2: ({ children }) => (
                          <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">
                            {children}
                          </h3>
                        ),
                        p: ({ children, ...props }) => (
                          <p className="mb-4 text-muted-foreground leading-relaxed">
                            {children}
                          </p>
                        ),
                      code: ({ className, children, ...props }: any) => {
                        const match = /language-(\w+)/.exec(className || '');
                        const language = match ? match[1] : '';
                        const inline = !className;
                        
                        // Handle mermaid diagrams
                        if (language === 'mermaid') {
                          return <MermaidDiagram chart={String(children).replace(/\n$/, '')} />;
                        }
                        
                        return !inline ? (
                          <div className="relative mb-4">
                            <pre className="bg-muted/20 border border-border rounded-lg p-4 overflow-x-auto">
                              <code className={className}>
                                {children}
                              </code>
                            </pre>
                          </div>
                        ) : (
                          <code className="bg-muted/30 px-1 py-0.5 rounded text-sm font-mono">
                            {children}
                          </code>
                        );
                      },
                      ul: ({ children }) => (
                        <ul className="mb-4 space-y-2 text-muted-foreground">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="mb-4 space-y-2 text-muted-foreground">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="text-muted-foreground">
                          {children}
                        </li>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-primary/30 pl-4 my-4 italic text-muted-foreground bg-muted/10 py-2">
                          {children}
                        </blockquote>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-foreground">
                          {children}
                        </strong>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>
              )}
              </div>
            </Card>

            {/* Navigation to other posts */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">More Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {BLOG_POSTS
                  .filter(post => post.slug !== slug)
                  .slice(0, 2)
                  .map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`}>
                      <Card className="card-glow p-6 h-full hover:border-primary/30 transition-colors">
                        <h4 className="font-semibold mb-2 line-clamp-2">{post.title}</h4>
                        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                          <span>{formatDate(post.publishedAt)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
