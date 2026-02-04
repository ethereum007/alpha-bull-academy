import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export const FreeResources = () => {
  const resources = [
    {
      icon: "🎓",
      title: "Free Demo Class",
      description:
        "Join a live demo session and experience our teaching style. Learn one complete price action setup.",
      includes: [
        "60-minute live session",
        "Q&A with instructor",
        "Free chart analysis",
      ],
      buttonText: "Book Free Demo",
      link: "#contact",
    },
    {
      icon: "📺",
      title: "Free Webinar",
      description:
        "Watch our recorded masterclass: '5 Price Action Secrets Profitable Traders Use Daily'",
      includes: [
        "90-minute masterclass",
        "Real chart examples",
        "PDF notes included",
      ],
      buttonText: "Watch Webinar",
      link: "https://wa.me/919032999466",
    },
    {
      icon: "📄",
      title: "Price Action Playbook (PDF)",
      description:
        "Download our comprehensive guide covering 10 essential price action patterns with real examples.",
      includes: [
        "25-page PDF guide",
        "10 chart patterns",
        "Entry/exit strategies",
      ],
      buttonText: "Download Free PDF",
      link: "https://wa.me/919032999466",
    },
    {
      icon: "🎬",
      title: "Free Mini Course",
      description:
        "5-part video series on stock market basics. Perfect for complete beginners.",
      includes: [
        "5 video lessons",
        "Lifetime access",
        "Certificate of completion",
      ],
      buttonText: "Start Mini Course",
      link: "https://wa.me/919032999466",
    },
  ];

  const handleClick = (link: string) => {
    if (link.startsWith("#")) {
      const element = document.getElementById(link.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(link, "_blank");
    }
  };

  return (
    <section
      className="w-full py-[60px] md:py-[100px]"
      style={{
        background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#1E3A8A] mb-4">
            Free Resources
          </p>
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1F2937] mb-4">
            Start Learning Today—100% Free
          </h2>
          <p className="text-lg text-[#4B5563]">
            Not ready to enroll? No problem. Get a head start with these free resources.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-white p-8 lg:p-10 rounded-2xl border-2 border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.08)] text-center flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-[#F59E0B] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]"
            >
              {/* Icon */}
              <span className="text-6xl block mb-6">{resource.icon}</span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1F2937] mb-4">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] text-[#6B7280] leading-relaxed mb-6">
                {resource.description}
              </p>

              {/* Includes */}
              <ul className="text-left space-y-2 mb-6 flex-grow">
                {resource.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#4B5563]"
                  >
                    <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                onClick={() => handleClick(resource.link)}
                className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-3.5 h-auto rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(245,158,11,0.3)]"
              >
                {resource.buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
