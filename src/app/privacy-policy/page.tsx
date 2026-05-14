import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How AlphaBull Trading Academy collects, uses, stores, and protects your personal information. Compliant with India's Digital Personal Data Protection Act 2023 and the IT Act 2000.",
  alternates: { canonical: "https://alphabullacademy.com/privacy-policy" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "27 April 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl py-12">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">
              Last updated: {LAST_UPDATED}
            </p>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-foreground prose-p:leading-relaxed prose-li:my-1 prose-li:leading-relaxed prose-strong:text-foreground prose-a:text-primary">
            <p>
              AlphaBull Trading Academy (&quot;<strong>AlphaBull</strong>,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
              protecting the privacy of every student, prospect, and visitor to
              alphabullacademy.com (the &quot;Site&quot;). This Privacy Policy
              explains what personal information we collect, why we collect it,
              how we use and store it, and the rights you have over your data
              under Indian law — particularly the{" "}
              <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>{" "}
              and the{" "}
              <strong>Information Technology Act, 2000</strong> with associated
              SPDI Rules.
            </p>

            <h2>1. Who we are</h2>
            <p>
              AlphaBull Trading Academy is a stock market education business
              based in Hyderabad, Telangana, India. Our founder Kiran Dutta is
              NISM SEBI Research Analyst certified. We provide educational
              courses; we do not provide personalised investment advice, deal in
              securities for clients, or manage client funds.
            </p>

            <h2>2. Information we collect</h2>
            <h3>2.1 Information you give us</h3>
            <ul>
              <li>
                <strong>Contact-form submissions:</strong> name, mobile number,
                email address.
              </li>
              <li>
                <strong>Course enrolments:</strong> name, email, mobile, billing
                details (handled directly by Razorpay — see Section 5).
              </li>
              <li>
                <strong>Communications:</strong> any messages you send via
                WhatsApp, email, Instagram, Telegram, or our community channels.
              </li>
            </ul>

            <h3>2.2 Information collected automatically</h3>
            <ul>
              <li>
                <strong>Cookies and analytics:</strong> via Google Analytics
                (page views, session length, device type, approximate location)
                and Google Tag Manager.
              </li>
              <li>
                <strong>Server logs:</strong> via Vercel (our hosting provider)
                — IP address, user agent, and request timestamps for security
                and rate-limiting.
              </li>
              <li>
                <strong>Bot-protection data:</strong> hCaptcha may collect basic
                interaction signals to verify you are a human submitting the
                contact form.
              </li>
              <li>
                <strong>Marketing analytics:</strong> Ahrefs Analytics tracks
                aggregate visit data for SEO purposes.
              </li>
            </ul>

            <h2>3. Why we collect it</h2>
            <ul>
              <li>To respond to enquiries and book free demo classes.</li>
              <li>To deliver paid courses you have enrolled in.</li>
              <li>
                To send you batch updates, course reminders, and educational
                content you have opted into.
              </li>
              <li>To improve the Site, our content, and our courses.</li>
              <li>
                To comply with applicable Indian law (tax, audit, KYC where
                applicable).
              </li>
              <li>To prevent fraud, spam, and abuse.</li>
            </ul>

            <h2>4. Legal basis for processing</h2>
            <p>
              Under the DPDP Act, we process personal data on the basis of your
              consent (given when you submit a form, enrol in a course, or
              continue using our Site after being notified of cookies) and to
              perform the contract you enter into when purchasing a course.
            </p>

            <h2>5. How we share your information</h2>
            <p>
              We do not sell your personal data. We share it only with the
              service providers that help us operate AlphaBull, and only to the
              minimum extent necessary:
            </p>
            <ul>
              <li>
                <strong>Vercel</strong> — Site hosting (USA, with Indian
                edge nodes).
              </li>
              <li>
                <strong>Supabase</strong> — backend database for contact-form
                data (Singapore region).
              </li>
              <li>
                <strong>Resend</strong> — transactional email delivery (USA).
              </li>
              <li>
                <strong>Razorpay</strong> — course payment processing (India).
                Razorpay handles all card and UPI data directly; AlphaBull never
                sees or stores it.
              </li>
              <li>
                <strong>Google (Analytics, Tag Manager, Search Console,
                Fonts)</strong> — analytics and infrastructure.
              </li>
              <li>
                <strong>hCaptcha (Intuition Machines, Inc.)</strong> — spam
                prevention.
              </li>
              <li>
                <strong>Ahrefs</strong> — aggregate visitor analytics.
              </li>
            </ul>
            <p>
              We may also disclose data when required by Indian law, by court
              order, or to enforce our Terms of Service.
            </p>

            <h2>6. Data retention</h2>
            <ul>
              <li>
                Contact-form submissions are retained for up to 24 months unless
                you request earlier deletion.
              </li>
              <li>
                Course-enrolment records are retained for 7 years (Indian
                accounting and tax statute requirements).
              </li>
              <li>Analytics data is retained per Google&rsquo;s default settings.</li>
            </ul>

            <h2>7. Data security</h2>
            <p>
              We use HTTPS across the entire Site (TLS via Vercel), restrict
              access to personal data to authorised personnel only, and rely on
              SOC-2 / ISO-27001 certified processors (Vercel, Supabase, Google,
              Razorpay). No system is perfectly secure — please reach us at{" "}
              <a href="mailto:contact@alphabullacademy.com">
                contact@alphabullacademy.com
              </a>{" "}
              if you suspect a breach.
            </p>

            <h2>8. Your rights</h2>
            <p>
              Under the DPDP Act and the IT Act SPDI Rules, you have the right
              to:
            </p>
            <ul>
              <li>Access the personal data we hold about you.</li>
              <li>Correct inaccurate or outdated information.</li>
              <li>
                Request deletion (where we are not required by law to retain
                it).
              </li>
              <li>Withdraw consent at any time.</li>
              <li>Lodge a grievance with our Grievance Officer (below).</li>
            </ul>
            <p>
              To exercise any right, email{" "}
              <a href="mailto:contact@alphabullacademy.com">
                contact@alphabullacademy.com
              </a>{" "}
              with the subject line &quot;Privacy Request&quot;. We will respond
              within 30 days.
            </p>

            <h2>9. Children</h2>
            <p>
              Our courses are designed for adults aged 18 or above. We do not
              knowingly collect personal data from minors. If you believe a
              minor has submitted information, contact us and we will delete it.
            </p>

            <h2>10. Cookies</h2>
            <p>
              We use cookies for analytics, performance, and preserving your
              session. You can disable cookies in your browser settings — some
              parts of the Site (especially the contact form) may not work
              without them.
            </p>

            <h2>11. International transfers</h2>
            <p>
              Some of our service providers (Vercel, Resend, Google, hCaptcha)
              are based outside India. Your data may be transferred to and
              processed in those jurisdictions. We rely on each provider&rsquo;s
              standard contractual safeguards.
            </p>

            <h2>12. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The &quot;Last
              updated&quot; date at the top reflects the most recent revision.
              Material changes will be flagged at the top of the Site.
            </p>

            <h2>13. Grievance Officer</h2>
            <p>
              In compliance with the IT Act 2000 and the DPDP Act, our
              Grievance Officer is:
            </p>
            <ul>
              <li>
                <strong>Name:</strong> Kiran Dutta
              </li>
              <li>
                <strong>Designation:</strong> Founder &amp; Grievance Officer
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:contact@alphabullacademy.com">
                  contact@alphabullacademy.com
                </a>
              </li>
              <li>
                <strong>Phone / WhatsApp:</strong> +91 90329 99466
              </li>
              <li>
                <strong>Address:</strong> Hyderabad, Telangana, India
              </li>
            </ul>
            <p>
              Working hours: Monday–Saturday, 09:00–20:00 IST.
            </p>

            <h2>14. Contact</h2>
            <p>
              For any other queries about this Privacy Policy, email{" "}
              <a href="mailto:contact@alphabullacademy.com">
                contact@alphabullacademy.com
              </a>{" "}
              or use the form on our{" "}
              <Link href="/#contact">contact page</Link>.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
