import { motion } from "framer-motion";
import { TrendingUp, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Q3ResultsScroller = () => {
  return (
    <Link 
      to="/q3-results"
      className="fixed top-[200px] left-0 right-0 z-30 block bg-primary/10 border-b border-primary/30 py-3 overflow-hidden cursor-pointer hover:bg-primary/20 transition-colors"
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
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="font-bold text-primary">Q3 Results FY26</span>
          <span className="text-muted-foreground">—</span>
          <span className="font-medium text-foreground">Tata Elxsi & More</span>
          <span className="text-muted-foreground">|</span>
          <span className="text-primary font-semibold">View Results</span>
          <ChevronRight className="w-4 h-4 text-primary" />
        </motion.div>
      </div>
    </Link>
  );
};
