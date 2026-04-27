"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import Link from "next/link";
import { earningsData, currentSeason } from "@/data/earningsData";

const VerdictIcon = ({ verdict }: { verdict: 'beat' | 'miss' | 'inline' }) => {
  if (verdict === 'beat') return <TrendingUp className="w-3 h-3 text-green-400" />;
  if (verdict === 'miss') return <TrendingDown className="w-3 h-3 text-red-400" />;
  return <Minus className="w-3 h-3 text-yellow-400" />;
};

const verdictColor = (verdict: 'beat' | 'miss' | 'inline') => {
  if (verdict === 'beat') return 'text-green-400';
  if (verdict === 'miss') return 'text-red-400';
  return 'text-yellow-400';
};

export const EarningsScroller = () => {
  // Create duplicated array for seamless loop
  const scrollItems = [...earningsData, ...earningsData];

  return (
    <Link
      href="/earnings"
      className="fixed top-[160px] left-0 right-0 z-30 block bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-y border-primary/30 py-2 overflow-hidden cursor-pointer hover:from-primary/30 hover:via-accent/30 hover:to-primary/30 transition-colors"
    >
      <div className="flex items-center">
        {/* Static Label */}
        <div className="flex-shrink-0 bg-primary px-4 py-1 mr-4 z-10">
          <span className="text-primary-foreground font-bold text-sm">
            {currentSeason.quarter} {currentSeason.fiscalYear} Results
          </span>
        </div>

        {/* Scrolling Content */}
        <div className="flex-1 overflow-hidden relative">
          <motion.div
            className="flex items-center gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {scrollItems.map((result, index) => (
              <div key={`${result.id}-${index}`} className="flex items-center gap-2 text-sm">
                <span className="font-semibold text-foreground">{result.ticker}</span>
                <VerdictIcon verdict={result.verdict} />
                <span className={verdictColor(result.verdict)}>
                  {result.verdict === 'beat' ? 'Beat' : result.verdict === 'miss' ? 'Miss' : 'Inline'}
                </span>
                <span className="text-muted-foreground">|</span>
                <span className={result.profitGrowth >= 0 ? 'text-green-400' : 'text-red-400'}>
                  PAT {result.profitGrowth >= 0 ? '+' : ''}{result.profitGrowth.toFixed(1)}%
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0 px-4 z-10">
          <span className="text-primary text-sm font-medium hover:underline">
            View All →
          </span>
        </div>
      </div>
    </Link>
  );
};
