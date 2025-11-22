import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import tradingWorkspace from "@/assets/blog-trading-workspace.jpg";
import tradingSuccess from "@/assets/blog-trading-success.jpg";

const blogContent = {
  "how-to-learn-trading-india-2025": {
    title: "How to Learn Trading as a Beginner in India (2025 Guide)",
    subtitle: "From Zero Knowledge to Consistent Trading in 90 Days",
    author: "AlphaBull Academy",
    date: "2025-11-22",
    readTime: "8 min read",
    category: "Beginner Guide",
    image: "/placeholder.svg",
    content: `
      <p class="lead">Trading is not gambling. Trading is a skill. And like any skill, it requires proper learning, proven strategies, and discipline. This comprehensive guide will take you from complete beginner to consistent trader in just 90 days.</p>

      <div class="blog-image-wrapper">
        <img src="${tradingWorkspace}" alt="Professional trading workspace with multiple monitors showing stock charts" class="blog-image" />
      </div>

      <h2>STEP 1 — Understand Different Trading Styles</h2>
      <p>Before diving into trading, you need to understand the different styles available:</p>
      <ul>
        <li><strong>Intraday Trading:</strong> Buy and sell within the same day</li>
        <li><strong>Swing Trading:</strong> Hold positions for days to weeks</li>
        <li><strong>Positional Trading:</strong> Long-term positions based on fundamentals</li>
        <li><strong>Options Trading:</strong> Derivative contracts for advanced traders</li>
      </ul>
      <p>Choose your style based on your time availability and personality. If you have a full-time job, swing or positional trading might suit you better than intraday.</p>

      <h2>STEP 2 — Learn Fundamental Concepts</h2>
      <p>Understanding the basics is crucial. Dedicate 15-20 hours to learn:</p>
      <ul>
        <li>What are stocks and how the market works</li>
        <li>Market capitalization and company valuation</li>
        <li>Volume and liquidity concepts</li>
        <li>Price-to-Earnings (P/E) ratio and other metrics</li>
        <li>How to read company financial statements</li>
      </ul>

      <h2>STEP 3 — Master Technical Analysis</h2>
      <p>Technical analysis is the backbone of successful trading. Focus on these core concepts:</p>
      <ul>
        <li><strong>Support & Resistance:</strong> Key price levels where stocks reverse</li>
        <li><strong>Trendlines & Breakouts:</strong> Identifying market direction and entry points</li>
        <li><strong>Candlestick Patterns:</strong> Reading price action through candles</li>
        <li><strong>Risk Management:</strong> Protecting your capital through stop losses</li>
        <li><strong>Trading Journal:</strong> Tracking and improving your performance</li>
      </ul>

      <h2>STEP 4 — Setup Your Trading Infrastructure</h2>
      <p>Having the right tools is essential for success:</p>
      <ul>
        <li><strong>Charting Platform:</strong> TradingView for professional-grade charts and indicators</li>
        <li><strong>Broker:</strong> Zerodha, Angel One, or Upstox for low-cost trading</li>
        <li><strong>Strategies:</strong> Master 2-3 proven strategies instead of jumping between many</li>
        <li><strong>Risk Per Trade:</strong> Never risk more than 1-2% of your capital on a single trade</li>
        <li><strong>Risk-Reward Ratio:</strong> Target 3R-5R (3-5 times your risk) for each trade</li>
      </ul>

      <h2>STEP 5 — Risk Management (Most Important)</h2>
      <p class="highlight">This is the single most important aspect of trading. More important than strategies or indicators.</p>
      <ul>
        <li><strong>Always use Stop Loss:</strong> Never enter a trade without knowing your exit point</li>
        <li><strong>Never average losing trades:</strong> This is how traders blow up their accounts</li>
        <li><strong>Never use borrowed money:</strong> Only trade with capital you can afford to lose</li>
        <li><strong>Maintain a detailed journal:</strong> Track every trade, emotion, and lesson learned</li>
      </ul>

      <div class="blog-image-wrapper">
        <img src="${tradingSuccess}" alt="Success in trading - upward trending charts showing growth and progress" class="blog-image" />
      </div>

      <h2>STEP 6 — Start Paper Trading</h2>
      <p>Before risking real money, practice with paper trading for 2-4 weeks. This allows you to:</p>
      <ul>
        <li>Test your strategies without financial risk</li>
        <li>Build confidence in your trading decisions</li>
        <li>Identify and fix mistakes in a safe environment</li>
        <li>Develop emotional discipline</li>
      </ul>

      <h2>STEP 7 — Start Small With Real Trades</h2>
      <p>When you're ready for real trading, start with ₹5,000-15,000. This is enough to:</p>
      <ul>
        <li>Experience real market emotions</li>
        <li>Learn without devastating losses</li>
        <li>Build your account gradually</li>
        <li>Focus on process over profit</li>
      </ul>
      <p class="highlight"><strong>Remember:</strong> Your goal initially is discipline, not profit. Master the process first, profits will follow.</p>

      <h2>STEP 8 — Join a Structured Learning Community</h2>
      <p>Learning in isolation can be slow and frustrating. A structured community provides:</p>
      <ul>
        <li>Live trading sessions with experienced traders</li>
        <li>Strategy support and real-time guidance</li>
        <li>Accountability to stick to your trading plan</li>
        <li>Peer learning from other traders' experiences</li>
      </ul>

      <h2>Your 90-Day Trading Timeline</h2>
      <div class="timeline">
        <div class="timeline-item">
          <h3>Month 1: Foundation</h3>
          <p>Learn basics of trading and technical analysis. Study support/resistance, candlestick patterns, and trendlines.</p>
        </div>
        <div class="timeline-item">
          <h3>Month 2: Practice</h3>
          <p>Practice 2-3 strategies with paper trading. Focus on consistency and following your trading plan.</p>
        </div>
        <div class="timeline-item">
          <h3>Month 3: Real Trading</h3>
          <p>Start real trades with proper stop loss and discipline. Review every trade in your journal.</p>
        </div>
      </div>

      <h2>Key Takeaway</h2>
      <p class="highlight">Success in trading = Process > Prediction</p>
      <p>Focus on following your process consistently rather than trying to predict market movements. The profits are a byproduct of good process and discipline.</p>

      <h2>Ready to Start Your Trading Journey?</h2>
      <p>Join AlphaBull Trading Academy for structured learning, live sessions, and a community of dedicated traders. Our proven curriculum has helped hundreds of beginners become consistent traders.</p>
    `,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogContent[slug as keyof typeof blogContent] : null;

  if (!post) {
    return <div>Post not found</div>;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.subtitle,
    "image": `https://alphabull.lovable.app${post.image}`,
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "AlphaBull Trading Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alphabull.lovable.app/placeholder.svg"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | AlphaBull Academy</title>
        <meta name="description" content={post.subtitle} />
        <meta name="keywords" content="learn trading India, beginner trading guide, stock market course, technical analysis, trading strategies, intraday trading" />
        <link rel="canonical" href={`https://alphabull.lovable.app/blog/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.subtitle} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://alphabull.lovable.app/blog/${slug}`} />
        <meta property="og:image" content={`https://alphabull.lovable.app${post.image}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.subtitle} />
        <meta name="twitter:image" content={`https://alphabull.lovable.app${post.image}`} />
      </Helmet>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-8 prose-li:my-3 prose-strong:text-foreground prose-img:rounded-lg prose-img:shadow-lg"
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
