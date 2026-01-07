import { TrendingUp, FileText } from "lucide-react";

const updates = [
  {
    id: 1,
    text: "Samvardhana Motherson International has completed its joint venture with South Korea–based Egtronics as of January 7, 2026, following fulfillment of all conditions precedent. The JV will focus on designing and manufacturing clean-mobility vehicle electronics, with shareholding at 51% for Motherson and 49% for Egtronics.",
    date: "Jan 7, 2026",
  },
];

const orders = [
  {
    id: 1,
    text: "Akash Infra-Projects Ltd. received a ₹21.53 crore work order on January 7, 2026",
    date: "Jan 7, 2026",
  },
  {
    id: 2,
    text: "Aarvi Encon has bagged an order of INR 180 cr from a confidential company",
    date: "Jan 7, 2026",
  },
  {
    id: 3,
    text: "Refex bagged an order of 43.74 Crore from a large conglomerate",
    date: "Jan 7, 2026",
  },
  {
    id: 4,
    text: "DEV IT bagged an order of 96.00 lakhs from Ahmedabad Urban Development Authority (AUDA)",
    date: "Jan 7, 2026",
  },
  {
    id: 5,
    text: "PTC Industries bagged an order from ISRO",
    date: "Jan 7, 2026",
  },
];

export const LatestNews = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Latest News
          </h2>
          <p className="text-muted-foreground">
            Stay updated with market movements and corporate announcements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Updates Column - Scrolling */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Updates</h3>
            </div>
            <div className="h-48 overflow-hidden relative">
              <div className="animate-scroll-up space-y-4">
                {[...updates, ...updates].map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="p-4 rounded-lg bg-muted/50 border border-border/50"
                  >
                    <p className="text-foreground text-sm leading-relaxed">
                      {item.text}
                    </p>
                    <span className="text-xs text-muted-foreground mt-2 block">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Orders Column */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <FileText className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Orders</h3>
            </div>
            <div className="h-48 overflow-hidden relative">
              {orders.length > 0 ? (
                <div className="animate-scroll-up space-y-4">
                  {[...orders, ...orders].map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="p-4 rounded-lg bg-muted/50 border border-border/50"
                    >
                      <p className="text-foreground text-sm leading-relaxed">
                        {item.text}
                      </p>
                      <span className="text-xs text-muted-foreground mt-2 block">{item.date}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                  No orders yet
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};