import { motion } from "framer-motion";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AnnouncementBanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white py-3 px-4 relative overflow-hidden"
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Floating sparkles animation */}
      <motion.div
        className="absolute top-1/2 left-10 -translate-y-1/2"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 -translate-y-1/2"
        animate={{
          y: [0, -10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Sparkles className="w-4 h-4" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
          {/* Icon */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2"
          >
            <Calendar className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-bold text-sm md:text-base">NEW BATCH ALERT!</span>
          </motion.div>

          {/* Main Text */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-sm md:text-base font-medium">
              Classes Starting from{" "}
              <span className="font-bold underline decoration-2 underline-offset-2">
                January 24th, 2026
              </span>
            </span>
            <motion.span
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
            >
              Limited Seats Available
            </motion.span>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="sm"
            variant="secondary"
            className="bg-white text-green-700 hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all group"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
