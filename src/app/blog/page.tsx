import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/Disclaimer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { blogPostsMeta } from "@/data/blogPosts";

export const metadata: Metadata = {
  title:
    "Trading Blog - Expert Stock Market Insights | AlphaBull Academy Hyderabad",
  description:
    "Learn stock market trading with expert guides on technical analysis, price action, options trading & investment strategies. Free educational content for Indian traders - beginner to advanced.",
  keywords:
    "trading blog India, stock market blog, technical analysis guide, trading strategies, beginner trading guide, investment tips, options trading India, share market learning, Hyderabad trading academy",
  authors: [{ name: "AlphaBull Trading Academy" }],
  alternates: { canonical: "https://alphabullacademy.com/blog" },
  openGraph: {
    title:
      "Trading Blog - Expert Stock Market Insights | AlphaBull Academy",
    description:
      "Learn stock market trading with expert guides on technical analysis, price action, options trading & investment strategies for Indian traders.",
    type: "website",
    url: "https://alphabullacademy.com/blog",
    siteName: "AlphaBull Trading Academy",
    locale: "en_IN",
    images: [
      {
        url: "https://alphabullacademy.com/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "AlphaBull Trading Academy Blog - Expert Trading Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Blog - Expert Market Insights | AlphaBull Academy",
    description:
      "Learn stock market trading with expert guides, technical analysis strategies, and investment tips for Indian traders.",
    images: ["https://alphabullacademy.com/og-blog.jpg"],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "AlphaBull Trading Academy Blog",
  description:
    "Expert insights on stock market trading, technical analysis, and investment strategies for Indian traders",
  url: "https://alphabullacademy.com/blog",
  inLanguage: "en-IN",
  publisher: {
    "@type": "Organization",
    name: "AlphaBull Trading Academy",
    url: "https://alphabullacademy.com",
    logo: {
      "@type": "ImageObject",
      url: "https://alphabullacademy.com/favicon.ico",
    },
  },
  blogPost: blogPostsMeta.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    url: `https://alphabullacademy.com/blog/${post.id}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alphabullacademy.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://alphabullacademy.com/blog" },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <header className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Trading Insights & Guides
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert articles on stock market trading, technical analysis,
                and proven strategies for Indian traders
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPostsMeta.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="aspect-video bg-muted overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
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
                            {new Date(post.date).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
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
}
