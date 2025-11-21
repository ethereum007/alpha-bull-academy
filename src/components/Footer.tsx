import { TrendingUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Alpha Bull Trading School</h3>
              <p className="text-sm text-white/70">Professional Trading Education</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Alpha Bull Trading School. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
