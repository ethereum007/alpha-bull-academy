import { ArrowRight, TrendingUp, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const updates = [
  {
    id: 1,
    title: "Q3 Results: TCS reports strong revenue growth",
    date: "Jan 7, 2026",
  },
  {
    id: 2,
    title: "Infosys announces dividend of ₹20 per share",
    date: "Jan 6, 2026",
  },
  {
    id: 3,
    title: "HDFC Bank merger integration complete",
    date: "Jan 5, 2026",
  },
];

const orders = [
  {
    id: 1,
    title: "L&T bags ₹5,000 Cr infrastructure order",
    date: "Jan 7, 2026",
  },
  {
    id: 2,
    title: "Tata Power wins solar project worth ₹2,500 Cr",
    date: "Jan 6, 2026",
  },
  {
    id: 3,
    title: "Bharat Electronics secures defense contract",
    date: "Jan 5, 2026",
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
          {/* Updates Column */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Updates</h3>
            </div>
            <div className="space-y-4">
              {updates.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.title}
                    </p>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Orders Column */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <FileText className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Orders</h3>
            </div>
            <div className="space-y-4">
              {orders.map((item) => (
                <div
                  key={item.id}
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {item.title}
                    </p>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
