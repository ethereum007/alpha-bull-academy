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
        "Relying on WhatsApp groups, Telegram channels, and social media tips without understanding the logic behind trades leads to inconsistent losses.",
    },
    {
      title: "Indicator Overload",
      description:
        "Cluttering charts with RSI, MACD, Bollinger Bands, and more creates confusion. Conflicting signals lead to analysis paralysis and missed opportunities.",
    },
    {
      title: "No Risk Management",
      description:
        "Trading without stop losses, position sizing, or risk-reward ratios means one bad trade can wipe out weeks of gains.",
    },
    {
      title: "Emotional Trading",
      description:
        "Fear of missing out (FOMO), revenge trading after losses, and greed-driven decisions override logical analysis and destroy accounts.",
    },
  ];

  const solutions = [
    {
      title: "Read Price, Not Indicators",
      description:
        "Learn to understand what the market is telling you directly through candlestick patterns, support/resistance, and volume analysis.",
    },
    {
      title: "Proven Risk Management",
      description:
        "Master position sizing, stop-loss placement, and risk-reward ratios that protect your capital while maximizing profitable trades.",
    },
    {
      title: "Trading Psychology",
      description:
        "Develop the mental discipline to stick to your trading plan, manage emotions, and make rational decisions under pressure.",
    },
    {
      title: "Real Market Experience",
      description:
        "Practice with live market sessions, real-time analysis, and hands-on learning that prepares you for actual trading scenarios.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        {/* Part 1 - Problems */}
        <div>
          {/* Section Label */}
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#F59E0B] mb-4">
            The Problem
          </p>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1F2937] max-w-[700px] mb-12">
            Why 90% of Traders Lose Money in the Stock Market
          </h2>

          {/* Problem Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-[#FEF2F2] border border-[#FECACA] rounded-xl p-8"
              >
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <X className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mt-4">
                  {problem.title}
                </h3>
                <p className="text-base text-[#6B7280] mt-2 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2 - Solutions */}
        <div className="mt-20 md:mt-24">
          {/* Transition - Center aligned */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#1F2937] mb-4">
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
                className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-8"
              >
                <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2937] mt-4">
                  {solution.title}
                </h3>
                <p className="text-base text-[#6B7280] mt-2 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToSection("courses")}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-base md:text-lg px-8 py-4 h-auto rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(245,158,11,0.4)]"
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
