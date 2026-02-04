import { lazy, Suspense } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemsSolutions } from "@/components/ProblemsSolutions";
import { Footer } from "@/components/Footer";

// Lazy load below-the-fold components for better performance
const About = lazy(() =>
  import("@/components/About").then((m) => ({ default: m.About }))
);
const Courses = lazy(() =>
  import("@/components/Courses").then((m) => ({ default: m.Courses }))
);
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
  <div className="section-padding flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ProblemsSolutions />
        <Suspense fallback={<SectionLoader />}>
          <Courses />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Courses />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
