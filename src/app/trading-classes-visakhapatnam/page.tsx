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
  Users,
  GraduationCap,
  Phone,
  MessageCircle,
  Video,
  Anchor,
  Clock,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Trading Classes in Visakhapatnam (Vizag) — Live Online Stock Market Course | AlphaBull Academy",
  description:
    "Looking for trading classes in Visakhapatnam? AlphaBull Academy's live online stock market courses are trusted by Vizag traders from Dwaraka Nagar, MVP Colony, Madhurawada and Gajuwaka. Same Columbia MBA / Wall Street mentor as Hyderabad. Courses from ₹6,999. Free demo available.",
  keywords:
    "trading classes in visakhapatnam, trading classes vizag, share market classes vizag, share market classes visakhapatnam, stock market course vizag, online trading course andhra pradesh, trading classes dwaraka nagar, share market classes MVP colony, share market institute madhurawada, stock market training gajuwaka, technical analysis visakhapatnam, options trading vizag, intraday trading visakhapatnam, vizag trading academy, andhra pradesh stock market mentor, AP share market course",
  alternates: { canonical: "https://alphabullacademy.com/trading-classes-visakhapatnam" },
  openGraph: {
    title: "Trading Classes in Visakhapatnam — AlphaBull Academy",
    description:
      "Live online stock market training for Vizag from Hyderabad's #1 trading academy. 3000+ students trained.",
    url: "https://alphabullacademy.com/trading-classes-visakhapatnam",
    type: "website",
    siteName: "AlphaBull Trading Academy",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Classes in Visakhapatnam — AlphaBull Academy",
    description: "Live online trading course for Vizag. 3000+ students trained.",
  },
};

const localities = [
  "Dwaraka Nagar",
  "MVP Colony",
  "Madhurawada",
  "Gajuwaka",
  "Seethammadhara",
  "Asilmetta",
  "Maddilapalem",
  "Akkayyapalem",
  "Beach Road",
  "Pendurthi",
  "Anandapuram",
  "Bheemunipatnam",
  "Rushikonda",
  "Kommadi",
];

const courses = [
  {
    name: "Stock Market Fundamentals",
    price: "₹6,999",
    duration: "4 weeks · Online",
    summary:
      "Beginner-friendly trading course delivered live online. Built for Vizag students new to the markets — equity basics, terminology, and your first profitable trade by week 4.",
    href: "https://rzp.io/rzp/7UZGE0Dg",
  },
  {
    name: "Technical Analysis Mastery",
    price: "₹9,999",
    duration: "4 weeks · Online",
    summary:
      "Vizag's most-requested technical analysis course. Price action, candlestick patterns, support/resistance, CPR, EMA, and breakout setups — taught live with evening batches.",
    href: "https://rzp.io/rzp/yB1bafTe",
  },
  {
    name: "Options & Derivatives",
    price: "₹14,999",
    duration: "4 weeks · Online",
    summary:
      "Advanced options & futures trading for serious Vizag traders. Strategies, hedging, position sizing, and live trade reviews. Perfect for working IT and shipping professionals.",
    href: "https://wa.me/919032999466",
  },
];

const reasons = [
  {
    icon: Video,
    title: "100% live online",
    text: "No travel, no traffic. Same instructor, same content, same private community as our Hyderabad classroom batches. All sessions recorded.",
  },
  {
    icon: GraduationCap,
    title: "Columbia MBA / Wall Street mentor",
    text: "Kiran Dutta brings Columbia MBA pedigree and US trading desk experience to Vizag — a level of mentorship no other AP institute can match.",
  },
  {
    icon: Globe,
    title: "Trusted across South India",
    text: "Active alumni network spanning Vizag, Vijayawada, Hyderabad, and Tirupati. Trade ideas, weekly reviews, and a Telugu-friendly community.",
  },
  {
    icon: Clock,
    title: "Built for working professionals",
    text: "Most Vizag students are working in IT (Rushikonda IT SEZ), defence, shipping, or steel. Weekend morning + weekday evening batches keep your job intact.",
  },
];

const faqs = [
  {
    q: "Are these trading classes available offline in Visakhapatnam?",
    a: "Currently we run live online cohorts for Visakhapatnam students — same instructor (Kiran Dutta — Columbia MBA, Wall Street alum), same content, same private community as our Hyderabad classroom. We periodically host weekend bootcamps in Vizag for advanced students; ask on WhatsApp for the next date.",
  },
  {
    q: "I work at the Rushikonda IT SEZ. Can I attend?",
    a: "Absolutely — many of our Vizag students are IT professionals from Rushikonda, Madhurawada, and Kommadi. Our weekend morning and weekday evening (7–9 PM) batches are designed precisely for working professionals.",
  },
  {
    q: "How are classes delivered?",
    a: "Live Zoom sessions twice a week + recordings within 12 hours + private Telegram group + 1-on-1 mentor calls when stuck. You only need a laptop, phone, and a demat account.",
  },
  {
    q: "What's the language of instruction?",
    a: "Primary language is English with Hindi explanations for complex concepts. Our private community chat is multilingual; many Vizag students post questions in Telugu and get answered by both Kiran and senior alumni.",
  },
  {
    q: "What is the fee structure?",
    a: "Stock Market Fundamentals: ₹6,999. Technical Analysis Mastery: ₹9,999. Options & Derivatives: ₹14,999. All include lifetime mentorship in our private trader community.",
  },
  {
    q: "I'm in Anakapalle, Bheemunipatnam, or Pendurthi. Can I join?",
    a: "Yes. Online means location isn't a constraint. We have students from across the Visakhapatnam district and neighbouring Anakapalli district. Join the Vizag cohort.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AlphaBull Trading Academy — Trading Classes Visakhapatnam",
  url: "https://alphabullacademy.com/trading-classes-visakhapatnam",
  logo: "https://alphabullacademy.com/favicon.ico",
  email: "contact@alphabullacademy.com",
  telephone: "+91-9032999466",
  priceRange: "₹6,999 – ₹14,999",
  description:
    "Live online stock market and trading classes for students in Visakhapatnam (Vizag) and the rest of north coastal Andhra Pradesh.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.6868, longitude: 83.2185 },
  areaServed: localities.concat([
    "Visakhapatnam",
    "Vizag",
    "Anakapalle",
    "Bheemunipatnam",
    "Anakapalli District",
    "Andhra Pradesh",
  ]),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Trading Courses Visakhapatnam",
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
      name: "Trading Classes Visakhapatnam",
      item: "https://alphabullacademy.com/trading-classes-visakhapatnam",
    },
  ],
};

export default function TradingClassesVisakhapatnamPage() {
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
                <Anchor className="w-3 h-3 mr-1" />
                Live Online · Visakhapatnam · Coastal Andhra
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Trading Classes in Visakhapatnam — Live Online from Hyderabad's #1 Mentor
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-3xl mb-8 leading-relaxed">
                AlphaBull Academy delivers Hyderabad's most-trusted trading mentorship straight to Vizag — live online cohorts for students in Dwaraka Nagar, MVP Colony, Madhurawada, Gajuwaka, Rushikonda IT SEZ and beyond. 3000+ alumni. 98% success rate. Same Columbia MBA / Wall Street instructor as our flagship Hyderabad classroom.
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
                Why Vizag Traders Choose AlphaBull
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Visakhapatnam has many local coaching centres — but very few that are taught by mentors with US trading desk experience. That's where AlphaBull stands apart.
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
                Trading Courses for Visakhapatnam Students
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
                  Online Trading Classes for Every Corner of Vizag
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our cohorts welcome students from across Visakhapatnam, the Anakapalli district, and the broader north coastal Andhra region. Online delivery means location doesn't matter.
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
                  Vizag students train alongside peers from Vijayawada, Tirupati, Hyderabad, and Guntur in the same live cohorts. <Link className="text-primary underline" href="/trading-classes-hyderabad">See our Hyderabad page</Link> · <Link className="text-primary underline" href="/trading-classes-vijayawada">See our Vijayawada page</Link>.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Frequently Asked Questions — Visakhapatnam
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
