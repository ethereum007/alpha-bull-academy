import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FloatingElements = () => {
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCTA(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919032999466", "_blank");
  };

  return (
    <>
      {/* Mobile Sticky CTA Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] z-[1000] md:hidden transition-transform duration-300 ${
          showMobileCTA ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center gap-3">
          <span className="text-sm font-semibold text-[#1F2937]">
            Ready to start trading?
          </span>
          <Button
            onClick={scrollToContact}
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-sm px-5 py-2.5 h-auto rounded-md whitespace-nowrap"
          >
            Book Free Demo
          </Button>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div
        className={`fixed right-4 z-[999] transition-all duration-300 ${
          showMobileCTA ? "bottom-20 md:bottom-6" : "bottom-6"
        }`}
      >
        <div className="relative">
          {/* Tooltip */}
          <div
            className={`absolute right-[70px] top-1/2 -translate-y-1/2 bg-[#1F2937] text-white text-xs px-3 py-2 rounded-md whitespace-nowrap transition-opacity duration-200 ${
              showTooltip ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            Chat with us
            {/* Tooltip arrow */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#1F2937]" />
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={openWhatsApp}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(37,211,102,0.5)] cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-[0_6px_16px_rgba(37,211,102,0.6)]"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white fill-white" />
          </button>
        </div>
      </div>
    </>
  );
};
