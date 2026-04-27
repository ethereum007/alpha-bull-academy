import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title:
    "Trade With AlphaBull | Best Online Trading Course India | Price Action Mastery",
  description:
    "Master price action trading with India's most trusted online course. 10+ years US & Indian market experience, 2000+ traders trained, 90% success rate. Enroll now!",
  alternates: { canonical: "https://alphabullacademy.com/" },
};

export default function Home() {
  return <HomeClient />;
}
