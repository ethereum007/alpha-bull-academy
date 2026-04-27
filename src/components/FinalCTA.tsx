"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const FinalCTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustItems = [
    "14-day money-back guarantee",
    "90% success rate",
    "2000+ traders trained",
  ];

  return (
    <section
      className="w-full py-[60px] md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-white/10 rounded-full" />
      </div>

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        {/* Headline */}
        <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-4">
          Ready to Transform Your Trading?
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
          Join 2000+ successful traders. Start with a free demo class—zero
          commitment, zero risk.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-lg px-9 py-4 h-auto rounded-lg transition-all duration-200 hover:scale-105 shadow-[0_4px_12px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_28px_rgba(245,158,11,0.4)]"
          >
            Book Free Demo Class
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("courses")}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white font-semibold text-lg px-9 py-4 h-auto rounded-lg transition-all duration-200 hover:scale-105"
          >
            View All Courses
          </Button>
        </div>

        {/* Urgency Text */}
        <p className="text-base font-semibold text-[#FDE68A] mb-6">
          ⏰ Next batch starts in 7 days. Only 15 seats left.
        </p>

        {/* Trust Reinforcement */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {trustItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-white/80"
            >
              <Check className="w-4 h-4 text-[#10B981]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};