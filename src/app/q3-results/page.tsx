import type { Metadata } from "next";
import Q3ResultsClient from "./Q3ResultsClient";

export const metadata: Metadata = {
  title: "Q3 Results FY26 - IT Sector Earnings Analysis | AlphaBull",
  description:
    "Comprehensive Q3 FY26 earnings analysis covering Tata Elxsi financial performance, revenue growth, margin expansion, segment performance, deal wins, and management outlook.",
  keywords:
    "Tata Elxsi Q3 FY26 results, Tata Elxsi earnings, IT sector Q3 results, Tata Elxsi financial performance",
  alternates: { canonical: "https://alphabullacademy.com/q3-results" },
};

export default function Q3ResultsPage() {
  return <Q3ResultsClient />;
}
