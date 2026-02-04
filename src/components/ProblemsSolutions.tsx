import { Button } from "@/components/ui/button";
import { X, Check, ArrowRight } from "lucide-react";

export const ProblemsSolutions = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const problems = [
    {
      title: "Following Random Tips",
      description:
        "WhatsApp groups, YouTube gurus, and paid tip providers drain your capital with no accountability. You're trading blind without understanding why.",
    },
    {
      title: "Indicator Overload",
      description:
        "Too many indicators create confusion and analysis paralysis. By the time all your signals align, the opportunity has already passed you by.",
    },
    {
      title: "No Risk Management",
      description:
        "One bad trade wipes out weeks of profits because you never learned proper position sizing or stop-loss placement. Hope is not a strategy.",
    },
    {
      title: "Emotional Trading",
      description:
        "Fear and greed control your decisions. You buy high out of FOMO, sell low out of panic, and repeat the same costly mistakes.",
    },
  ];

  const solutions = [
    {
      title: "Read Price, Not Indicators",
      description:
        "Learn to identify support, resistance, breakouts, and reversals using only candlestick patterns and market structure. No lagging indicators needed.",
    },
    {
      title: "Proven Risk Management",
      description:
        "Master position sizing, stop-loss placement, and portfolio management to protect your capital first, profits second. Survive to trade another day.",
    },
    {
      title: "Trading Psychology",
      description:
        "Develop the mental discipline to stick to your strategy, cut losses quickly, and let winners run. Trade the chart, not your emotions.",
    },
    {
      title: "Real Market Experience",
      description:
        "Learn from 10+ years of trading US & Indian markets—strategies tested through bull runs, crashes, and sideways markets. No theory, only what works.",
    },
  ];

  return (
    <section className="w-full bg-white py-[60px] md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Part 1 - Problems */}
        <div>
          {/* Section Label */}
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#F59E0B] mb-4">
            The Problem
          </p>

          {/* Headline */}
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1F2937] leading-[1.2] max-w-[700px] mb-12">
            Why 90% of Traders Lose Money in the Stock Market
          </h2>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center mb-4">
                  <X className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
                  {problem.title}
                </h3>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2 - Solutions */}
        <div className="mt-20">
          {/* Transition - Center aligned */}
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1F2937] mb-4">
              There's a Better Way: Pure Price Action Trading
            </h2>
            <p className="text-lg text-[#6B7280] max-w-[700px] mx-auto leading-relaxed">
              At Trade With AlphaBull, we strip away the noise. No indicators.
              No tips. Just pure price action—reading what the market is
              actually telling you through charts and volume.
            </p>
          </div>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
                  {solution.title}
                </h3>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection("courses")}
              className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-lg px-8 py-4 h-auto rounded-lg transition-all duration-200 hover:scale-105 shadow-[0_4px_12px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_16px_rgba(245,158,11,0.3)]"
            >
              Start Learning Price Action
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
