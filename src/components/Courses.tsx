import { BookOpen, TrendingUp, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const courses = [
  {
    icon: TrendingUp,
    title: "Price Action Mastery",
    level: "Advanced",
    duration: "5 Months",
    description: "Master price action trading with CPR, EMA, support/resistance, breakout setups, and advanced chart pattern analysis. Complete hands-on training for serious traders.",
    price: "₹24,999",
    enrollLink: "https://wa.me/919032999466",
    color: "bg-green-500/10",
  },
  {
    icon: BookOpen,
    title: "Basics of Stock Market",
    level: "Beginner",
    duration: "4 Weeks",
    description: "Perfect for beginners who want to start their trading journey. Learn fundamental and technical analysis, market structure, and essential trading concepts.",
    price: "₹6,999",
    enrollLink: "https://rzp.io/rzp/7UZGE0Dg",
    color: "bg-blue-500/10",
  },
  {
    icon: Target,
    title: "Options & Derivatives Mastery",
    level: "Advanced",
    duration: "4 Weeks",
    description: "Master derivatives trading with advanced options strategies, futures trading, and hedging techniques. For serious traders ready to go professional.",
    price: "₹14,999",
    enrollLink: "https://wa.me/919032999466",
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
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            📍 Share Market Classes Near Me - Hyderabad
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Best Share Market Classes in Hyderabad</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join 3000+ successful traders from Ameerpet, Madhapur, Gachibowli, HITEC City & across Hyderabad. Top-rated share market training with practical strategies & lifetime mentorship support. Online & offline classes available.
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
