import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Rahul M.",
    location: "Hyderabad",
    rating: 5,
    text: "I joined with zero knowledge. Kiran sir's way of explaining price action and psychology changed everything for me. I now take only high-probability trades and finally stopped over-trading. Best decision ever!",
    title: "Beginner Turned Consistent Trader"
  },
  {
    name: "Sneha K.",
    location: "Bangalore",
    rating: 5,
    text: "The CPR + EMA strategies taught in this course are simple but extremely powerful. I was able to apply them from day one. My accuracy improved from 40% to 72% within a month.",
    title: "Clear & Actionable Strategies"
  },
  {
    name: "Vikas P.",
    location: "Pune",
    rating: 5,
    text: "What sets this course apart is the live market guidance. Kiran explains his trades in real time, which helped me understand how professionals think before taking a position.",
    title: "Real Market Mentorship"
  },
  {
    name: "Anand B.",
    location: "Chennai",
    rating: 5,
    text: "Being a working professional, I needed a structured learning method. The recorded videos + weekend sessions helped me learn at my own pace. Highly recommended for anyone with a busy schedule.",
    title: "Perfect for Working Professionals"
  },
  {
    name: "Himanshi R.",
    location: "Delhi",
    rating: 5,
    text: "I've taken many trading courses, but this one finally taught me discipline. Risk management and position sizing changed my entire trading approach. My losses have reduced drastically.",
    title: "Psychology & Discipline Focus"
  },
  {
    name: "Rohit S.",
    location: "Vizag",
    rating: 5,
    text: "Within just 2 weeks, I started spotting breakout patterns and trend reversals confidently. The support from the community group is amazing. Truly a complete learning experience.",
    title: "Immediate Results"
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-7xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full bg-card border-border hover:shadow-[var(--shadow-card)] hover:scale-[1.02] transition-all duration-300 group">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="mb-4">
                        <Quote className="w-10 h-10 text-accent/30 group-hover:text-accent/50 transition-colors" />
                      </div>
                      
                      <div className="mb-3">
                        <h3 className="font-bold text-lg text-foreground mb-1">
                          {testimonial.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                        "{testimonial.text}"
                      </p>
                      
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 fill-accent text-accent animate-fade-in" 
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center ring-2 ring-primary/20">
                          <span className="text-lg font-bold text-primary">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};
