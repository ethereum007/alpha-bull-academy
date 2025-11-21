import { TrendingUp, Users, Award, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: TrendingUp, label: "Years Experience", value: "10+" },
  { icon: Users, label: "Students", value: "3000+" },
  { icon: Award, label: "Success Rate", value: "98%" },
];

const benefits = [
  {
    icon: Target,
    title: "Market Expertise",
    description: "Over 10 years of experience trading in Indian markets with proven track record"
  },
  {
    icon: Users,
    title: "Personal Mentorship",
    description: "Individual attention and guidance from experienced traders"
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Industry-recognized certifications upon course completion"
  },
  {
    icon: TrendingUp,
    title: "Practical Approach",
    description: "Real market scenarios and live trading sessions for hands-on learning"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose AlphaBull?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            AlphaBull Trading Academy is dedicated to empowering individuals with the knowledge and skills needed to succeed in Indian stock markets. Our comprehensive courses are designed by professional traders who have navigated the markets successfully for over a decade.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe in practical, hands-on learning combined with strong theoretical foundations. Our students don't just learn strategies—they learn to think like professional traders, manage risk effectively, and build sustainable trading careers.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* About Kiran */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4">Meet Your Instructor</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kiran is a trader for over a decade in US & Indian markets having trained more than 3000+ students. Kiran is an alum of Columbia University and has worked at Wall Street as well. With 13+ proven trading strategies and a 98% success rate, Kiran brings world-class expertise to help you master the markets.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
