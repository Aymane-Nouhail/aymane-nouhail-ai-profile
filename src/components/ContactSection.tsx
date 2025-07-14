import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+33 7 51 32 09 93',
      href: 'tel:+33751320993'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: CONTACT_INFO.location,
      href: `https://maps.google.com/?q=${CONTACT_INFO.location.replace(' ', ',')}`
    }
  ];

  const socialLinksWithColors = [
    {
      icon: Github,
      label: 'GitHub',
      href: CONTACT_INFO.github,
      color: 'hover:text-foreground'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: CONTACT_INFO.linkedin,
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${CONTACT_INFO.email}`,
      color: 'hover:text-primary'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="glow-text">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss AI projects, collaboration opportunities, or any questions about my work. 
              I'm always excited to connect with fellow AI enthusiasts and potential collaborators.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Details */}
              <Card className="card-glow p-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="card-glow p-8">
                <h3 className="text-xl font-semibold mb-6">Connect Online</h3>
                <div className="flex gap-4">
                  {socialLinksWithColors.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-full bg-card border border-border hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Follow my journey in AI and connect with me on professional networks.
                </p>
              </Card>

              {/* Quick Contact */}
              <Card className="card-glow p-8">
                <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For urgent inquiries or quick questions, feel free to reach out directly:
                </p>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start bg-primary/5 border-primary/30 hover:bg-primary/10"
                    onClick={() => window.open(`mailto:${CONTACT_INFO.email}`)}
                  >
                    <Mail className="w-4 h-4 mr-3" />
                    Send Email
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start bg-accent/5 border-accent/30 hover:bg-accent/10"
                    onClick={() => window.open('https://linkedin.com/in/aymane-nouhail')}
                  >
                    <Linkedin className="w-4 h-4 mr-3" />
                    LinkedIn Message
                  </Button>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-glow p-8">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="bg-muted/50 border-border focus:border-primary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-muted/50 border-border focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project collaboration, consultation, etc."
                      className="bg-muted/50 border-border focus:border-primary/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, questions, or how we can collaborate..."
                      rows={6}
                      className="bg-muted/50 border-border focus:border-primary/50 resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      * Required fields. I'll respond within 24-48 hours.
                    </p>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="hero-gradient px-8 hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Card>

              {/* Additional Info */}
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Prefer a different way to connect? I'm active on multiple platforms:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <span className="flex items-center gap-2">
                    📧 Email for detailed discussions
                  </span>
                  <span className="flex items-center gap-2">
                    💼 LinkedIn for professional networking
                  </span>
                  <span className="flex items-center gap-2">
                    💻 GitHub for code collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;