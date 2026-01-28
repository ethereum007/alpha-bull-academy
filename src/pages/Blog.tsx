import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/Disclaimer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { blogPostsMeta } from "@/data/blogPosts";

const Blog = () => {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AlphaBull Trading Academy Blog",
    "description": "Expert insights on stock market trading, technical analysis, and investment strategies for Indian traders",
    "url": "https://alphabull.club/blog",
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "Organization",
      "name": "AlphaBull Trading Academy",
      "url": "https://alphabull.club",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alphabull.club/favicon.ico"
      }
    },
    "blogPost": blogPostsMeta.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://alphabull.club/blog/${post.id}`
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://alphabull.club"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://alphabull.club/blog"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Trading Blog - Expert Stock Market Insights | AlphaBull Academy Hyderabad</title>
        <meta name="description" content="Learn stock market trading with expert guides on technical analysis, price action, options trading & investment strategies. Free educational content for Indian traders - beginner to advanced." />
        <meta name="keywords" content="trading blog India, stock market blog, technical analysis guide, trading strategies, beginner trading guide, investment tips, options trading India, share market learning, Hyderabad trading academy" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="AlphaBull Trading Academy" />
        <link rel="canonical" href="https://alphabull.club/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Trading Blog - Expert Stock Market Insights | AlphaBull Academy" />
        <meta property="og:description" content="Learn stock market trading with expert guides on technical analysis, price action, options trading & investment strategies for Indian traders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alphabull.club/blog" />
        <meta property="og:site_name" content="AlphaBull Trading Academy" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://alphabull.club/og-blog.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AlphaBull Trading Academy Blog - Expert Trading Insights" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trading Blog - Expert Market Insights | AlphaBull Academy" />
        <meta name="twitter:description" content="Learn stock market trading with expert guides, technical analysis strategies, and investment tips for Indian traders." />
        <meta name="twitter:image" content="https://alphabull.club/og-blog.jpg" />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.385044;78.486671" />
        <meta name="ICBM" content="17.385044, 78.486671" />
        
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

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
              {blogPostsMeta.map((post) => (
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
        <Disclaimer />
        <Footer />
      </div>
    </>
  );
};

export default Blog;
