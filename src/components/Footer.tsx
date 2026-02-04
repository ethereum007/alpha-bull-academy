import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Instagram, Send } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", action: () => scrollToSection("home") },
    { label: "About", href: "/about" },
    { label: "Courses", action: () => scrollToSection("courses") },
    { label: "Testimonials", action: () => scrollToSection("testimonials") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  const courses = [
    { label: "Stock Market Fundamentals", href: "https://rzp.io/rzp/7UZGE0Dg" },
    { label: "Technical Analysis Mastery", href: "https://rzp.io/rzp/yB1bafTe" },
    { label: "Options & Derivatives", href: "https://wa.me/919032999466" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/kirandutta", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/alphabull_club/", label: "Instagram" },
    { icon: Send, href: "https://t.me/alpha_bull", label: "Telegram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Trade With <span className="text-secondary">AlphaBull</span>
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Empowering traders with practical, market-focused education. Join
              thousands who've transformed their trading journey with us.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-smooth"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={link.action}
                      className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-smooth"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-smooth"
                  >
                    {course.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919032999466"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-smooth"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  +91 90329 99466
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@alphabull.club"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-smooth"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  contact@alphabull.club
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Hyderabad, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-primary-foreground/70">
              © {new Date().getFullYear()} Trade With AlphaBull. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
