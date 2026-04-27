"use client";

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export const Courses = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const courses = [
    {
      badge: "BEGINNER",
      badgeBg: "bg-[#DBEAFE]",
      badgeColor: "text-[#1E3A8A]",
      title: "Technical Analysis Pro",
      duration: "1 Month | Self-Paced + Live Sessions",
      description:
        "Perfect for complete beginners. Learn stock market basics, chart reading, candlestick patterns, and fundamental technical analysis.",
      highlights: [
        "Stock market fundamentals",
        "Chart reading & patterns",
        "Support & resistance basics",
        "Risk management introduction",
      ],
      price: "₹8,999",
      priceColor: "text-[#1E3A8A]",
      buttonText: "Learn More",
      buttonStyle: "outline" as const,
      featured: false,
      link: "https://rzp.io/rzp/7UZGE0Dg",
    },
    {
      badge: "MOST POPULAR",
      badgeBg: "bg-gradient-to-r from-[#F59E0B] to-[#D97706]",
      badgeColor: "text-white",
      title: "Price Action Mastery",
      duration: "3 Months | Live Classes + Mentorship",
      description:
        "Our flagship course. Master pure price action trading without indicators. Proven strategies from 10+ years of real market experience.",
      highlights: [
        "Pure price action methodology",
        "Advanced chart patterns",
        "Live market analysis sessions",
        "6 months mentor support",
        "Telegram community access",
      ],
      price: "₹24,999",
      priceColor: "text-[#F59E0B]",
      buttonText: "Enroll Now",
      buttonStyle: "primary" as const,
      featured: true,
      link: "https://rzp.io/rzp/yB1bafTe",
    },
    {
      badge: "ADVANCED",
      badgeBg: "bg-[#DDD6FE]",
      badgeColor: "text-[#6B21A8]",
      title: "Advanced Trading Strategies",
      duration: "3 Months | Elite Mentorship",
      description:
        "For experienced traders. Advanced price action, options strategies, portfolio management, and 1-on-1 mentorship.",
      highlights: [
        "Options & derivatives trading",
        "Advanced risk management",
        "Portfolio optimization",
        "1-on-1 mentorship sessions",
        "Lifetime community access",
      ],
      price: "₹44,999",
      priceColor: "text-[#6B21A8]",
      buttonText: "Learn More",
      buttonStyle: "purple" as const,
      featured: false,
      link: "https://wa.me/919032999466",
    },
  ];

  return (
    <section id="courses" className="w-full bg-[#F9FAFB] py-[60px] md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#F59E0B] mb-4">
            Our Courses
          </p>
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1F2937] mb-4">
            Choose Your Trading Journey
          </h2>
          <p className="text-lg text-[#6B7280] max-w-[600px] mx-auto leading-relaxed">
            From complete beginner to advanced trader—we have a structured path
            for every level.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`relative flex flex-col bg-white rounded-2xl p-8 lg:p-10 transition-all duration-200 hover:-translate-y-1 cursor-pointer ${
                course.featured
                  ? "border-[3px] border-[#F59E0B] shadow-[0_12px_28px_rgba(245,158,11,0.25)] lg:scale-105 z-10"
                  : "border-2 border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
              }`}
              onClick={() => window.open(course.link, "_blank")}
            >
              {/* Badge */}
              <span
                className={`inline-block self-start px-3 py-1.5 rounded-md text-xs font-bold uppercase ${course.badgeBg} ${course.badgeColor} ${
                  course.featured ? "shadow-[0_0_20px_rgba(245,158,11,0.5)] animate-pulse" : ""
                }`}
              >
                {course.badge}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#1F2937] mt-6">
                {course.title}
              </h3>

              {/* Duration */}
              <p className="text-sm text-[#6B7280] mt-2">{course.duration}</p>

              {/* Description */}
              <p className="text-base text-[#4B5563] leading-relaxed mt-4">
                {course.description}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-3 flex-grow">
                {course.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-[15px] text-[#374151] leading-relaxed"
                  >
                    <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="mt-auto pt-8 border-t border-[#E5E7EB]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className={`text-[32px] lg:text-[36px] font-bold ${course.priceColor}`}>
                    {course.price}
                  </span>
                  {course.buttonStyle === "primary" ? (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(course.link, "_blank");
                      }}
                      className="w-full sm:w-auto bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-7 py-3.5 h-auto rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 shadow-[0_4px_12px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_20px_rgba(245,158,11,0.4)]"
                    >
                      {course.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : course.buttonStyle === "purple" ? (
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(course.link, "_blank");
                      }}
                      className="w-full sm:w-auto border-2 border-[#6B21A8] text-[#6B21A8] hover:bg-[#DDD6FE] font-semibold px-6 py-3 h-auto rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {course.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(course.link, "_blank");
                      }}
                      className="w-full sm:w-auto border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#DBEAFE] font-semibold px-6 py-3 h-auto rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                    >
                      {course.buttonText}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Below Cards CTA */}
        <div className="text-center mt-12">
          <p className="text-base text-[#6B7280] mb-4">
            Not sure which course is right for you?
          </p>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#DBEAFE] font-semibold px-7 py-3.5 h-auto rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Compare All Courses
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};