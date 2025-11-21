import { motion } from "framer-motion";
import { Award, Shield, Users, TrendingUp, BookOpen, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const badges = [
  {
    icon: Shield,
    title: "NISM Certified",
    description: "SEBI Registered Research Analyst certified instructor",
    color: "text-blue-500"
  },
  {
    icon: Award,
    title: "Columbia University",
    description: "Alum with Wall Street experience",
    color: "text-purple-500"
  },
  {
    icon: Users,
    title: "3000+ Students",
    description: "Trained across India with proven results",
    color: "text-green-500"
  },
  {
    icon: TrendingUp,
    title: "98% Success Rate",
    description: "Students achieving profitable trading",
    color: "text-orange-500"
  },
  {
    icon: BookOpen,
    title: "13+ Strategies",
    description: "Proven trading strategies taught",
    color: "text-indigo-500"
  },
  {
    icon: Star,
    title: "10+ Years",
    description: "Trading experience in US & Indian markets",
    color: "text-yellow-500"
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Why Trust AlphaBull?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Certified, experienced, and committed to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-4 md:p-6 h-full text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <badge.icon className={`w-6 h-6 md:w-7 md:h-7 ${badge.color}`} />
                  </div>
                </div>
                <h3 className="font-bold text-sm md:text-base mb-1 md:mb-2 text-foreground">
                  {badge.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                  {badge.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Trusted by thousands of traders • Industry-recognized certifications • Proven track record
          </p>
        </motion.div>
      </div>
    </section>
  );
};
