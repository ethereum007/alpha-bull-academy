"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { studentReviews } from "@/lib/reviews";

export const Testimonials = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-[#F9FAFB] py-[60px] md:py-[100px]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[1.5px] text-[#F59E0B] mb-4">
            Success Stories
          </p>
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1F2937] mb-4">
            Student Feedback from AlphaBull Learners
          </h2>
          <p className="text-lg text-[#6B7280]">
            Real learning outcomes from students who joined our online trading courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentReviews.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] cursor-default"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>

              <p className="text-base text-[#374151] leading-relaxed italic mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[#1F2937]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                </div>
              </div>

              <span className="inline-block bg-[#D1FAE5] text-[#065F46] px-4 py-2 rounded-md text-sm font-semibold">
                {testimonial.result}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-base text-[#6B7280] mb-6">
            Ready to write your own success story?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/student-reviews">
              <Button
                variant="outline"
                className="border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#DBEAFE] font-semibold px-6 py-3 h-auto rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                View All Success Stories
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
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
