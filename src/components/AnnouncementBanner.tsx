"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, MessageCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    icon: CalendarDays,
    label: "Next Batch",
    headline: "Next batch starting from June 5th, 2026",
    detail: "Reserve your demo slot before seats fill.",
  },
  {
    icon: TrendingUp,
    label: "Live Training",
    headline: "Price action, technical analysis, and risk-first practice",
    detail: "Learn with live sessions, recordings, and mentor support.",
  },
  {
    icon: MessageCircle,
    label: "Fast Contact",
    headline: "Have questions? Contact here and get batch details",
    detail: "Chat on WhatsApp or leave your details in the form.",
  },
];

export const AnnouncementBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navHeight = 80;
      const position =
        element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  const slide = slides[activeIndex];
  const Icon = slide.icon;

  return (
    <section className="pt-16 lg:pt-20 bg-white" aria-label="Batch announcement">
      <div className="bg-[#0F172A] text-white border-y border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-3">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-3 lg:gap-6 items-center">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-11 w-11 rounded-lg bg-[#10B981]/15 text-[#10B981] flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] uppercase tracking-[1.5px] font-bold text-[#F59E0B]">
                    {slide.label}
                  </span>
                  <div className="flex gap-1" aria-hidden="true">
                    {slides.map((item, index) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === activeIndex
                            ? "w-6 bg-[#F59E0B]"
                            : "w-1.5 bg-white/35"
                        }`}
                        tabIndex={-1}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm md:text-base font-semibold truncate">
                  {slide.headline}
                </p>
                <p className="text-xs md:text-sm text-white/70">
                  {slide.detail}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={scrollToContact}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold h-10 px-5"
              >
                Contact Here
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/919032999466", "_blank")}
                variant="outline"
                className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white h-10 px-5"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
