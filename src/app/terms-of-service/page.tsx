import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of AlphaBull Trading Academy's website, courses, and community. Educational content only — not investment advice.",
  alternates: { canonical: "https://alphabullacademy.com/terms-of-service" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "27 April 2026";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl py-12">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Terms of Service</h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-foreground prose-p:leading-relaxed prose-li:my-1 prose-li:leading-relaxed prose-strong:text-foreground prose-a:text-primary">
            <p>
              Welcome to AlphaBull Trading Academy. These Terms of Service
              (&quot;<strong>Terms</strong>&quot;) govern your access to and use
              of alphabullacademy.com (the &quot;<strong>Site</strong>&quot;)
              and any courses, communities, communications, or content provided
              by AlphaBull Trading Academy (&quot;<strong>AlphaBull</strong>,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By using the
              Site or enrolling in a course, you agree to these Terms. Please
              read them carefully.
            </p>

            <h2>1. Educational purpose only — important disclaimer</h2>
            <p>
              <strong>
                AlphaBull is a stock market education business. We do not
                provide investment advice, do not deal in securities for
                clients, do not manage client funds, and do not guarantee any
                financial outcome. Nothing on the Site or in our courses
                constitutes a recommendation to buy, sell, or hold any security.
              </strong>
            </p>
            <p>
              All educational content is provided for informational purposes
              only. Trading and investing in securities carry significant risk,
              including the risk of total loss. Past performance is not
              indicative of future results. You are solely responsible for any
              trading decisions you make. Consult a SEBI-registered investment
              adviser for personalised advice.
            </p>
            <p>
              Our founder Kiran Dutta is NISM SEBI Research Analyst certified;
              this certification permits research-based educational commentary
              and does not authorise personalised investment advice.
            </p>

            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old and capable of entering into a
              legally binding contract under Indian law to use the Site or
              enrol in a course. By using the Site, you represent that you meet
              this requirement.
            </p>

            <h2>3. Course enrolment, access, and pricing</h2>
            <ul>
              <li>
                Course fees are listed on the Site in Indian Rupees (INR) and
                are inclusive of applicable taxes unless stated otherwise.
              </li>
              <li>
                Payment is processed by Razorpay. By enrolling, you also accept
                Razorpay&rsquo;s terms.
              </li>
              <li>
                Enrolment is personal and non-transferable. You may not share
                course access, recordings, or community access with any other
                person.
              </li>
              <li>
                We may run live online cohorts, recorded modules, classroom
                batches, or hybrid formats. Specific course pages describe what
                is included.
              </li>
              <li>
                Class schedules, instructors, and content may be modified for
                operational reasons; material changes will be communicated
                in advance.
              </li>
            </ul>

            <h2>4. Refund policy</h2>
            <p>
              Refunds are governed by our separate{" "}
              <Link href="/refund-policy">Refund Policy</Link>, which forms part
              of these Terms.
            </p>

            <h2>5. Intellectual property</h2>
            <p>
              All course materials — including videos, slides, written content,
              templates, charts, and proprietary methodologies (such as the
              AlphaBull price-action framework) — are owned by AlphaBull or
              licensed to us. You receive a personal, non-exclusive,
              non-transferable, revocable licence to access and use them solely
              for your individual learning.
            </p>
            <p>
              You may <strong>not</strong>:
            </p>
            <ul>
              <li>
                Record, screenshot for redistribution, copy, share, sell, or
                publish any course material.
              </li>
              <li>
                Train any machine learning model on our content without our
                written consent.
              </li>
              <li>
                Reverse engineer, scrape, or systematically extract content from
                the Site.
              </li>
            </ul>
            <p>
              Violation of these intellectual-property terms may result in
              immediate termination of access without refund and legal action.
            </p>

            <h2>6. User conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use AlphaBull&rsquo;s community channels (Telegram, WhatsApp,
                etc.) to solicit clients, promote third-party paid services,
                share &quot;tips,&quot; or run schemes.
              </li>
              <li>
                Harass, abuse, or threaten other students, instructors, or
                staff.
              </li>
              <li>
                Misrepresent your identity or use the Site for any illegal
                purpose.
              </li>
              <li>
                Attempt to gain unauthorised access to any part of our systems.
              </li>
            </ul>
            <p>
              We reserve the right to remove any user from any AlphaBull channel
              for violating these rules, with no refund.
            </p>

            <h2>7. Third-party links and services</h2>
            <p>
              The Site contains links to third-party services (Razorpay,
              WhatsApp, Telegram, Instagram, LinkedIn, Google, etc.). We are not
              responsible for the content, terms, or privacy practices of those
              third parties.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by Indian law, AlphaBull and its
              founders, employees, and contractors shall not be liable for any
              indirect, incidental, consequential, special, or exemplary
              damages, including loss of profits, trading losses, lost data, or
              business interruption, arising out of or related to your use of
              the Site or any course.
            </p>
            <p>
              Our total cumulative liability for any claim arising out of or
              related to these Terms or any course shall not exceed the amount
              you paid to AlphaBull in the 12 months preceding the claim.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold AlphaBull harmless from any
              claim, loss, or expense (including reasonable legal fees)
              arising from your breach of these Terms, your violation of any
              law, or your infringement of any third-party right.
            </p>

            <h2>10. Modifications</h2>
            <p>
              We may update these Terms from time to time. The &quot;Last
              updated&quot; date at the top reflects the most recent revision.
              Continued use of the Site after changes are posted constitutes
              acceptance.
            </p>

            <h2>11. Termination</h2>
            <p>
              We may suspend or terminate your access to any course, community,
              or the Site at any time for breach of these Terms, with or
              without notice and, where the breach is material, without refund.
            </p>

            <h2>12. Governing law and jurisdiction</h2>
            <p>
              These Terms are governed by the laws of India. Any dispute
              arising out of or in connection with these Terms shall be subject
              to the exclusive jurisdiction of the courts at Hyderabad,
              Telangana.
            </p>

            <h2>13. Severability</h2>
            <p>
              If any provision of these Terms is found unenforceable, the
              remaining provisions will remain in full force and effect.
            </p>

            <h2>14. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href="mailto:contact@alphabullacademy.com">
                contact@alphabullacademy.com
              </a>{" "}
              or use our{" "}
              <Link href="/#contact">contact form</Link>. WhatsApp{" "}
              <a href="https://wa.me/919032999466">+91 90329 99466</a> is the
              fastest way to reach us.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
