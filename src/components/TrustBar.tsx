export const TrustBar = () => {
  const partners = [
    { name: "NSE Certified" },
    { name: "Zerodha Partner" },
    { name: "TradingView" },
    { name: "Angel One" },
    { name: "Upstox" },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] border-t border-b border-[#E5E7EB] py-8 md:py-10">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#6B7280] text-center mb-6">
          Trusted by Traders Across India
        </p>

        {/* Logo/Badge Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 bg-white rounded-lg border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <span className="text-sm font-medium text-[#4B5563]">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
