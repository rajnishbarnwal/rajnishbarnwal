import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { WorkCard } from "@/components/cards/WorkCard";
import { CTABand } from "@/components/sections/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllCaseStudies } from "@/lib/content";
import { Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Work — Case Studies & Implementations",
  description:
    "Real-world case studies in process automation, in-house HRMS software development, MIS reporting dashboards, and ERP integrations.",
};

export default async function WorkIndexPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Work", item: "/work" },
        ]}
      />

      {/* Header */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white">
        <Container>
          <div className="max-w-[780px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.09em] text-[#1D4ED8] mb-3">
              Case Studies & Practical Work
            </p>
            <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.1] mb-6">
              Selected client & in-house projects
            </h1>
            <p className="text-[18px] sm:text-[20px] text-[#57534E] leading-relaxed mb-6">
              Detailed breakdowns of automation workflows, custom internal software, and executive dashboards built to solve real operational problems.
            </p>

            {/* Confidentiality Notice */}
            <div className="inline-flex items-center gap-2 rounded-[8px] border border-[#E7E5E4] bg-[#FAFAF9] px-4 py-2.5 text-[13px] text-[#57534E]">
              <Lock className="h-4 w-4 text-[#A8A29E] shrink-0" />
              <span>
                Work delivered in-house at Shubham EPC. Some details are generalised for confidentiality.
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24 lg:pb-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <WorkCard
                key={study.slug}
                slug={study.slug}
                frontmatter={study.frontmatter}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <CTABand
        title="Have a similar workflow challenge in your business?"
        description="Let's review the current process on a quick 30-minute discovery call."
      />
    </>
  );
}
