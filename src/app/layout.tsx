import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://alphabullacademy.com"),
  title: {
    default:
      "Trading Classes in Hyderabad | #1 Stock Market Training Academy Telangana & AP | AlphaBull",
    template: "%s | AlphaBull Trading Academy Hyderabad",
  },
  description:
    "Looking for trading classes in Hyderabad? AlphaBull is the #1 stock market training academy serving Hyderabad, Secunderabad, Vijayawada, Visakhapatnam & all of Telangana and Andhra Pradesh. 3000+ traders trained. Courses from ₹6,999. Technical analysis, options & intraday strategies taught by Columbia MBA & Wall Street alum Kiran Dutta. Classes in Ameerpet, Madhapur, Gachibowli + online for South India. Book a free demo today.",
  keywords:
    "trading classes in hyderabad, trading classes hyderabad, share market classes near me, share market classes hyderabad, stock market training hyderabad, trading academy hyderabad, best trading courses hyderabad, technical analysis course hyderabad, options trading course hyderabad, intraday trading hyderabad, trading institute hyderabad, share market course ameerpet, trading classes madhapur, stock market coaching gachibowli, share market classes vijayawada, trading classes visakhapatnam, stock market course vizag, trading classes andhra pradesh, telangana stock market training, AlphaBull academy hyderabad, price action trading hyderabad, candlestick patterns course, NISM trading mentor, kiran dutta trading mentor",
  authors: [{ name: "AlphaBull Trading Academy - Hyderabad" }],
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
    title: "Top Trading Courses in Hyderabad | AlphaBull Trading Academy",
    description:
      "Best trading courses in Hyderabad. Join AlphaBull for stock market training, technical analysis & options trading. 3000+ students trained. Expert mentorship!",
    images: ["https://alphabullacademy.com/og-image.jpg"],
    locale: "en_IN",
    siteName: "AlphaBull Trading Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Trading Courses in Hyderabad | AlphaBull Trading Academy",
    description:
      "Best trading courses in Hyderabad. Stock market training, technical analysis & options trading. 3000+ students trained!",
    images: ["https://alphabullacademy.com/og-image.jpg"],
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
    "geo.position": "17.385044;78.486671",
    ICBM: "17.385044, 78.486671",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://alphabullacademy.com/#localbusiness",
    name: "AlphaBull Trading Academy",
    alternateName: [
      "AlphaBull Stock Market Training Hyderabad",
      "Share Market Classes Near Me Hyderabad",
    ],
    description:
      "Looking for share market classes near me? AlphaBull is Hyderabad's top trading academy offering stock market training, technical analysis, options trading, and intraday trading courses. Expert mentorship by Kiran Dutta.",
    url: "https://alphabullacademy.com",
    logo: "https://alphabullacademy.com/logo.png",
    image: "https://alphabullacademy.com/og-image.jpg",
    email: "contact@alphabullacademy.com",
    telephone: "+91-9032999466",
    priceRange: "₹6,999 - ₹14,999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.385044,
      longitude: 78.486671,
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "City", name: "Secunderabad" },
      { "@type": "City", name: "Vijayawada" },
      { "@type": "City", name: "Visakhapatnam" },
      { "@type": "City", name: "Guntur" },
      { "@type": "City", name: "Tirupati" },
      { "@type": "City", name: "Warangal" },
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "AlphaBull Trading Academy Hyderabad",
    description:
      "Premier stock market trading institute in Hyderabad offering courses in technical analysis, options trading, and intraday strategies",
    url: "https://alphabullacademy.com",
    logo: "https://alphabullacademy.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: [
      "Hyderabad",
      "Secunderabad",
      "Ameerpet",
      "Madhapur",
      "Gachibowli",
      "Kukatpally",
      "HITEC City",
      "Banjara Hills",
      "Jubilee Hills",
      "Kondapur",
      "Begumpet",
      "Vijayawada",
      "Visakhapatnam",
      "Guntur",
      "Tirupati",
      "Warangal",
      "Karimnagar",
      "Nizamabad",
      "Telangana",
      "Andhra Pradesh",
    ],
    hasCredential: "3000+ Traders Trained",
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
    name: "Top Trading Courses in Hyderabad",
    description:
      "Best stock market and trading courses in Hyderabad offered by AlphaBull Trading Academy",
    numberOfItems: 3,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Course",
          name: "Stock Market Fundamentals Course Hyderabad",
          description:
            "Best beginner trading course in Hyderabad. Master stock market basics, fundamental analysis, and investment strategies.",
          provider: {
            "@type": "Organization",
            name: "AlphaBull Trading Academy",
            sameAs: "https://alphabullacademy.com",
          },
          offers: {
            "@type": "Offer",
            price: "6999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://rzp.io/rzp/7UZGE0Dg",
            category: "Education",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Blended",
            courseWorkload: "PT4W",
            instructor: { "@type": "Person", name: "Kiran Dutta" },
            location: { "@type": "Place", name: "Hyderabad, India" },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Course",
          name: "Technical Analysis Mastery Course Hyderabad",
          description:
            "Top technical analysis course in Hyderabad. Chart patterns, price action, CPR, EMA, support/resistance, and breakout trading strategies.",
          provider: {
            "@type": "Organization",
            name: "AlphaBull Trading Academy",
            sameAs: "https://alphabullacademy.com",
          },
          offers: {
            "@type": "Offer",
            price: "9999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://rzp.io/rzp/yB1bafTe",
            category: "Education",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Blended",
            courseWorkload: "PT4W",
            instructor: { "@type": "Person", name: "Kiran Dutta" },
            location: { "@type": "Place", name: "Hyderabad, India" },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Course",
          name: "Options & Derivatives Trading Course Hyderabad",
          description:
            "Advanced options trading course in Hyderabad. Master derivatives, futures trading, hedging techniques, and professional trading strategies.",
          provider: {
            "@type": "Organization",
            name: "AlphaBull Trading Academy",
            sameAs: "https://alphabullacademy.com",
          },
          offers: {
            "@type": "Offer",
            price: "14999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: "https://wa.me/919032999466",
            category: "Education",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "Blended",
            courseWorkload: "PT4W",
            instructor: { "@type": "Person", name: "Kiran Dutta" },
            location: { "@type": "Place", name: "Hyderabad, India" },
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
          text: "AlphaBull Trading Academy is Hyderabad's #1 stock market training institute. We offer classes accessible from Ameerpet, Madhapur, Gachibowli, HITEC City, Kukatpally, Secunderabad, Banjara Hills, Jubilee Hills, Kondapur and Begumpet — plus online classes for students across Telangana, Andhra Pradesh and the rest of South India. Courses start at ₹6,999. Call +91-9032999466 to book a free demo.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer share market classes for students in Vijayawada or Visakhapatnam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AlphaBull serves the entire Andhra Pradesh and Telangana market. Our online live cohort programs are popular with students from Vijayawada, Visakhapatnam, Guntur, Tirupati, Warangal, Karimnagar and Nizamabad. You get the same Columbia MBA / Wall Street trained mentorship as our Hyderabad classroom students.",
        },
      },
      {
        "@type": "Question",
        name: "What are the best trading courses in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AlphaBull Trading Academy offers three flagship courses: Stock Market Fundamentals (₹6,999), Technical Analysis Mastery (₹9,999), and Options & Derivatives Trading (₹14,999). With 3000+ students trained and 98% success rate, we are Hyderabad's premier trading education provider.",
        },
      },
      {
        "@type": "Question",
        name: "How much do share market classes cost in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Share market classes at AlphaBull Academy Hyderabad range from ₹6,999 for beginners to ₹14,999 for advanced options trading. All courses include lifetime mentorship support and practical trading strategies.",
        },
      },
      {
        "@type": "Question",
        name: "Who is the best trading mentor in Hyderabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kiran Dutta, founder of AlphaBull Trading Academy, is one of Hyderabad's top trading mentors. He is a Columbia University MBA, has worked on Wall Street, holds the NISM SEBI RA certification, and has trained 3000+ students with a 98% success rate.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer online share market classes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AlphaBull Trading Academy offers both online and offline share market classes. Our online courses provide live sessions, recorded videos, and 24/7 mentor support — perfect for students searching for share market classes near me from anywhere in India, especially across Hyderabad, Telangana and Andhra Pradesh.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://alphabullacademy.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Trading Classes Hyderabad",
        item: "https://alphabullacademy.com/trading-classes-hyderabad",
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
