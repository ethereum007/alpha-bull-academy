import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock } from "lucide-react";

const Q3Results = () => {
  return (
    <>
      <Helmet>
        <title>Q3 Results FY25 | AlphaBull</title>
        <meta name="description" content="Q3 FY25 earnings results coming soon. Stay tuned for comprehensive analysis of quarterly performance." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Q3 Results FY25
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              Coming Soon
            </p>
            <p className="text-muted-foreground max-w-lg">
              We're preparing comprehensive analysis of Q3 FY25 earnings. Check back soon for detailed results and insights.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Q3Results;
