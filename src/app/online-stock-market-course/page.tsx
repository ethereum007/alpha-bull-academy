import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/Disclaimer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle, MessageCircle, PlayCircle, ShieldCheck, Video } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Stock Market Course in India | AlphaBull Trading Academy",
  description:
    "Join AlphaBull's online stock market course for beginners and aspiring traders in India. Learn technical analysis, price action, options basics, and risk management through live online mentorship.",
  keywords:
    "online stock market course, online trading course india, stock market course for beginners, technical analysis course online, price action trading course, options trading course online, share market course online",
  alternates: { canonical: "https://www.alphabullacademy.com/online-stock-market-course" },
  openGraph: {
    title: "Online Stock Market Course in India | AlphaBull Trading Academy",
    description:
      "Live online stock market course covering price action, technical analysis, options basics, and risk management.",
    url: "https://www.alphabullacademy.com/online-stock-market-course",
    type: "website",
    siteName: "AlphaBull Trading Academy",
    images: ["https://www.alphabullacademy.com/og-image.jpg"],
    locale: "en_IN",
  },
};

const modules = [
  "Stock market basics, brokers, order types, and market structure",
  "Candlestick reading, support and resistance, and trend analysis",
  "Price action setups, entries, exits, and invalidation planning",
  "Risk management, position sizing, and trade journaling",
  "Options and derivatives basics for serious learners",
  "Live chart review sessions with recordings for revision",
];

const faqs = [
  {
    q: "Is this online stock market course suitable for beginners?",
    a: "Yes. The course starts with market basics and gradually moves into charts, technical analysis, price action, risk management, and practical trade review.",
  },
  {
    q: "Do I need to live in Hyderabad to join?",
    a: "No. AlphaBull is online-first. Students from Hyderabad, Vijayawada, Visakhapatnam, Telangana, Andhra Pradesh, and the rest of India can join live online cohorts.",
  },
  {
    q: "Do you provide tips or guaranteed profit calls?",
    a: "No. AlphaBull is an education academy. We teach market concepts, trading process, risk management, and chart-reading skills. We do not guarantee profits or provide investment advice.",
  },
  {
    q: "Are recordings provided?",
    a: "Yes. Live sessions include recordings so students can revise the concepts after class.",
  },
];

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Online Stock Market Course in India",
  description:
    "Live online stock market course covering technical analysis, price action, options basics, and risk management for beginners and aspiring traders.",
  provider: {
    "@type": "Organization",
    name: "AlphaBull Trading Academy",
    legalName: "Nipun Teach Up Private Limited",
    sameAs: "https://www.alphabullacademy.com",
  },
  offers: {
    "@type": "Offer",
    price: "8999",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    category: "Education",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    instructor: { "@type": "Person", name: "Kiran Dutta" },
  },
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

export default function OnlineStockMarketCoursePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-24">
          <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] py-16 md:py-24 text-white">
            <div className="container mx-auto max-w-5xl px-4">
              <Badge className="mb-4 border-white/20 bg-white/15 text-white">
                <Video className="mr-1 h-3 w-3" />
                Live Online Course
              </Badge>
              <h1 className="mb-6 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
                Online Stock Market Course in India for Beginners and Aspiring Traders
              </h1>
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl">
                Learn technical analysis, price action, risk management, and trading discipline through
                structured live online mentorship from AlphaBull Trading Academy.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="h-auto bg-[#F59E0B] px-8 py-4 text-base font-semibold text-white hover:bg-[#D97706]">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book Free Demo
                  </Button>
                </a>
                <Link href="/student-reviews">
                  <Button size="lg" variant="outline" className="h-auto border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                    View Student Reviews
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
              {[
                { icon: BookOpen, title: "Structured Curriculum", text: "Go from market basics to practical chart review without jumping between random YouTube videos." },
                { icon: PlayCircle, title: "Live + Recorded", text: "Attend live online sessions and revise with recordings when your schedule gets busy." },
                { icon: ShieldCheck, title: "Risk First", text: "The course focuses on process, position sizing, and discipline, not fake profit screenshots." },
              ].map((item) => (
                <Card key={item.title} className="p-6">
                  <item.icon className="mb-4 h-8 w-8 text-primary" />
                  <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
                  <p className="text-muted-foreground">{item.text}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto max-w-5xl px-4">
              <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">What You Learn</h2>
              <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
                A practical syllabus for students who want to understand markets instead of chasing tips.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {modules.map((module) => (
                  <div key={module} className="flex gap-3 rounded-lg border bg-white p-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#10B981]" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4">
              <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Course FAQs</h2>
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
        </main>
        <Disclaimer />
        <Footer />
      </div>
    </>
  );
}
