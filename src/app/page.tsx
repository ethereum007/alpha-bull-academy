import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Trading Classes in Hyderabad | Best Stock Market Training Telangana & AP | AlphaBull Academy",
  description:
    "Hyderabad's #1 trading academy for Telangana & Andhra Pradesh. 3000+ students trained by Columbia MBA / Wall Street alum Kiran Dutta. Stock market courses from ₹6,999. Online + classroom in Ameerpet, Madhapur, Gachibowli. Book a free demo today.",
  alternates: { canonical: "https://alphabullacademy.com/" },
  openGraph: {
    title: "Trading Classes in Hyderabad | AlphaBull Academy",
    description:
      "Hyderabad's #1 trading academy serving Telangana & Andhra Pradesh. 3000+ traders trained. Courses from ₹6,999. Free demo available.",
    url: "https://alphabullacademy.com/",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
