import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Timeline } from "@/components/sections/Timeline";
import { CTABand } from "@/components/sections/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { GraduationCap, Wrench, Languages } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Background & Story",
  description:
    "From running an IT agency to leading IT and digitalisation at Shubham EPC. Background, career timeline, and philosophy of Rajnish Barnwal.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const educationItems = [
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "MIT Academy of Engineering, Alandi, Pune",
      period: "2015 – 2019",
      notes: "First Class with Distinction. Focused on embedded logic, communications, and computational systems.",
    },
    {
      degree: "Full Stack Web Development Certification",
      institution: "freeCodeCamp",
      period: "2017 – 2020",
      notes: "Comprehensive practical coursework covering frontend architecture, Node.js, databases, and APIs.",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ]}
      />

      {/* Header & Story */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-24 bg-white">
        <Container>
          <div className="max-w-[760px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.09em] text-[#1D4ED8] mb-3">
              About Rajnish Barnwal
            </p>
            <h1 className="text-[34px] sm:text-[44px] lg:text-[50px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.1] mb-8">
              I build internal systems for companies that don&apos;t have a tech team.
            </h1>

            {/* Prose Story */}
            <div className="space-y-6 text-[17px] text-[#57534E] leading-[1.75]">
              <p>
                I grew up in Gopalganj, Bihar, and moved to Pune in 2015 to pursue a B.Tech in Electronics & Communication Engineering at MIT Academy of Engineering.
              </p>
              <p>
                While studying, I started freelancing in 2016 on Freelancer.com, taking on international web development and custom scripting projects. Alongside my degree coursework, I spent late nights learning full-stack software development through freeCodeCamp, building functional web applications from scratch.
              </p>
              <p>
                In 2018, I founded <strong>Opinta Solutions Pvt. Ltd.</strong>, an IT and digital agency that was incubated at the Centre for Innovation, Incubation and Linkages. Over four years of running Opinta, I wore every operational hat: managing client delivery, budgeting payroll, resolving technical architecture issues, and dealing directly with business owners. I learned more about how businesses actually function from four years of running a small company than from any textbook or course.
              </p>
              <p>
                Following Opinta, I led growth and marketing operations at <strong>eduGENZ</strong> (2022–2024) and <strong>Kamalraj Group</strong> (2024–2025). In both roles, my responsibility was not just running campaigns, but building the underlying CRM funnels, customer tracking automations, and reporting pipelines that made operational scaling possible.
              </p>
              <p>
                In 2025, I joined <strong>Shubham EPC</strong>, initially as Brand Manager, and in 2026 transitioned to <strong>Manager – IT & Digitalisation</strong>. Today, I lead enterprise digital transformation across our business: deploying n8n workflow automations that eliminate manual WhatsApp follow-ups, constructing live MIS dashboards for our directors, managing ERP vendor integrations, and developing <em>Shubham ONE</em>—our custom internal HRMS designed to replace paid commercial software.
              </p>
              <p className="pt-2 font-medium text-[#0C0A09]">
                The marketing and entrepreneurial years were not a detour. They are the exact reason I approach digitalisation from business outcomes, employee adoption, and cost constraints—rather than pushing software for its own sake.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Career Timeline */}
      <Section
        surface
        eyebrow="Career History"
        title="Experience & Roles"
        description="A track record spanning entrepreneurship, growth operations, and enterprise IT leadership."
      >
        <div className="max-w-[760px]">
          <Timeline />
        </div>
      </Section>

      {/* Education & Credentials */}
      <Section
        eyebrow="Background"
        title="Education & Foundations"
      >
        <div className="max-w-[760px] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {educationItems.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-[8px] border border-[#E7E5E4] bg-white p-6 space-y-3"
            >
              <div className="flex items-center gap-2 text-[#1D4ED8]">
                <GraduationCap className="h-5 w-5" />
                <span className="text-[13px] font-mono font-medium">{edu.period}</span>
              </div>
              <h3 className="text-[17px] font-semibold text-[#0C0A09] leading-snug">
                {edu.degree}
              </h3>
              <p className="text-[14px] font-medium text-[#57534E]">
                {edu.institution}
              </p>
              <p className="text-[13px] text-[#78716C] leading-relaxed">
                {edu.notes}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tools & Languages */}
      <Section
        surface
        eyebrow="Core Competencies"
        title="Tools & Languages"
      >
        <div className="max-w-[760px] space-y-10">
          {/* Tools */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="h-4 w-4 text-[#1D4ED8]" />
              <h3 className="text-[17px] font-semibold text-[#0C0A09]">
                Technologies & Platforms I Work With
              </h3>
            </div>
            <p className="text-[14px] text-[#78716C] mb-4">
              Direct practical experience implementing and maintaining these tools in production:
            </p>
            <div className="flex flex-wrap gap-2.5">
              {siteConfig.tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-[8px] border border-[#E7E5E4] bg-white px-3.5 py-2 text-[14px] font-medium text-[#0C0A09] shadow-xs"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="pt-6 border-t border-[#E7E5E4]">
            <div className="flex items-center gap-2 mb-3">
              <Languages className="h-4 w-4 text-[#1D4ED8]" />
              <h3 className="text-[17px] font-semibold text-[#0C0A09]">
                Spoken Languages
              </h3>
            </div>
            <p className="text-[15px] text-[#57534E]">
              Fluent working proficiency in <strong>English</strong>, <strong>Hindi</strong>, and <strong>Marathi</strong> for seamless collaboration across corporate and regional site teams.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Band */}
      <CTABand
        title="Ready to talk through your current operations?"
        description="Let's review one manual workflow or reporting bottleneck and determine the most pragmatic fix."
      />
    </>
  );
}
