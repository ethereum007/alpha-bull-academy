import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

// Placeholder testimonials - will be updated with real content
const testimonials = [
  {
    name: "Coming Soon",
    role: "Student",
    image: "",
    rating: 5,
    text: "Testimonials will be added here soon.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <span className="text-sm font-semibold text-accent">Student Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Students Say
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real traders who've transformed their trading journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:shadow-[var(--shadow-card)] transition-all duration-300">
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
