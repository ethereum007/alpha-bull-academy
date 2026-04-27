import type { Metadata } from "next";
import EarningsClient from "./EarningsClient";

export const metadata: Metadata = {
  title: "Q3 FY26 Earnings Results & Analysis | AlphaBull Academy",
  description:
    "Comprehensive analysis of Q3 FY26 earnings results. Track revenue, profit growth, and expert insights for top Indian companies across IT, Banking, and FMCG sectors. Updated by AlphaBull Trading Academy, Hyderabad.",
  keywords:
    "Q3 FY26 results, Q3 results 2026, earnings analysis India, stock market results, TCS results, Infosys results, HDFC Bank results, quarterly earnings India, NSE BSE results",
  alternates: { canonical: "https://alphabullacademy.com/earnings" },
};

export default function EarningsPage() {
  return <EarningsClient />;
}
