export const WhyChooseUs = () => {
  const usps = [
    {
      icon: "🎓",
      title: "Columbia MBA Founder",
      description:
        "Learn from someone who understands both finance theory and practical trading. Columbia Business School education meets real-world experience.",
    },
    {
      icon: "🌏",
      title: "10+ Years US & Indian Markets",
      description:
        "Strategies tested across different market conditions, from Wall Street to Dalal Street. We know what works and what doesn't.",
    },
    {
      icon: "📈",
      title: "90% Success Rate",
      description:
        "Our students achieve 90% success rate using our price action methodology. Results speak louder than promises.",
    },
    {
      icon: "👥",
      title: "2000+ Traders Trained",
      description:
        "Join a proven community of successful traders. Learn from their experiences, share strategies, and grow together.",
    },
    {
      icon: "🚫",
      title: "No Indicators, Pure Price Action",
      description:
        "Strip away the noise. We teach you to read raw price movement—the only indicator that never lies.",
    },
    {
      icon: "🎯",
      title: "Live Market Training",
      description:
        "Learn by doing. Live market analysis sessions, real trade setups, and hands-on practice with actual charts.",
    },
    {
      icon: "💬",
      title: "Lifetime Community Access",
      description:
        "Join our exclusive Telegram community. Get daily market insights, discuss strategies, and stay connected with fellow traders.",
    },
    {
      icon: "📱",
      title: "Learn Anywhere, Anytime",
      description:
        "100% online courses with self-paced videos + live sessions. Study from home, office, or anywhere in India.",
    },
  ];

  return (
    <section className="w-full bg-white py-[60px] md:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1F2937] mb-4">
            Why Trade With AlphaBull?
          </h2>
          <p className="text-lg text-[#6B7280]">
            We're not just another trading course. Here's what makes us different.
          </p>
        </div>

        {/* USP Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="bg-white p-8 rounded-xl border border-[#E5E7EB] text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#F59E0B] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] cursor-default"
            >
              {/* Icon */}
              <span className="text-5xl block mb-4">{usp.icon}</span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#1F2937] mb-3">
                {usp.title}
              </h3>

              {/* Description */}
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
