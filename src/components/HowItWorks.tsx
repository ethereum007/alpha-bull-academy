"use client";

import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      number: "1",
      title: "Book Free Demo Class",
      description:
        "Experience our teaching style. Get a taste of price action methodology. No credit card required. Zero commitment.",
      linkText: "Book Now",
      linkAction: () => scrollToSection("contact"),
    },
    {
      number: "2",
      title: "Choose Your Course",
      description:
        "Pick the right course based on your experience level. Get instant access to course materials and community.",
      linkText: "View Courses",
      linkAction: () => scrollToSection("courses"),
    },
    {
      number: "3",
      title: "Learn & Practice",
      description:
        "Watch video lessons, join live sessions, practice on demo accounts. Get personalized feedback from mentors.",
      linkText: null,
      linkAction: null,
    },
    {
      number: "4",
      title: "Trade With Confidence",
      description:
        "Start live trading with proven strategies. Get ongoing support from community and mentors. Build consistent profits.",
      linkText: null,
      linkAction: null,
    },
  ];

  return (
    <section className="w-full bg-white py-[60px] md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1F2937] mb-4">
            How It Works
          </h2>
          <p className="text-lg text-[#6B7280]">
            From enrollment to profitable trading in 4 simple steps.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-[#E5E7EB] z-0" />

          {/* Steps */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-start lg:items-stretch">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-0 lg:text-center max-w-full lg:max-w-[280px] flex-1"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 flex-shrink-0 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center shadow-[0_4px_12px_rgba(245,158,11,0.3)] lg:mb-6 z-10">
                  <span className="text-white text-3xl font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-[#6B7280] leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Link */}
                  {step.linkText && step.linkAction && (
                    <button
                      onClick={step.linkAction}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[#F59E0B] hover:text-[#D97706] hover:underline transition-colors"
                    >
                      {step.linkText}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};