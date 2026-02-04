export const TrustBar = () => {
  const partners = [
    { name: "NSE", label: "NSE" },
    { name: "Zerodha", label: "Zerodha" },
    { name: "Upstox", label: "Upstox" },
    { name: "Angel One", label: "Angel One" },
    { name: "Groww", label: "Groww" },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] border-t border-b border-[#E5E7EB] py-8">
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#6B7280] text-center mb-6">
          Trusted by Traders Across India
        </p>

        {/* Logo Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center px-6 py-3 bg-white rounded-lg border border-[#E5E7EB] opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <span className="text-sm font-medium text-[#4B5563]">
                {partner.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
