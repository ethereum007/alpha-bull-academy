import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const blogPosts = [
  {
    id: "how-to-learn-trading-india-2025",
    title: "How to Learn Trading as a Beginner in India (2025 Guide)",
    excerpt: "From zero knowledge to consistent trading in 90 days. Learn the proven step-by-step process to master trading in India with proper strategies and discipline.",
    author: "AlphaBull Academy",
    date: "2025-11-22",
    readTime: "8 min read",
    category: "Beginner Guide",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AlphaBull Trading Academy Blog",
    "description": "Expert insights on stock market trading, technical analysis, and investment strategies for Indian traders",
    "url": "https://alphabull.lovable.app/blog",
    "publisher": {
      "@type": "Organization",
      "name": "AlphaBull Trading Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alphabull.lovable.app/placeholder.svg"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Trading Blog - Expert Market Insights | AlphaBull Academy</title>
        <meta name="description" content="Learn stock market trading with expert guides, technical analysis strategies, and investment tips for Indian traders. Free educational content for beginners to advanced traders." />
        <meta name="keywords" content="trading blog, stock market India, technical analysis, trading strategies, beginner trading guide, investment tips" />
        <link rel="canonical" href="https://alphabull.lovable.app/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Trading Blog - Expert Market Insights | AlphaBull Academy" />
        <meta property="og:description" content="Learn stock market trading with expert guides, technical analysis strategies, and investment tips for Indian traders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphabull.lovable.app/blog" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trading Blog - Expert Market Insights | AlphaBull Academy" />
        <meta name="twitter:description" content="Learn stock market trading with expert guides, technical analysis strategies, and investment tips for Indian traders." />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Trading Insights & Guides</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert articles on stock market trading, technical analysis, and proven strategies for Indian traders
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="aspect-video bg-muted overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3">{post.category}</Badge>
                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-IN', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
