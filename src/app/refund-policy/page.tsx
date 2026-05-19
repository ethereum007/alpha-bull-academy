import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund policy for AlphaBull Trading Academy courses. Clear timelines and eligibility for full refunds.",
  alternates: { canonical: "https://www.alphabullacademy.com/refund-policy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "27 April 2026";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl py-12">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Refund Policy</h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-foreground prose-p:leading-relaxed prose-li:my-1 prose-li:leading-relaxed prose-strong:text-foreground prose-a:text-primary">
            <p>
              We want every AlphaBull student to feel confident in their
              purchase. This policy explains exactly when and how you can
              request a refund.
            </p>

            <h2>1. Free demo class</h2>
            <p>
              The free demo class is exactly that â€” free. There is nothing to
              refund. Attend the demo first to make sure the course is right
              for you before paying.
            </p>

            <h2>2. Standard refund window â€” 7 days from enrolment, before
              session 3</h2>
            <p>
              You may request a full refund of your course fee if{" "}
              <strong>both</strong> of the following are true:
            </p>
            <ul>
              <li>
                Your refund request is made within{" "}
                <strong>7 calendar days</strong> from the date of payment, and
              </li>
              <li>
                You have attended <strong>fewer than 3 live sessions</strong> of
                the course (recordings viewed do not count as attendance).
              </li>
            </ul>
            <p>
              If both conditions are met, we will process a 100% refund less
              any payment-gateway charges that Razorpay does not return to us
              (typically less than 3%).
            </p>

            <h2>3. After session 3 or after 7 days</h2>
            <p>
              Once you have attended your third live session{" "}
              <strong>or</strong> 7 days have passed since payment â€” whichever
              is earlier â€” refunds are no longer available, because by that
              point you have access to a substantial portion of the course
              materials and proprietary content.
            </p>

            <h2>4. Special cases</h2>
            <ul>
              <li>
                <strong>Medical or family emergency:</strong> if a documented
                emergency prevents you from continuing, we may, at our sole
                discretion, defer your enrolment to a future cohort instead of
                refunding.
              </li>
              <li>
                <strong>Course cancelled by AlphaBull:</strong> in the unlikely
                event we cancel a cohort before it begins, you receive a full
                refund automatically â€” no request needed.
              </li>
              <li>
                <strong>Bundles and promotional pricing:</strong> if you bought
                a bundle or used a promotional code, the same 7-day / 3-session
                rule applies, and refunds are pro-rated against the bundle
                price (not the standalone prices of components).
              </li>
            </ul>

            <h2>5. Non-refundable items</h2>
            <ul>
              <li>One-on-one mentoring sessions once they have been delivered.</li>
              <li>Downloadable templates, checklists, and ebooks once accessed.</li>
              <li>Razorpay&rsquo;s payment-gateway processing fees.</li>
              <li>
                Course access transferred to another person (transfers are not
                permitted under our{" "}
                <Link href="/terms-of-service">Terms of Service</Link>).
              </li>
            </ul>

            <h2>6. How to request a refund</h2>
            <p>Email us with the following:</p>
            <ul>
              <li>Subject line: <em>Refund request â€” [your name]</em></li>
              <li>Course you enrolled in</li>
              <li>Date of payment</li>
              <li>Razorpay transaction ID (or screenshot of the receipt)</li>
              <li>Brief reason (optional but helpful)</li>
            </ul>
            <p>
              Send to{" "}
              <a href="mailto:contact@alphabullacademy.com">
                contact@alphabullacademy.com
              </a>{" "}
              or WhatsApp{" "}
              <a href="https://wa.me/919032999466">+91 90329 99466</a>.
            </p>

            <h2>7. Processing time</h2>
            <p>
              Eligible refunds are initiated within{" "}
              <strong>5 business days</strong> of approval. Razorpay typically
              credits the original payment method within 5â€“10 additional
              business days, depending on your bank.
            </p>

            <h2>8. Disputes</h2>
            <p>
              If you disagree with a refund decision, you may escalate to our
              Grievance Officer (Kiran Dutta,{" "}
              <a href="mailto:contact@alphabullacademy.com">
                contact@alphabullacademy.com
              </a>
              ). Any unresolved disputes are subject to the governing-law and
              jurisdiction clauses of our{" "}
              <Link href="/terms-of-service">Terms of Service</Link>.
            </p>

            <h2>9. Changes</h2>
            <p>
              We may update this policy. The &quot;Last updated&quot; date
              above always reflects the current version. Refunds are governed
              by the policy in effect on the date of your purchase.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
