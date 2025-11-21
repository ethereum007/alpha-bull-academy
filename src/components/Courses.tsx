import { BookOpen, TrendingUp, Target, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const courses = [
  {
    icon: BookOpen,
    title: "Stock Market Fundamentals",
    level: "Basics",
    duration: "8 Weeks",
    description: "Perfect for beginners who want to start their trading journey. Learn the essential concepts, market structure, and fundamental analysis techniques.",
    price: "₹6,999",
    enrollLink: "https://rzp.io/rzp/7UZGE0Dg",
    features: [
      "Live interactive sessions",
      "Recorded video lectures",
      "Trading simulator access"
    ],
    color: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    title: "Technical Analysis Mastery",
    level: "Intermediate",
    duration: "12 Weeks",
    description: "Deep dive into technical analysis, chart patterns, and advanced trading strategies. Price Action Mastery – CPR, EMA, support/resistance, and breakout setups.",
    price: "₹29,999",
    enrollLink: "https://rzp.io/rzp/yB1bafTe",
    features: [
      "Live market analysis sessions",
      "Advanced charting tools access",
      "Weekly strategy webinars"
    ],
    color: "bg-green-500/10",
  },
  {
    icon: Target,
    title: "Options & Derivatives Mastery",
    level: "Advanced",
    duration: "16 Weeks",
    description: "Master derivatives trading with advanced options strategies, futures trading, and hedging techniques. For serious traders ready to go professional.",
    price: "₹14,999",
    enrollLink: "https://wa.me/919032999466",
    features: [
      "Daily live market sessions",
      "Options strategy builder tool",
      "Advanced analytics dashboard"
    ],
    color: "bg-purple-500/10",
  },
];

export const Courses = () => {
  const whatsappLink = "https://wa.me/919032999466";

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured programs designed to take you from beginner to professional trader
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-105 group border-2">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{course.duration}</span>
                </div>

                <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <course.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow">
                  {course.description}
                </p>

                <div className="text-3xl font-bold text-primary mb-6">
                  {course.price}
                </div>

                <ul className="space-y-3 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1" 
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    Contact Us
                  </Button>
                  <Button 
                    className="flex-1"
                    onClick={() => window.open(course.enrollLink, '_blank')}
                  >
                    Enroll Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
