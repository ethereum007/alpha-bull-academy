"use client";

import {
  Ban,
  Globe2,
  GraduationCap,
  LineChart,
  MessageCircle,
  Smartphone,
  Target,
  Users,
} from "lucide-react";

export const WhyChooseUs = () => {
  const usps = [
    {
      icon: GraduationCap,
      title: "Columbia MBA Founder",
      description:
        "Learn from someone who understands both finance theory and practical trading. Columbia Business School education meets real-world experience.",
    },
    {
      icon: Globe2,
      title: "10+ Years US & Indian Markets",
      description:
        "Strategies tested across different market conditions, from Wall Street to Dalal Street. We know what works and what doesn't.",
    },
    {
      icon: LineChart,
      title: "Risk-First Trading Framework",
      description:
        "Learn repeatable setups, position sizing, stop-loss placement, and review habits before risking serious capital.",
    },
    {
      icon: Users,
      title: "2000+ Traders Trained",
      description:
        "Join a proven community of traders. Learn from their experiences, share strategies, and grow together.",
    },
    {
      icon: Ban,
      title: "No Indicators, Pure Price Action",
      description:
        "Strip away the noise. We teach you to read raw price movement and market structure without indicator overload.",
    },
    {
      icon: Target,
      title: "Live Market Training",
      description:
        "Learn by doing. Live market analysis sessions, real trade setups, and hands-on practice with actual charts.",
    },
    {
      icon: MessageCircle,
      title: "Lifetime Community Access",
      description:
        "Join our exclusive Telegram community. Get daily market insights, discuss strategies, and stay connected with fellow traders.",
    },
    {
      icon: Smartphone,
      title: "Learn Anywhere, Anytime",
      description:
        "100% online courses with self-paced videos + live sessions. Study from home, office, or anywhere in India.",
    },
  ];

  return (
    <section className="w-full bg-white py-[60px] md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1F2937] mb-4">
            Why Trade With AlphaBull?
          </h2>
          <p className="text-lg text-[#6B7280]">
            We're not just another trading course. Here's what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="bg-white p-8 rounded-xl border border-[#E5E7EB] text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#F59E0B] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] cursor-default"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#E0F2FE] text-[#1E3A8A]">
                <usp.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F2937] mb-3">
                {usp.title}
              </h3>
              <p className="text-[15px] text-[#6B7280] leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
