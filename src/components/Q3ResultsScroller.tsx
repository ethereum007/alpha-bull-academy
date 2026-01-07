import { motion } from "framer-motion";
import { Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Q3ResultsScroller = () => {
  return (
    <Link 
      to="/q3-results"
      className="block bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border-b border-accent/20 py-2 overflow-hidden cursor-pointer hover:from-accent/20 hover:via-primary/20 hover:to-accent/20 transition-colors"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="flex items-center gap-3 text-sm"
          animate={{ x: [20, -20, 20] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Clock className="w-4 h-4 text-primary" />
          <span className="font-semibold text-foreground">Q3 Results FY25</span>
          <span className="text-muted-foreground">—</span>
          <span className="text-accent-foreground">Coming Soon</span>
          <ChevronRight className="w-4 h-4 text-primary" />
        </motion.div>
      </div>
    </Link>
  );
};
