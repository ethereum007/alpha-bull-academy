import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { TradingChart } from "./TradingChart";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[160px] bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Trading Chart Background */}
      <TradingChart />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Chart-like background decoration */}
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 opacity-10">
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <motion.path
              d="M 0 150 Q 100 50 200 100 T 400 100"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium border border-accent/20">
              <TrendingUp className="w-4 h-4" />
              India's Premier Trading Academy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Best <span className="text-primary">Stock Market Training</span> Institute in Hyderabad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Looking for the best share market classes near you? AlphaBull is Hyderabad's #1 stock market training academy. Learn technical analysis, options trading & price action from expert mentor Kiran Dutta. 3000+ successful traders trained.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" onClick={() => scrollToSection("courses")} className="text-lg px-8">
              Explore Courses
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="text-lg px-8">
              Book Free Consultation
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3000+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-success mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
