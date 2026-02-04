import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    quote:
      "After losing ₹2 lakhs following random tips, I found AlphaBull. The price action methodology completely changed how I trade. Now I'm consistently profitable for 8 months straight.",
    author: "Rajesh Kumar",
    role: "Software Engineer, Bangalore",
    result: "Result: ₹8L profit in 8 months",
  },
  {
    rating: 5,
    quote:
      "I tried 3 other courses before AlphaBull. None taught risk management properly. Skill Sir's approach is practical, not theoretical. Best decision I made for my trading career.",
    author: "Priya Sharma",
    role: "CA Student, Mumbai",
    result: "Result: Quit job, full-time trader",
  },
  {
    rating: 5,
    quote:
      "The live market sessions are gold. You see exactly how Skill Sir analyzes charts in real-time. No BS, no fake screenshots. Pure honest trading education.",
    author: "Amit Patel",
    role: "Business Owner, Ahmedabad",
    result: "Result: 90% win rate last quarter",
  },
  {
    rating: 5,
    quote:
      "Started with zero knowledge. Now I trade part-time and make more than my salary. The community support is amazing—always someone to discuss setups with.",
    author: "Sneha Reddy",
    role: "Marketing Manager, Hyderabad",
    result: "Result: ₹50K monthly from trading",
  },
  {
    rating: 5,
    quote:
      "Tried everything—indicators, algos, paid signals. Nothing worked. Price action is the only thing that makes sense. Thank you AlphaBull for being honest.",
    author: "Vikram Singh",
    role: "Doctor, Delhi",
    result: "Result: Passive income stream",
  },
  {
    rating: 5,
    quote:
      "The mentorship is invaluable. Skill Sir personally reviews my trades and tells me exactly where I went wrong. Can't put a price on that kind of feedback.",
    author: "Arjun Mehta",
    role: "Entrepreneur, Pune",
    result: "Result: Consistent 15% monthly returns",
  },
];

export const Testimonials = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate Review schema for SEO
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonials.map((testimonial, index) => ({
      "@type": "Review",
      position: index + 1,
      author: {
        "@type": "Person",
        name: testimonial.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: 5,
      },
      reviewBody: testimonial.quote,
      itemReviewed: {
        "@type": "EducationalOrganization",
        name: "AlphaBull Trading Academy",
      },
    })),
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-[#F9FAFB] py-[60px] md:py-[100px]"
    >
      {/* Add Review Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#F59E0B] mb-4">
            Success Stories
          </p>
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1F2937] mb-4">
            Real Traders. Real Results.
          </h2>
          <p className="text-lg text-[#6B7280]">
            Don't just take our word for it. Here's what our students say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] cursor-default"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base text-[#374151] leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-3 mb-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                {/* Author Info */}
                <div>
                  <p className="text-[15px] font-semibold text-[#1F2937]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                </div>
              </div>

              {/* Result Badge */}
              <span className="inline-block bg-[#D1FAE5] text-[#065F46] px-4 py-2 rounded-md text-sm font-semibold">
                {testimonial.result}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-base text-[#6B7280] mb-6">
            Ready to write your own success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => scrollToSection("testimonials")}
              className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#DBEAFE] font-semibold px-6 py-3 h-auto rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              View All Success Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-6 py-3 h-auto rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 shadow-[0_4px_12px_rgba(245,158,11,0.3)]"
            >
              Book Free Demo Class
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
