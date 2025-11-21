export const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-bold text-2xl mb-2">
              Alpha<span className="text-accent">Bull</span>
            </h3>
            <p className="text-sm text-primary-foreground/70">Professional Trading Education</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} AlphaBull Trading Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
