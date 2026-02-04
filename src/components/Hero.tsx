import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroDalalStreet from "@/assets/hero-dalal-street.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustSignals = [
    "2000+ Traders Trained",
    "90% Success Rate",
    "10+ Years Experience",
    "Columbia MBA Founder",
  ];

  // Indian avatar placeholder URLs
  const avatars = [
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
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
                🏆 India's #1 Price Action Trading Academy
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mt-6">
              Master Price Action Trading & Build Your Financial Freedom
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed mt-4 max-w-[600px]">
              Learn proven trading strategies from 10+ years of US & Indian
              market experience. Join 2000+ successful traders who achieved 90%
              success rate with our price action methodology.
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
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Student ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    style={{ zIndex: avatars.length - index }}
                  />
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
                src={heroDalalStreet}
                alt="Dalal Street - Bombay Stock Exchange"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
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
                    <p className="text-2xl font-bold text-[#1F2937]">90%</p>
                    <p className="text-sm text-[#4B5563]">Success Rate</p>
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
