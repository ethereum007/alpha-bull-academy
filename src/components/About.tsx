import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Target } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "10+" },
  { icon: Users, label: "Students Trained", value: "3000+" },
  { icon: TrendingUp, label: "Success Rate", value: "98%" },
  { icon: Target, label: "Trading Strategies", value: "13+" },
];

export const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <span className="text-sm font-semibold text-accent">About Your Instructor</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Meet Kiran
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Kiran is a trader for over a decade in US & Indian markets having trained more than 3000+ students.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kiran is an alum of Columbia University and has worked at Wall Street as well.
            </p>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
