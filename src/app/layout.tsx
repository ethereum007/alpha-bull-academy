import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://alphabullacademy.com"),
  title: {
    default:
      "Share Market Classes Near Me | Best Trading Courses in Hyderabad 2026 | AlphaBull Academy",
    template: "%s | AlphaBull Trading Academy",
  },
  description:
    "Looking for share market classes near me? AlphaBull is Hyderabad's #1 stock market training academy! Join 3000+ successful traders. Stock market courses from ₹6,999. Learn technical analysis, options trading & intraday strategies. Expert mentorship. Classes in Ameerpet, Madhapur, Gachibowli. Enroll today!",
  keywords:
    "share market classes near me, trading courses hyderabad, share market classes hyderabad, best trading courses in hyderabad, stock market training hyderabad, trading academy hyderabad, technical analysis course hyderabad, options trading course hyderabad, intraday trading hyderabad, AlphaBull academy hyderabad, price action trading hyderabad, candlestick patterns course",
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
      { "@type": "State", name: "Telangana" },
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
