import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/Disclaimer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { blogPostsContent, blogPostsMeta } from "@/data/blogPosts";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPostsMeta.map((p) => ({ slug: p.id }));
}

export async function generateMetadata(
  { params }: { params: Params },
): Promise<Metadata> {
  const post = blogPostsContent[params.slug];
  if (!post) return {};

  return {
    title: `${post.title} | AlphaBull Academy - Stock Market Training Hyderabad`,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://alphabull.club/blog/${params.slug}` },
    openGraph: {
      title: `${post.title} | AlphaBull Academy`,
      description: post.excerpt,
      type: "article",
      url: `https://alphabull.club/blog/${params.slug}`,
      siteName: "AlphaBull Trading Academy",
      locale: "en_IN",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: [post.keywords],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | AlphaBull Academy`,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = blogPostsContent[params.slug];
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: typeof post.image === "string" ? post.image : undefined,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://alphabull.club",
    },
    publisher: {
      "@type": "Organization",
      name: "AlphaBull Trading Academy",
      url: "https://alphabull.club",
      logo: {
        "@type": "ImageObject",
        url: "https://alphabull.club/favicon.ico",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://alphabull.club/blog/${params.slug}`,
    },
    articleSection: post.category,
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://alphabull.club" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://alphabull.club/blog" },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://alphabull.club/blog/${params.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="min-h-screen">
        <Navigation />
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>

            <header className="mb-8">
              <Badge className="mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {post.subtitle}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-b py-4">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
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
              className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pt-8 prose-h2:border-t prose-h2:border-border/50 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-foreground prose-p:mb-6 prose-ul:my-8 prose-li:my-3 prose-strong:text-foreground [&_.lead]:text-xl [&_.lead]:font-medium [&_.lead]:mb-10 [&_.highlight]:bg-primary/10 [&_.highlight]:p-6 [&_.highlight]:rounded-lg [&_.highlight]:border-l-4 [&_.highlight]:border-primary [&_p]:leading-[1.5] [&_li]:leading-[1.5] [&_.lead]:leading-[1.5]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 p-8 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Start Your Trading Journey Today
              </h3>
              <p className="text-muted-foreground mb-6">
                Join AlphaBull Trading Academy and learn from experienced
                traders. Get access to live sessions, proven strategies, and a
                supportive community.
              </p>
              <Link href="/#contact">
                <Button size="lg">Enroll Now</Button>
              </Link>
            </div>
          </div>
        </article>
        <Disclaimer />
        <Footer />
      </div>
    </>
  );
}
