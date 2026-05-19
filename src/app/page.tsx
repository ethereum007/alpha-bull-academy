import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Online Trading Courses in India | Stock Market Training | AlphaBull",
  description:
    "Learn stock market trading online with AlphaBull Academy. Price action, technical analysis, options trading, live mentorship, and free demo classes for students across India.",
  alternates: { canonical: "https://www.alphabullacademy.com/" },
  openGraph: {
    title: "Online Trading Courses in India | AlphaBull Academy",
    description:
      "Live online stock market training with price action, technical analysis, options trading, mentorship, and free demo classes.",
    url: "https://www.alphabullacademy.com/",
    type: "website",
    images: ["https://www.alphabullacademy.com/og-image.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}
