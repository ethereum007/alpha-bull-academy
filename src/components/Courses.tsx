import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Video, ArrowRight } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "Beginner Trading Course",
    description: "Basics of markets, charts, and trading psychology.",
    features: [
      "Understanding market structure",
      "Reading candlestick patterns",
      "Risk management fundamentals",
      "Trading psychology basics",
    ],
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Price Action Mastery",
    description: "CPR, EMA, support/resistance, and breakout setups.",
    features: [
      "Advanced price action techniques",
      "CPR strategy implementation",
      "EMA crossover strategies",
      "Breakout and breakdown patterns",
    ],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Video,
    title: "Live Market Mentorship",
    description: "Daily recap, homework, and trade breakdowns.",
    features: [
      "Live trading sessions",
      "Real-time market analysis",
      "Personalized feedback",
      "Community support",
    ],
    color: "bg-success/10 text-success",
  },
];

export const Courses = () => {
  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">Our Courses</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Choose Your Learning Path
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured courses designed to take you from beginner to confident trader
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full bg-card border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 group">
                <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {course.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
