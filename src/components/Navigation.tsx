import { useState } from "react";
import { TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-[52px] left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <span className="text-2xl font-bold">
              Alpha<span className="text-primary">Bull</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("courses")} className="text-sm font-medium hover:text-primary transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">
              About
            </button>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </button>
            <a 
              href="https://t.me/alphabull_in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Join Our Community
            </a>
            <Button onClick={() => scrollToSection("contact")}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-left text-sm font-medium hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection("courses")} className="text-left text-sm font-medium hover:text-primary transition-colors">
                Courses
              </button>
              <button onClick={() => scrollToSection("about")} className="text-left text-sm font-medium hover:text-primary transition-colors">
                About
              </button>
              <Link to="/blog" className="text-left text-sm font-medium hover:text-primary transition-colors">
                Blog
              </Link>
              <button onClick={() => scrollToSection("testimonials")} className="text-left text-sm font-medium hover:text-primary transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left text-sm font-medium hover:text-primary transition-colors">
                Contact
              </button>
              <a 
                href="https://t.me/alphabull_in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-left text-sm font-medium hover:text-primary transition-colors"
              >
                Join Our Community
              </a>
              <Button onClick={() => scrollToSection("contact")} className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
