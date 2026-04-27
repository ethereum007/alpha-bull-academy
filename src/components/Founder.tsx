"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroInstructor = "/assets/hero-instructor.jpeg";

export const Founder = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-[60px] md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="text-center md:text-left">
            <img
              src={heroInstructor}
              alt="Skill - Founder of AlphaBull Trading Academy"
              className="w-full max-w-[500px] mx-auto md:mx-0 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] object-cover"
            />

            {/* Credentials Badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
              <span className="bg-white border border-[#E5E7EB] px-4 py-2 rounded-md text-sm font-semibold text-[#1E3A8A]">
                Columbia MBA
              </span>
              <span className="bg-white border border-[#E5E7EB] px-4 py-2 rounded-md text-sm font-semibold text-[#1E3A8A]">
                10+ Years Trading
              </span>
              <span className="bg-white border border-[#E5E7EB] px-4 py-2 rounded-md text-sm font-semibold text-[#1E3A8A]">
                2000+ Students
              </span>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#F59E0B] mb-4">
              Meet Your Instructor
            </p>

            <h2 className="text-[26px] md:text-[32px] font-semibold text-[#1F2937] mb-6">
              Learn From Someone Who's Been There
            </h2>

            <p className="text-xl font-medium text-[#1F2937] mb-5">
              Hi, I'm Skill—founder of Trade With AlphaBull and your trading
              mentor.
            </p>

            <p className="text-base text-[#4B5563] leading-relaxed mb-5">
              After earning my MBA from Columbia Business School, I spent years
              trading both US and Indian markets. I've seen bull runs, crashes,
              and everything in between. I've made profitable trades and lost
              trades. Most importantly, I've learned what actually works.
            </p>

            <p className="text-base text-[#4B5563] leading-relaxed mb-5">
              I started AlphaBull because I was frustrated with the dishonesty
              in trading education—fake screenshots, unrealistic promises, and
              indicator-heavy strategies that don't work in real markets.
            </p>

            <p className="text-base font-semibold text-[#1E3A8A] mb-5">
              My philosophy is simple: Teach what works. No BS.
            </p>

            <p className="text-base text-[#4B5563] leading-relaxed mb-5">
              That's why we focus on pure price action—the only trading method
              that stands the test of time. Over 2000 traders have now learned
              this methodology and are trading profitably.
            </p>

            <p className="text-base text-[#4B5563] leading-relaxed mb-8">
              I'm not here to sell you false dreams. I'm here to teach you a
              real skill that can generate real income—if you're willing to put
              in the work.
            </p>

            <Button
              variant="outline"
              onClick={() => window.open("https://wa.me/919032999466", "_blank")}
              className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#DBEAFE] font-semibold px-6 py-3 h-auto rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              Read Full Story
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};