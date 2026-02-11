import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemsSolutions } from "@/components/ProblemsSolutions";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Courses } from "@/components/Courses";
import { FreeResources } from "@/components/FreeResources";
import { Founder } from "@/components/Founder";
import { FinalCTA } from "@/components/FinalCTA";
import { FloatingElements } from "@/components/FloatingElements";
import { Footer } from "@/components/Footer";

// Lazy load below-the-fold components for better performance
const Testimonials = lazy(() =>
  import("@/components/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const FAQ = lazy(() =>
  import("@/components/FAQ").then((m) => ({ default: m.FAQ }))
);
const Contact = lazy(() =>
  import("@/components/Contact").then((m) => ({ default: m.Contact }))
);

const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="animate-pulse text-[#6B7280]">Loading...</div>
  </div>
);

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navHeight = 80;
          const pos = element.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }
      }, 300);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Trade With AlphaBull | Best Online Trading Course India | Price Action Mastery</title>
        <meta
          name="description"
          content="Master price action trading with India's most trusted online course. 10+ years US & Indian market experience, 2000+ traders trained, 90% success rate. Enroll now!"
        />
        <link rel="canonical" href="https://tradewithalphabull.com/" />
      </Helmet>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ProblemsSolutions />
        <WhyChooseUs />
        <HowItWorks />
        <Courses />
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <FreeResources />
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Founder />
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
        <FinalCTA />
      </main>
      <FloatingElements />
      <Footer />
    </div>
  );
};

export default Index;
