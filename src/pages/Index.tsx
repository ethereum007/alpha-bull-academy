import { lazy, Suspense } from "react";
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
  return (
    <div className="min-h-screen bg-white">
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
