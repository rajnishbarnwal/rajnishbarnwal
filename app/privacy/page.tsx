import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Data Handling & Protection",
  description:
    "Privacy policy for digitalrajnish.com. Clear terms on how contact form submissions and operational data are handled.",
};

export default function PrivacyPage() {
  const lastUpdated = "March 2026";

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Privacy Policy", item: "/privacy" },
        ]}
      />

      <section className="pt-16 pb-24 lg:pt-24 lg:pb-32 bg-white">
        <Container>
          <div className="max-w-[720px]">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#57534E] hover:text-[#1D4ED8] transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </div>

            <div className="flex items-center gap-2 text-[#1D4ED8] mb-3">
              <Shield className="h-5 w-5" />
              <span className="text-[13px] font-semibold uppercase tracking-[0.09em]">
                Legal & Data Privacy
              </span>
            </div>

            <h1 className="text-[32px] sm:text-[42px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.12] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[14px] text-[#A8A29E] mb-10">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-8 text-[16px] text-[#57534E] leading-[1.75]">
              <section className="space-y-3">
                <h2 className="text-[20px] font-semibold text-[#0C0A09]">
                  1. Information Collected
                </h2>
                <p>
                  When you submit an enquiry through the contact form on this website, I collect the following details provided voluntarily by you:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-[15px]">
                  <li>Your name</li>
                  <li>Your work email address</li>
                  <li>Your company name (if provided)</li>
                  <li>The description of the operational or technical problem you are looking to solve</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-[20px] font-semibold text-[#0C0A09]">
                  2. Purpose of Data Use
                </h2>
                <p>
                  Information collected is used solely to evaluate your project enquiry, respond directly to your communication, and schedule discovery consultations. Your information is never added to promotional email marketing blasts, sold, or shared with third-party vendors.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-[20px] font-semibold text-[#0C0A09]">
                  3. Booking & Scheduling Services
                </h2>
                <p>
                  When booking a discovery call using the embedded calendar system (Cal.com), scheduling data is processed according to Cal.com's privacy and data protection standards. No unauthorized cookies or tracking pixels are placed on your browser.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-[20px] font-semibold text-[#0C0A09]">
                  4. Web Analytics
                </h2>
                <p>
                  This site uses privacy-friendly analytics (Vercel Analytics and Speed Insights) to monitor aggregated traffic patterns and page performance without collecting personally identifiable information or tracking cross-site user sessions.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-[20px] font-semibold text-[#0C0A09]">
                  5. Data Retention & Your Rights
                </h2>
                <p>
                  Enquiry emails are retained for client correspondence records. You may request the deletion or retrieval of your communication history at any time by emailing{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#1D4ED8] underline underline-offset-4"
                  >
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </section>

              <section className="space-y-3 pt-4 border-t border-[#E7E5E4]">
                <h2 className="text-[20px] font-semibold text-[#0C0A09]">
                  6. Contact Information
                </h2>
                <p>
                  For any questions regarding this policy, reach out directly:
                </p>
                <p className="text-[15px] font-medium text-[#0C0A09]">
                  Rajnish Barnwal<br />
                  Digital Transformation Consultant<br />
                  Location: {siteConfig.location}<br />
                  Email:{" "}
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[#1D4ED8] underline underline-offset-4"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
