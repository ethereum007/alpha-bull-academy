import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://alphabullacademy.com"),
  title: {
    default:
      "Online Trading Courses in India | Stock Market Training | AlphaBull",
    template: "%s | AlphaBull Trading Academy",
  },
  description:
    "Learn stock market trading online with AlphaBull Trading Academy. Price action, technical analysis, options trading, live mentorship, and free demo classes for students across India.",
  keywords:
    "online trading courses india, online stock market course, stock market course for beginners, trading classes in hyderabad online, share market classes hyderabad online, technical analysis course online, options trading course online, intraday trading course, price action trading course, share market classes vijayawada online, trading classes visakhapatnam online, stock market course andhra pradesh, telangana stock market training online, AlphaBull academy, AlphaBull trading academy, kiran dutta trading mentor",
  authors: [{ name: "AlphaBull Trading Academy" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: "https://alphabullacademy.com/" },
  openGraph: {
    type: "website",
    url: "https://alphabullacademy.com/",
    title: "Online Trading Courses in India | AlphaBull Trading Academy",
    description:
      "Live online stock market training with price action, technical analysis, options trading, mentorship, and free demo classes.",
    images: ["https://alphabullacademy.com/og-image.jpg"],
    locale: "en_IN",
    siteName: "AlphaBull Trading Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Trading Courses in India | AlphaBull Trading Academy",
    description:
      "Live online stock market training with price action, technical analysis, options trading, mentorship, and free demo classes.",
    images: ["https://alphabullacademy.com/og-image.jpg"],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://alphabullacademy.com/#organization",
    name: "AlphaBull Trading Academy",
    alternateName: ["AlphaBull Academy", "Trade With AlphaBull"],
    legalName: "Nipun Teach Up Private Limited",
    description:
      "AlphaBull Trading Academy is an online stock market education brand operated by Nipun Teach Up Private Limited. It offers live online courses in price action, technical analysis, options trading, and risk management.",
    url: "https://alphabullacademy.com",
    logo: "https://alphabullacademy.com/logo.png",
    image: "https://alphabullacademy.com/og-image.jpg",
    email: "contact@alphabullacademy.com",
    telephone: "+91-9032999466",
    priceRange: "₹8,999 - ₹44,999",
    areaServed: [
      { "@type": "State", name: "Telangana" },
      { "@type": "State", name: "Andhra Pradesh" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/kirandutta",
      "https://wa.me/919032999466",
    ],
    founder: {
      "@type": "Person",
      name: "Kiran Dutta",
      jobTitle: "Founder & Lead Mentor",
    },
    hasCredential: "2000+ Traders Trained",
    knowsAbout: [
      "Stock Market Trading",
      "Technical Analysis",
      "Options Trading",
      "Intraday Trading",
      "Price Action",
      "Candlestick Patterns",
      "Nifty Trading",
      "Bank Nifty",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AlphaBull Trading Academy",
    alternateName: "AlphaBull Academy",
    url: "https://alphabullacademy.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://alphabullacademy.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Online Trading Courses in India",
    description:
      "Live online stock market and trading courses offered by AlphaBull Trading Academy",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Course",
          name: "Online Stock Market Fundamentals Course",
          description:
            "Beginner online trading course covering stock market basics, chart reading, candlestick patterns, and risk management.",
          provider: {
            "@type": "Organization",
            name: "AlphaBull Trading Academy",
            sameAs: "https://alphabullacademy.com",
          },
          offers: {
            "@type": "Offer",
            price: "8999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://rzp.io/rzp/7UZGE0Dg",
            category: "Education",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT4W",
            instructor: { "@type": "Person", name: "Kiran Dutta" },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Course",
          name: "Online Technical Analysis Mastery Course",
          description:
            "Online technical analysis course covering chart patterns, price action, CPR, EMA, support/resistance, and breakout trading strategies.",
          provider: {
            "@type": "Organization",
            name: "AlphaBull Trading Academy",
            sameAs: "https://alphabullacademy.com",
          },
          offers: {
            "@type": "Offer",
            price: "24999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://rzp.io/rzp/yB1bafTe",
            category: "Education",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT4W",
            instructor: { "@type": "Person", name: "Kiran Dutta" },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Course",
          name: "Online Options & Derivatives Trading Course",
          description:
            "Advanced online options trading course covering derivatives, futures trading, hedging techniques, and professional trading strategies.",
          provider: {
            "@type": "Organization",
            name: "AlphaBull Trading Academy",
            sameAs: "https://alphabullacademy.com",
          },
          offers: {
            "@type": "Offer",
            price: "44999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://wa.me/919032999466",
            category: "Education",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Online",
            courseWorkload: "PT4W",
            instructor: { "@type": "Person", name: "Kiran Dutta" },
          },
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where can I find the best trading classes in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AlphaBull Trading Academy offers live online stock market training for students in Hyderabad, Telangana, Andhra Pradesh, and the rest of India. Courses start at ₹8,999. Call +91-9032999466 to book a free demo.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer share market classes for students in Vijayawada or Visakhapatnam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AlphaBull serves the Andhra Pradesh and Telangana market through live online cohorts. Students from Vijayawada, Visakhapatnam, Guntur, Tirupati, Warangal, Karimnagar and Nizamabad can join the same online mentorship program.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best trading courses in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AlphaBull Trading Academy offers three flagship online courses: Technical Analysis Pro (₹8,999), Price Action Mastery (₹24,999), and Advanced Trading Strategies (₹44,999). Courses include live sessions, recordings, community support, and practical risk-management training.",
        },
      },
      {
        "@type": "Question",
        name: "How much do share market classes cost in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Online share market classes at AlphaBull Academy range from ₹8,999 for beginner training to ₹44,999 for advanced mentorship. Each course explains its inclusions before enrollment.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the best trading mentor in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kiran Dutta, founder of AlphaBull Trading Academy, is a Columbia University MBA, has worked on Wall Street, holds the NISM SEBI RA certification, and has trained 2000+ students.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer online share market classes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AlphaBull Trading Academy currently offers live online share market classes with live sessions, recorded videos, and mentor support for students across India, especially Hyderabad, Telangana and Andhra Pradesh.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MRD2MNQ4');`}
        </Script>
        <Script
          id="ahrefs-analytics"
          strategy="afterInteractive"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="AHRWWW73LaUAMlpUdoIdtA"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MRD2MNQ4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
