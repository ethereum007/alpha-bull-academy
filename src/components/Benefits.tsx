import { motion } from "framer-motion";
import { Lightbulb, BarChart3, Target, Users } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Easy-to-understand lessons",
    description: "Complex concepts broken down into simple, digestible modules that anyone can follow.",
  },
  {
    icon: BarChart3,
    title: "Live examples and market practice",
    description: "Real-time trading scenarios and hands-on practice to build confidence.",
  },
  {
    icon: Target,
    title: "Practical trading strategies",
    description: "Proven methods and systems you can apply immediately to your trading.",
  },
  {
    icon: Users,
    title: "Supportive learning community",
    description: "Connect with fellow traders, share insights, and grow together.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-success/10 border border-success/30 mb-6">
            <span className="text-sm font-semibold text-success">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Learn With Us?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed in your trading journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
