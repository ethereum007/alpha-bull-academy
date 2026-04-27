import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/Disclaimer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  MapPin,
  Star,
  Users,
  TrendingUp,
  GraduationCap,
  Phone,
  MessageCircle,
  Video,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Trading Classes in Vijayawada — Live Online Stock Market Course | AlphaBull Academy",
  description:
    "Looking for trading classes in Vijayawada? AlphaBull Academy delivers live, online stock market training to Vijayawada students — same Columbia MBA / Wall Street mentor who trains Hyderabad's #1 cohort. Courses from ₹6,999. NSE BSE certified content. Book a free demo today.",
  keywords:
    "trading classes in vijayawada, trading classes vijayawada, share market classes vijayawada, stock market course vijayawada, online trading course andhra pradesh, share market classes benz circle, trading classes patamata, share market institute vijayawada, stock market training MG road vijayawada, technical analysis vijayawada, options trading andhra pradesh, intraday trading vijayawada, krishna district share market course, AP stock market mentor, vijayawada trading academy",
  alternates: { canonical: "https://alphabullacademy.com/trading-classes-vijayawada" },
  openGraph: {
    title: "Trading Classes in Vijayawada — AlphaBull Academy",
    description:
      "Live online stock market training for Vijayawada from Hyderabad's #1 trading academy. 3000+ students trained.",
    url: "https://alphabullacademy.com/trading-classes-vijayawada",
    type: "website",
    siteName: "AlphaBull Trading Academy",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Classes in Vijayawada — AlphaBull Academy",
    description: "Live online trading course for Vijayawada. 3000+ students trained.",
  },
};

const localities = [
  "Benz Circle",
  "MG Road",
  "Patamata",
  "Auto Nagar",
  "Krishna Lanka",
  "Ramavarappadu",
  "Gunadala",
  "Bhavanipuram",
  "Governorpet",
  "Tadepalli",
  "Mangalagiri",
  "Penamaluru",
  "Gannavaram",
  "Kanuru",
];

const courses = [
  {
    name: "Stock Market Fundamentals",
    price: "₹6,999",
    duration: "4 weeks · Online",
    summary:
      "Beginner-friendly trading course delivered live online. Perfect for Vijayawada students new to the markets — learn equity basics, terminology, and place your first trade by week 4.",
    href: "https://rzp.io/rzp/7UZGE0Dg",
  },
  {
    name: "Technical Analysis Mastery",
    price: "₹9,999",
    duration: "4 weeks · Online",
    summary:
      "Andhra's most-requested technical analysis course. Price action, candlestick patterns, support/resistance, CPR, EMA, and breakout setups — all taught live with Vijayawada batch timings.",
    href: "https://rzp.io/rzp/yB1bafTe",
  },
  {
    name: "Options & Derivatives",
    price: "₹14,999",
    duration: "4 weeks · Online",
    summary:
      "Advanced options & futures trading for serious AP traders. Strategies, hedging, position sizing, and live trade reviews. Recordings available for working professionals.",
    href: "https://wa.me/919032999466",
  },
];

const reasons = [
  {
    icon: Video,
    title: "100% live online",
    text: "No need to travel. Same instructor, same content, same private Telegram community as our Hyderabad classroom batches. All sessions recorded.",
  },
  {
    icon: GraduationCap,
    title: "Columbia MBA / Wall Street mentor",
    text: "Kiran Dutta brings US trading desk experience and an MBA from Columbia to Vijayawada students — a level of pedigree no local AP institute matches.",
  },
  {
    icon: Users,
    title: "Strong AP community",
    text: "Active alumni network across Vijayawada, Guntur, Tirupati, Visakhapatnam. Trade ideas, weekly review calls, doubt-clearing sessions.",
  },
  {
    icon: Clock,
    title: "Weekend & evening batches",
    text: "Designed for working professionals in Vijayawada's IT, banking, and government sectors. 7–9 PM weekday or weekend morning options.",
  },
];

const faqs = [
  {
    q: "Are these trading classes available offline in Vijayawada?",
    a: "Currently we run live online cohorts for Vijayawada students. The advantage: you get the exact same content, instructor (Kiran Dutta — Columbia MBA, Wall Street alum), and community as our Hyderabad classroom batches — without the 4-hour commute. We do periodically run weekend bootcamps in Vijayawada for advanced students; ask on WhatsApp for the next date.",
  },
  {
    q: "What's the language of instruction?",
    a: "Primary language is English with Hindi explanations for complex concepts. Our private community chat is bilingual; many students post questions in Telugu and get answered by both Kiran and senior alumni.",
  },
  {
    q: "How are classes delivered?",
    a: "Live Zoom sessions twice a week + recordings within 12 hours + private Telegram group + 1-on-1 mentor calls when stuck. You don't need any specialised software — a laptop, phone, and demat account are enough.",
  },
  {
    q: "I'm in Guntur / Mangalagiri / Tadepalli / Gannavaram. Can I join?",
    a: "Yes. The course is online, so all of Krishna and Guntur districts are covered. Many of our most successful students come from Mangalagiri, Tadepalli, and Penamaluru. Join the Vijayawada cohort.",
  },
  {
    q: "What is the fee structure?",
    a: "Stock Market Fundamentals: ₹6,999. Technical Analysis Mastery: ₹9,999. Options & Derivatives: ₹14,999. All include lifetime mentorship. No hidden costs.",
  },
  {
    q: "Do you offer placements?",
    a: "We are a trading education academy, not a recruiting firm. Our goal is to make you a profitable independent trader. That said, our alumni network has placed students at brokerage desks, prop firms, and family offices through warm introductions.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AlphaBull Trading Academy — Trading Classes Vijayawada",
  url: "https://alphabullacademy.com/trading-classes-vijayawada",
  logo: "https://alphabullacademy.com/favicon.ico",
  email: "contact@alphabullacademy.com",
  telephone: "+91-9032999466",
  priceRange: "₹6,999 – ₹14,999",
  description:
    "Live online stock market and trading classes for students in Vijayawada and the Krishna / Guntur districts of Andhra Pradesh.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vijayawada",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 16.5062, longitude: 80.648 },
  areaServed: localities.concat([
    "Vijayawada",
    "Guntur",
    "Krishna District",
    "Andhra Pradesh",
  ]),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Trading Courses Vijayawada",
    itemListElement: courses.map((c, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Course", name: c.name, description: c.summary },
      price: c.price.replace("₹", "").replace(",", ""),
      priceCurrency: "INR",
    })),
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://alphabullacademy.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Trading Classes Vijayawada",
      item: "https://alphabullacademy.com/trading-classes-vijayawada",
    },
  ],
};

export default function TradingClassesVijayawadaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        <Navigation />

        <main className="pt-24 pb-16">
          <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-5xl">
              <Badge className="mb-4 bg-white/15 text-white border-white/20">
                <Video className="w-3 h-3 mr-1" />
                Live Online · Vijayawada · Krishna · Guntur
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Trading Classes in Vijayawada — Live Online from Hyderabad's #1 Mentor
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-3xl mb-8 leading-relaxed">
                AlphaBull Academy brings Hyderabad's most-trusted trading mentorship straight to Vijayawada — through live online cohorts that students from Benz Circle, Patamata, MG Road, Tadepalli and Mangalagiri rely on for serious market education. 3000+ alumni. 98% success rate. Same Columbia MBA / Wall Street instructor as our flagship Hyderabad classroom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-base px-8 py-4 h-auto rounded-lg">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book a Free Demo Class
                  </Button>
                </a>
                <a href="tel:+919032999466">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white font-semibold text-base px-8 py-4 h-auto rounded-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 90329 99466
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Why Vijayawada Students Choose AlphaBull
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Vijayawada has plenty of trading institutes — but very few that are taught by mentors with US trading desk experience. That's our edge.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reasons.map((r) => (
                  <Card key={r.title} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <r.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
                        <p className="text-muted-foreground">{r.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Trading Courses for Vijayawada Students
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Three structured paths — beginner to options pro. All delivered live online with recordings, mentor calls, and a private community.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((c) => (
                  <Card key={c.name} className="p-6 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{c.name}</h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold text-primary">{c.price}</span>
                      <span className="text-sm text-muted-foreground">· {c.duration}</span>
                    </div>
                    <p className="text-muted-foreground mb-6 flex-1">{c.summary}</p>
                    <a href={c.href} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full">Enroll Now</Button>
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge className="mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  Areas We Serve
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Online Trading Classes Reaching Every Corner of Vijayawada
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our cohorts include students from across Vijayawada, the broader Krishna district, and neighbouring Guntur. Wherever you are — class is just a click away.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {localities.map((loc) => (
                  <span key={loc} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium border border-primary/20">
                    <CheckCircle className="w-4 h-4" />
                    Trading classes in {loc}
                  </span>
                ))}
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold mb-3">Also serving the rest of South India</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Many of our Vijayawada students train alongside peers from Visakhapatnam, Tirupati, Guntur, and Hyderabad in the same live cohort. <Link className="text-primary underline" href="/trading-classes-hyderabad">See our Hyderabad page</Link> · <Link className="text-primary underline" href="/trading-classes-visakhapatnam">See our Visakhapatnam page</Link>.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Frequently Asked Questions — Vijayawada
              </h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <Card key={f.q} className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{f.q}</h3>
                    <p className="text-muted-foreground">{f.a}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Trade Like a Pro? Book Your Free Demo
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                See exactly how Kiran teaches, ask any question, and get a personalised roadmap for your trading journey — no commitment, just a 60-minute Zoom call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-base px-8 py-4 h-auto">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white font-semibold text-base px-8 py-4 h-auto">
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
