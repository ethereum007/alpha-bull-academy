import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the course timings and duration?",
    answer: "Our courses run for 8-16 weeks depending on the program. We offer flexible timings including weekday evening sessions (7-9 PM) and weekend batches (10 AM - 12 PM). All sessions are recorded and available for lifetime access."
  },
  {
    question: "Do I need any prior trading experience?",
    answer: "No prior experience is required for the Stock Market Fundamentals course. For Technical Analysis Mastery, basic market knowledge is recommended. The Options & Derivatives course is designed for those with intermediate trading knowledge."
  },
  {
    question: "What payment options are available?",
    answer: "We accept all major payment methods including UPI, credit/debit cards, net banking, and wallets. EMI options are available for courses above ₹10,000 through our payment partner Razorpay. Contact us on WhatsApp for custom payment plans."
  },
  {
    question: "Will I receive a certificate after completion?",
    answer: "Yes, upon successful completion of the course and passing the final assessment, you'll receive an industry-recognized certificate from AlphaBull Trading Academy that you can showcase on LinkedIn and your resume."
  },
  {
    question: "What support do I get after enrolling?",
    answer: "You get lifetime access to course materials, entry to our private trading community group, weekly live Q&A sessions, and ongoing mentor support via WhatsApp group."
  },
  {
    question: "Can I access courses on mobile?",
    answer: "Absolutely! All our course content is mobile-friendly. You can watch lectures, access charts, and participate in discussions from your smartphone or tablet anytime, anywhere."
  },
  {
    question: "Are there any hidden costs?",
    answer: "No hidden costs whatsoever. The course fee includes all study materials, tools access, certifications, and lifetime community membership. The only additional cost would be your personal trading capital when you start live trading."
  },
  {
    question: "When does the next batch start?",
    answer: "New batches start every month. Contact us on WhatsApp at +91 90329 99466 to know the exact start date of the upcoming batch or to reserve your spot."
  },
  {
    question: "Can I enroll in multiple courses together?",
    answer: "Yes! We offer bundle discounts when you enroll in multiple courses. Contact us directly for special package pricing and save up to 20% on course bundles."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <span className="text-sm font-semibold text-accent">Got Questions?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our courses and enrollment process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://web.whatsapp.com/send?phone=919032999466"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            Contact us on WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
