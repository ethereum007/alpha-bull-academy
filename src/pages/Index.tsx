import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBanner />
      <Navigation />
      <main>
        <Hero />
        <TrustBadges />
        <About />
        <Courses />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
