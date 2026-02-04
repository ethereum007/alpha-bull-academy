import { Button } from "@/components/ui/button";
import { TrendingUp, Play, CheckCircle } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Live Market Training",
    "Price Action Strategies",
    "Lifetime Access",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-muted"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-secondary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            India's Trusted Trading Academy
          </div>

          {/* Headline */}
          <h1 className="text-foreground mb-6 leading-tight">
            Master <span className="text-primary">Price Action Trading</span> &
            Build Your Financial Freedom
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Learn proven trading strategies from market experts. Join 3000+
            successful traders who transformed their financial future with our
            practical, live-market focused education.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm font-medium text-foreground/80"
              >
                <CheckCircle className="w-5 h-5 text-success" />
                {benefit}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-8 h-14"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 h-14 gap-2"
              onClick={() => window.open("https://wa.me/919032999466", "_blank")}
            >
              <Play className="w-5 h-5" />
              Watch Free Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-4">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-1">
                3000+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Students Trained
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl md:text-5xl font-bold text-success mb-1">
                98%
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Success Rate
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-1">
                5+
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
