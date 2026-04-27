import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About AlphaBull | Stock Market Education Platform India",
  description:
    "AlphaBull is an online stock market education platform in India. Learn stock market concepts, trading strategies, and risk management through structured online courses.",
  keywords:
    "stock market education India, trading courses, learn trading, stock market training Hyderabad",
  alternates: { canonical: "https://alphabull.club/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
