"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, TrendingUp } from "lucide-react";

const heroInstructor = "/assets/hero-instructor.jpeg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustSignals = [
    "2000+ Traders Trained",
    "Risk-First Training",
    "10+ Years Experience",
    "Columbia MBA Founder",
  ];

  const studentAvatars = [
    { initials: "RK", city: "Hyderabad", color: "from-[#F97316] to-[#F59E0B]" },
    { initials: "PS", city: "Vijayawada", color: "from-[#0F766E] to-[#14B8A6]" },
    { initials: "AR", city: "Vizag", color: "from-[#1D4ED8] to-[#38BDF8]" },
    { initials: "SM", city: "Guntur", color: "from-[#BE123C] to-[#FB7185]" },
    { initials: "VM", city: "Bengaluru", color: "from-[#6D28D9] to-[#A78BFA]" },
  ];

  return (
    <section
      id="home"
      className="relative w-full pt-16 lg:pt-20"
      style={{
        background: "linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/30 text-white text-sm font-medium">
                <TrendingUp className="w-4 h-4 text-[#10B981]" />
                Live Online Trading Academy · Serving India
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mt-6">
              Online Trading Courses for Price Action &amp; Stock Market Training
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed mt-4 max-w-[600px]">
              Learn price action, technical analysis, risk management, and
              options trading through live online cohorts. AlphaBull Trading
              Academy serves students across Hyderabad, Telangana, Andhra
              Pradesh, and the rest of India with structured mentorship from
              Columbia MBA &amp; Wall Street alum Kiran Dutta.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-2 text-white text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  {signal}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-base md:text-lg px-8 py-4 h-auto rounded-lg transition-all duration-300 hover:scale-105 shadow-[0_4px_12px_rgba(245,158,11,0.4)]"
              >
                Book Free Demo Class
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("courses")}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:text-white font-semibold text-base md:text-lg px-8 py-4 h-auto rounded-lg transition-all duration-300"
              >
                View All Courses
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mt-8">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2.5">
                {studentAvatars.map((avatar, index) => (
                  <div
                    key={avatar.initials}
                    aria-label={`AlphaBull student from ${avatar.city}`}
                    className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br ${avatar.color} flex items-center justify-center shadow-sm`}
                    style={{ zIndex: studentAvatars.length - index }}
                    title={`Student from ${avatar.city}`}
                  >
                    <span className="text-xs font-bold text-white">
                      {avatar.initials}
                    </span>
                  </div>
                ))}
              </div>
              {/* Text */}
              <p className="text-sm text-white/80">
                <span className="font-bold text-white">50+</span> students
                enrolled this week
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={heroInstructor}
                alt="Kiran Dutta, founder of AlphaBull Trading Academy, teaching an online stock market course"
                className="w-full h-auto object-contain rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              />
              {/* Optional: Floating Stats Card */}
              <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-xl p-4 shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#10B981]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1F2937]">Live</p>
                    <p className="text-sm text-[#4B5563]">Chart Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
