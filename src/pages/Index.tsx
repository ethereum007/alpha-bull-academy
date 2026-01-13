import { lazy, Suspense } from "react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { MarketTicker } from "@/components/MarketTicker";
// import { EarningsScroller } from "@/components/EarningsScroller";
import { Q3ResultsScroller } from "@/components/Q3ResultsScroller";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { LatestNews } from "@/components/LatestNews";
import { Footer } from "@/components/Footer";
// Lazy load below-the-fold components for better performance
const About = lazy(() => import("@/components/About").then(m => ({ default: m.About })));
// const Courses = lazy(() => import("@/components/Courses").then(m => ({ default: m.Courses }))); // Hidden for now
const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/Contact").then(m => ({ default: m.Contact })));

const SectionLoader = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Navigation />
      <MarketTicker />
      {/* <EarningsScroller /> - Hidden until Q3 FY25 results are released */}
      <Q3ResultsScroller />
      <main>
        <Hero />
        <TrustBadges />
        <LatestNews />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        {/* <Suspense fallback={<SectionLoader />}>
          <Courses />
        </Suspense> - Hidden for now */}
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
