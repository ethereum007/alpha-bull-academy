import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
  {
    name: "Stock Market Fundamentals",
    price: "₹6,999",
    duration: "8 Weeks",
    level: "Beginner",
    enrollLink: "https://rzp.io/rzp/7UZGE0Dg",
    features: {
      "Live Sessions": true,
      "Recorded Videos": true,
      "Trading Simulator": true,
      "Chart Analysis Tools": false,
      "Live Market Trading": false,
      "Advanced Strategies": false,
      "Options Trading": false,
      "Derivatives": false,
      "1-on-1 Mentorship": false,
      "Community Access": true,
      "Certificate": true,
      "Lifetime Access": true,
    }
  },
  {
    name: "Technical Analysis Mastery",
    price: "₹9,999",
    duration: "12 Weeks",
    level: "Intermediate",
    enrollLink: "https://rzp.io/rzp/yB1bafTe",
    popular: true,
    features: {
      "Live Sessions": true,
      "Recorded Videos": true,
      "Trading Simulator": true,
      "Chart Analysis Tools": true,
      "Live Market Trading": true,
      "Advanced Strategies": true,
      "Options Trading": false,
      "Derivatives": false,
      "1-on-1 Mentorship": true,
      "Community Access": true,
      "Certificate": true,
      "Lifetime Access": true,
    }
  },
  {
    name: "Options & Derivatives Mastery",
    price: "₹14,999",
    duration: "16 Weeks",
    level: "Advanced",
    enrollLink: "https://wa.me/919032999466",
    features: {
      "Live Sessions": true,
      "Recorded Videos": true,
      "Trading Simulator": true,
      "Chart Analysis Tools": true,
      "Live Market Trading": true,
      "Advanced Strategies": true,
      "Options Trading": true,
      "Derivatives": true,
      "1-on-1 Mentorship": true,
      "Community Access": true,
      "Certificate": true,
      "Lifetime Access": true,
    }
  },
];

const allFeatures = [
  "Live Sessions",
  "Recorded Videos",
  "Trading Simulator",
  "Chart Analysis Tools",
  "Live Market Trading",
  "Advanced Strategies",
  "Options Trading",
  "Derivatives",
  "1-on-1 Mentorship",
  "Community Access",
  "Certificate",
  "Lifetime Access",
];

export const CourseComparison = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-semibold text-primary">Compare Courses</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Choose the Right Course for You
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare features across all three courses to find your perfect match
          </p>
        </motion.div>

        {/* Desktop Table View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:block overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left p-4 text-muted-foreground font-semibold">Features</th>
                {courses.map((course) => (
                  <th key={course.name} className="p-4">
                    <div className="text-center relative">
                      {course.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-bold">
                          MOST POPULAR
                        </div>
                      )}
                      <div className="font-bold text-lg mb-1">{course.name}</div>
                      <div className="text-sm text-muted-foreground mb-1">{course.level}</div>
                      <div className="text-2xl font-bold text-primary mb-1">{course.price}</div>
                      <div className="text-sm text-muted-foreground">{course.duration}</div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allFeatures.map((feature, index) => (
                <tr key={feature} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                  <td className="p-4 font-medium">{feature}</td>
                  {courses.map((course) => (
                    <td key={`${course.name}-${feature}`} className="p-4 text-center">
                      {course.features[feature as keyof typeof course.features] ? (
                        <Check className="w-5 h-5 text-success mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t-2 border-border">
                <td className="p-4"></td>
                {courses.map((course) => (
                  <td key={`${course.name}-cta`} className="p-4 text-center">
                    <Button
                      className="w-full"
                      onClick={() => window.open(course.enrollLink, '_blank')}
                    >
                      Enroll Now
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`p-6 relative ${course.popular ? 'border-2 border-accent' : ''}`}>
                {course.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="font-bold text-xl mb-2">{course.name}</div>
                  <div className="text-sm text-muted-foreground mb-2">{course.level}</div>
                  <div className="text-3xl font-bold text-primary mb-1">{course.price}</div>
                  <div className="text-sm text-muted-foreground">{course.duration}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {allFeatures.map((feature) => (
                    <div key={feature} className="flex items-center justify-between">
                      <span className="text-sm">{feature}</span>
                      {course.features[feature as keyof typeof course.features] ? (
                        <Check className="w-5 h-5 text-success" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30" />
                      )}
                    </div>
                  ))}
                </div>
                
                <Button
                  className="w-full"
                  onClick={() => window.open(course.enrollLink, '_blank')}
                >
                  Enroll Now
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
