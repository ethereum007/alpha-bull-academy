import type { Metadata } from "next";
import EarningsClient from "./EarningsClient";

export const metadata: Metadata = {
  title: "Q3 FY25 Earnings Results & Analysis | AlphaBull",
  description:
    "Comprehensive analysis of Q3 FY25 earnings results. Track revenue, profit growth, and expert insights for top Indian companies across IT, Banking, FMCG sectors.",
  keywords:
    "Q3 results 2025, earnings analysis, stock market results, TCS results, Infosys results, HDFC Bank results, quarterly earnings India",
  alternates: { canonical: "https://alphabull.club/earnings" },
};

export default function EarningsPage() {
  return <EarningsClient />;
}
