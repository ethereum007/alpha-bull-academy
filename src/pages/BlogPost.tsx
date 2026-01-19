import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { blogPostsContent } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsContent[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": typeof post.image === 'string' ? post.image : undefined,
    "author": { 
      "@type": "Person", 
      "name": post.author,
      "url": "https://alphabull.club"
    },
    "publisher": { 
      "@type": "Organization", 
      "name": "AlphaBull Trading Academy",
      "url": "https://alphabull.club",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alphabull.club/favicon.ico"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://alphabull.club/blog/${slug}`
    },
    "articleSection": post.category,
    "inLanguage": "en-IN"
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://alphabull.club/blog/${slug}`
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | AlphaBull Academy - Stock Market Training Hyderabad</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={`https://alphabull.club/blog/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${post.title} | AlphaBull Academy`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://alphabull.club/blog/${slug}`} />
        <meta property="og:site_name" content="AlphaBull Trading Academy" />
        <meta property="og:locale" content="en_IN" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        <meta property="article:tag" content={post.keywords} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | AlphaBull Academy`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:label1" content="Reading time" />
        <meta name="twitter:data1" content={post.readTime} />
        <meta name="twitter:label2" content="Written by" />
        <meta name="twitter:data2" content={post.author} />
        
        {/* Additional SEO */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <header className="mb-8">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.subtitle}</p>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            <div 
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-8 prose-li:my-3 prose-strong:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 p-8 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Start Your Trading Journey Today</h3>
              <p className="text-muted-foreground mb-6">
                Join AlphaBull Trading Academy and learn from experienced traders. Get access to live sessions, proven strategies, and a supportive community.
              </p>
              <Link to="/#contact">
                <Button size="lg">Enroll Now</Button>
              </Link>
            </div>
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
