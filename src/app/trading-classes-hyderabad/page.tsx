import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Disclaimer } from "@/components/Disclaimer";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Trading Classes in Hyderabad — #1 Stock Market Training Institute | AlphaBull Academy",
  description:
    "Looking for the best trading classes in Hyderabad? AlphaBull Academy is Hyderabad's #1 stock market training institute — classroom in Ameerpet, Madhapur & Gachibowli, plus live online cohorts for Telangana & Andhra Pradesh. 3000+ students trained. Courses from ₹6,999. Free demo available.",
  keywords:
    "trading classes in hyderabad, trading classes hyderabad, share market classes hyderabad, stock market classes hyderabad, share market classes near me, best trading institute hyderabad, technical analysis course hyderabad, options trading course hyderabad, intraday trading hyderabad, share market training ameerpet, trading classes madhapur, trading institute gachibowli, share market classes secunderabad, stock market course HITEC city, trading classes kukatpally, share market training begumpet, kondapur stock market training, banjara hills trading classes, jubilee hills share market course",
  alternates: { canonical: "https://alphabullacademy.com/trading-classes-hyderabad" },
  openGraph: {
    title: "Trading Classes in Hyderabad — AlphaBull Academy",
    description:
      "Hyderabad's #1 stock market training institute. 3000+ students trained. Courses from ₹6,999. Book a free demo.",
    url: "https://alphabullacademy.com/trading-classes-hyderabad",
    type: "website",
    siteName: "AlphaBull Trading Academy",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trading Classes in Hyderabad — AlphaBull Academy",
    description:
      "Hyderabad's #1 stock market training institute. 3000+ students trained. Free demo available.",
  },
};

const localityList = [
  "Ameerpet",
  "Madhapur",
  "Gachibowli",
  "HITEC City",
  "Kukatpally",
  "Begumpet",
  "Secunderabad",
  "Banjara Hills",
  "Jubilee Hills",
  "Kondapur",
  "Miyapur",
  "Tarnaka",
  "Dilsukhnagar",
  "Manikonda",
  "Nizampet",
  "Kompally",
];

const courses = [
  {
    name: "Stock Market Fundamentals",
    price: "₹6,999",
    duration: "4 weeks",
    summary:
      "Best beginner trading course in Hyderabad — fundamentals of equities, terminology, charts, and your first profitable trade.",
    href: "https://rzp.io/rzp/7UZGE0Dg",
  },
  {
    name: "Technical Analysis Mastery",
    price: "₹9,999",
    duration: "4 weeks",
    summary:
      "Hyderabad's most-recommended technical analysis course. Price action, candlestick patterns, support/resistance, CPR, EMA, and breakout setups.",
    href: "https://rzp.io/rzp/yB1bafTe",
  },
  {
    name: "Options & Derivatives",
    price: "₹14,999",
    duration: "4 weeks",
    summary:
      "Advanced options & futures trading — strategies, hedging, position sizing, and live trade reviews. Ideal for working professionals in Hyderabad.",
    href: "https://wa.me/919032999466",
  },
];

const reasons = [
  {
    icon: GraduationCap,
    title: "Columbia MBA / Wall Street Mentor",
    text: "Kiran Dutta has 10+ years trading US & Indian markets, an MBA from Columbia University, and holds the NISM SEBI RA certification.",
  },
  {
    icon: Users,
    title: "3000+ Students Trained",
    text: "From CA students in Ameerpet to working IT professionals in Madhapur and Gachibowli — we've helped traders across Hyderabad become consistently profitable.",
  },
  {
    icon: TrendingUp,
    title: "Practical, Hands-On Approach",
    text: "No fluff theory. Live charts, real trade reviews, and a private community. Lifetime mentorship support after every course.",
  },
  {
    icon: Star,
    title: "98% Student Success Rate",
    text: "Highest in Hyderabad. Backed by Google reviews, LinkedIn endorsements, and a Telegram community of 1000+ active traders.",
  },
];

const faqs = [
  {
    q: "Where exactly are the trading classes in Hyderabad held?",
    a: "AlphaBull's flagship classroom sessions are accessible from Ameerpet, Madhapur, Gachibowli, HITEC City, Kukatpally, Begumpet, Banjara Hills, Jubilee Hills, Secunderabad, and Kondapur. We also run live online cohorts that students from Vijayawada, Visakhapatnam, Guntur and the rest of Andhra Pradesh + Telangana attend.",
  },
  {
    q: "What is the fee structure for AlphaBull's trading classes?",
    a: "Stock Market Fundamentals starts at ₹6,999, Technical Analysis Mastery is ₹9,999, and the advanced Options & Derivatives course is ₹14,999. All courses include lifetime mentorship in our private trader community.",
  },
  {
    q: "Are there share market classes near me in Hyderabad for beginners?",
    a: "Yes — our Stock Market Fundamentals program is built specifically for absolute beginners. No prior knowledge required. We start from how an order book works and end with you placing live trades by week 4.",
  },
  {
    q: "Can working professionals attend?",
    a: "Yes. Most of our students in Hyderabad are working IT professionals from HITEC City, Madhapur, Gachibowli and Kondapur. Weekend batches and recorded sessions make it possible to learn without disrupting your job.",
  },
  {
    q: "Do you offer placement or trading capital?",
    a: "We are an education academy, not a prop firm. Our focus is on making you a profitable, independent trader. We do not offer placements or trading capital, but our community routinely shares opportunities and prop-firm referrals.",
  },
  {
    q: "How do I enroll?",
    a: "Click any course link above to pay online via Razorpay, or WhatsApp +91-9032999466 to book a free demo class first. You can also email contact@alphabullacademy.com.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AlphaBull Trading Academy — Trading Classes Hyderabad",
  url: "https://alphabullacademy.com/trading-classes-hyderabad",
  logo: "https://alphabullacademy.com/favicon.ico",
  email: "contact@alphabullacademy.com",
  telephone: "+91-9032999466",
  priceRange: "₹6,999 – ₹14,999",
  description:
    "Hyderabad's leading stock market training academy offering trading classes for beginners, intermediate, and advanced students across Telangana and Andhra Pradesh.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 17.385044, longitude: 78.486671 },
  areaServed: localityList.concat([
    "Telangana",
    "Andhra Pradesh",
    "Vijayawada",
    "Visakhapatnam",
    "Guntur",
    "Tirupati",
    "Warangal",
  ]),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Trading Courses Hyderabad",
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
      name: "Trading Classes Hyderabad",
      item: "https://alphabullacademy.com/trading-classes-hyderabad",
    },
  ],
};

export default function TradingClassesHyderabadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-white">
        <Navigation />

        <main className="pt-24 pb-16">
          {/* Hero */}
          <section className="bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-5xl">
              <Badge className="mb-4 bg-white/15 text-white border-white/20">
                Hyderabad · Telangana · Andhra Pradesh
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Trading Classes in Hyderabad — Learn from Hyderabad's #1 Stock
                Market Mentor
              </h1>
              <p className="text-lg md:text-xl text-white/85 max-w-3xl mb-8 leading-relaxed">
                AlphaBull Academy is the highest-rated trading institute in
                Hyderabad. We have trained 3000+ students with a 98% success
                rate — across classroom batches in Ameerpet, Madhapur,
                Gachibowli &amp; HITEC City, and live online cohorts for
                Vijayawada, Visakhapatnam, and the rest of South India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-base px-8 py-4 h-auto rounded-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book a Free Demo Class
                  </Button>
                </a>
                <a href="tel:+919032999466">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white font-semibold text-base px-8 py-4 h-auto rounded-lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91 90329 99466
                  </Button>
                </a>
              </div>
            </div>
          </section>

          {/* Why us */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Why Hyderabad Chooses AlphaBull
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Three things separate AlphaBull from every other stock market
                training institute in Hyderabad — pedigree, practice, and
                proof.
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

          {/* Courses */}
          <section className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Trading Courses in Hyderabad
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
                Three structured paths — from absolute beginner to options
                pro. All courses are bilingual (English + Hindi) and include
                lifetime mentorship.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((c) => (
                  <Card key={c.name} className="p-6 flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{c.name}</h3>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl font-bold text-primary">
                        {c.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        · {c.duration}
                      </span>
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

          {/* Localities */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-10">
                <Badge className="mb-3">
                  <MapPin className="w-3 h-3 mr-1" />
                  Areas We Serve
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Trading Classes Near You in Hyderabad
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our students travel to AlphaBull from across Hyderabad and
                  Secunderabad. Weekend batches make the commute easy from
                  every major locality.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {localityList.map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-sm font-medium border border-primary/20"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Trading classes in {loc}
                  </span>
                ))}
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold mb-3">
                  Live online for Andhra Pradesh
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Students from Vijayawada, Visakhapatnam, Guntur, Tirupati,
                  Warangal, Karimnagar and Nizamabad join our same Hyderabad
                  cohorts via live Zoom — same instructor, same recordings,
                  same private community.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                Frequently Asked Questions
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

          {/* CTA */}
          <section className="py-16 md:py-24 bg-gradient-to-br from-[#1E3A8A] to-[#0F172A] text-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start? Book a Free Demo Class
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
                See exactly how we teach, meet Kiran, and get a personalised
                roadmap for your trading journey — all in one 60-minute
                session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-base px-8 py-4 h-auto"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </Button>
                </a>
                <Link href="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white font-semibold text-base px-8 py-4 h-auto"
                  >
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
