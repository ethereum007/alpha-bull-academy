import { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Courses", action: () => scrollToSection("courses") },
    { label: "Learn", href: "/blog" },
    { label: "Success Stories", action: () => scrollToSection("testimonials") },
    { label: "Pricing", action: () => scrollToSection("courses") },
    { label: "Blog", href: "/blog" },
  ];

  const isActiveLink = (href?: string) => {
    if (!href) return false;
    return location.pathname === href;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSticky
            ? "bg-white shadow-md"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
              <span className="text-xl lg:text-2xl font-bold text-primary">
                Trade With <span className="text-secondary">AlphaBull</span>
              </span>
            </Link>

            {/* Desktop Center Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-base font-medium transition-all duration-300 relative
                      ${
                        isActiveLink(link.href)
                          ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                          : "text-[#4B5563] hover:text-primary"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className="text-base font-medium text-[#4B5563] hover:text-primary transition-all duration-300"
                  >
                    {link.label}
                  </button>
                )
              )}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-6">
              <button className="text-base font-medium text-[#4B5563] hover:text-primary transition-all duration-300">
                Login
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium text-base px-6 py-3 h-auto rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Free Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#4B5563] hover:text-primary transition-colors"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-[#4B5563] hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col px-6">
          {navLinks.map((link) =>
            link.href ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-4 text-lg font-medium border-b border-gray-100 transition-colors ${
                  isActiveLink(link.href)
                    ? "text-primary"
                    : "text-[#4B5563] hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={link.action}
                className="py-4 text-left text-lg font-medium text-[#4B5563] hover:text-primary border-b border-gray-100 transition-colors"
              >
                {link.label}
              </button>
            )
          )}

          {/* Login Link */}
          <button className="py-4 text-left text-lg font-medium text-[#4B5563] hover:text-primary border-b border-gray-100 transition-colors">
            Login
          </button>
        </div>

        {/* Mobile CTA Button */}
        <div className="absolute bottom-8 left-6 right-6">
          <Button
            onClick={() => {
              scrollToSection("contact");
              setIsOpen(false);
            }}
            className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium text-base py-4 h-auto rounded-lg transition-all duration-300"
          >
            Book Free Demo
          </Button>
        </div>
      </div>
    </>
  );
};
