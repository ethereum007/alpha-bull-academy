import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { reviewSummary, studentReviews } from "@/lib/reviews";
import {
  ArrowRight,
  BookOpenCheck,
  CheckCircle,
  MessageCircle,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AlphaBull Student Reviews | Trading Course Testimonials",
  description:
    "Read AlphaBull Trading Academy student reviews and learning outcomes before joining an online stock market course in India.",
  keywords:
    "AlphaBull reviews, AlphaBull Trading Academy reviews, student reviews trading course, stock market course reviews India, online trading course testimonials",
  alternates: { canonical: "https://www.alphabullacademy.com/student-reviews" },
  openGraph: {
    title: "AlphaBull Student Reviews | Trading Course Testimonials",
    description:
      "Real student feedback from AlphaBull learners on price action, risk management, live sessions, and mentorship.",
    url: "https://www.alphabullacademy.com/student-reviews",
    type: "website",
    siteName: "AlphaBull Trading Academy",
    images: ["https://www.alphabullacademy.com/og-image.jpg"],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaBull Student Reviews | Trading Course Testimonials",
    description:
      "Read student reviews and learning outcomes before joining AlphaBull's online trading courses.",
    images: ["https://www.alphabullacademy.com/og-image.jpg"],
  },
};

const proofPoints = [
  {
    icon: Users,
    title: "2000+ students trained",
    text: "Learners across India join live cohorts for structured stock market education.",
  },
  {
    icon: ShieldCheck,
    title: "Risk-first training",
    text: "Students repeatedly call out position sizing, discipline, and process as the real value.",
  },
  {
    icon: BookOpenCheck,
    title: "Live reviews and recordings",
    text: "Mentorship includes practical chart review, revision support, and community learning.",
  },
];

const faqs = [
  {
    q: "Are AlphaBull reviews from real students?",
    a: "This page highlights student feedback and learning outcomes shared with AlphaBull. Since the Google Business Profile is not currently public, we are using this page as the main review and testimonial hub.",
  },
  {
    q: "What do students like most about AlphaBull?",
    a: "Students most often mention practical price action teaching, risk management, live market sessions, trade review feedback, and the private learning community.",
  },
  {
    q: "Can I speak to someone before joining?",
    a: "Yes. You can book a free demo class or WhatsApp AlphaBull at +91 90329 99466 before enrolling in a course.",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.alphabullacademy.com/#organization",
  name: "AlphaBull Trading Academy",
  alternateName: ["AlphaBull Academy", "Trade With AlphaBull"],
  url: "https://www.alphabullacademy.com/student-reviews",
  logo: "https://www.alphabullacademy.com/logo.png",
  image: "https://www.alphabullacademy.com/og-image.jpg",
  email: "contact@alphabullacademy.com",
  telephone: "+91-9032999466",
  sameAs: [
    "https://www.alphabullacademy.com",
    "https://www.linkedin.com/in/kirandutta",
    "https://www.instagram.com/alphabull_club/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviewSummary.ratingValue,
    reviewCount: reviewSummary.reviewCount,
    bestRating: reviewSummary.bestRating,
    worstRating: reviewSummary.worstRating,
  },
  review: studentReviews.map((review) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewBody: review.quote,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.alphabullacademy.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Student Reviews",
      item: "https://www.alphabullacademy.com/student-reviews",
    },
  ],
};

export default function StudentReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-24">
          <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] py-16 text-white md:py-24">
            <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <Badge className="mb-4 border-white/20 bg-white/15 text-white">
                  <Star className="mr-1 h-3 w-3 fill-current" />
                  AlphaBull Student Reviews
                </Badge>
                <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
                  Student Reviews of AlphaBull Trading Academy
                </h1>
                <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
                  See what learners say about AlphaBull's online stock market courses, live chart
                  review sessions, risk-first trading process, and practical mentorship.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="h-auto bg-[#F59E0B] px-8 py-4 text-base font-semibold text-white hover:bg-[#D97706]">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Book Free Demo
                    </Button>
                  </a>
                  <Link href="#student-feedback">
                    <Button size="lg" variant="outline" className="h-auto border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                      Read Student Reviews
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <Card className="border-white/10 bg-white p-8 text-[#1F2937] shadow-2xl">
                <div className="mb-4 flex items-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-6 w-6 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="mb-2 text-5xl font-bold text-primary">{reviewSummary.ratingValue}</p>
                <p className="mb-6 text-muted-foreground">
                  Average rating from featured AlphaBull student reviews.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t pt-6">
                  <div>
                    <p className="text-2xl font-bold">{reviewSummary.reviewCount}</p>
                    <p className="text-sm text-muted-foreground">Featured reviews</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2000+</p>
                    <p className="text-sm text-muted-foreground">Students trained</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="border-b bg-[#F9FAFB] py-10">
            <div className="container mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.title} className="flex gap-4 rounded-lg border bg-white p-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <point.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="mb-1 text-base font-semibold">{point.title}</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="student-feedback" className="py-16 md:py-24">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="mb-12 text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[1.5px] text-[#F59E0B]">
                  Learner Outcomes
                </p>
                <h2 className="mb-4 text-3xl font-bold text-[#1F2937] md:text-4xl">
                  What Students Say After Joining AlphaBull
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  The most useful reviews are specific: students talk about chart-reading,
                  discipline, risk, and feedback rather than hype.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {studentReviews.map((review) => (
                  <Card key={review.author} className="flex h-full flex-col p-6">
                    <div className="mb-4 flex gap-1">
                      {[...Array(review.rating)].map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <p className="mb-6 flex-1 text-base italic leading-relaxed text-[#374151]">
                      "{review.quote}"
                    </p>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]">
                        <span className="text-lg font-semibold text-white">{review.author.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-[#1F2937]">{review.author}</p>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
                      </div>
                    </div>
                    <span className="inline-flex w-fit items-center gap-2 rounded-md bg-[#D1FAE5] px-3 py-2 text-sm font-semibold text-[#065F46]">
                      <CheckCircle className="h-4 w-4" />
                      {review.result}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <Badge className="mb-4">Before You Enroll</Badge>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Use reviews to choose the right trading course
                </h2>
                <p className="mb-6 text-muted-foreground">
                  AlphaBull is built for learners who want market structure, process, and
                  repeatable review habits. We do not sell guaranteed returns or tip services.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/online-stock-market-course">
                    <Button className="h-auto px-6 py-3">
                      View Course Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="h-auto px-6 py-3">
                      Ask for Student References
                    </Button>
                  </a>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Price action and technical analysis taught through live charts",
                  "Risk management, stop-loss planning, and position sizing",
                  "Recordings and revision support for working professionals",
                  "Community and mentor feedback for trade review discipline",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-lg border bg-white p-4">
                    <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm font-medium text-[#374151]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
                Review FAQs
              </h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <Card key={faq.q} className="p-6">
                    <h3 className="mb-2 text-lg font-semibold">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] py-16 text-white md:py-24">
            <div className="container mx-auto max-w-4xl px-4 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Want to see if AlphaBull is right for you?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
                Book a free demo class, ask questions about the syllabus, and decide with a
                clear view of how the mentorship works.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-auto bg-[#F59E0B] px-8 py-4 text-base font-semibold text-white hover:bg-[#D97706]">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp for Free Demo
                  </Button>
                </a>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="h-auto border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                    Send a Message
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Disclaimer />
        <Footer />
      </div>
    </>
  );
}
