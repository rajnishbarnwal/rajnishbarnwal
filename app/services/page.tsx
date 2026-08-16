import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Check, ArrowRight, Layers, Cpu, BarChart3, Network, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Digital Transformation Consulting",
  description:
    "Process automation with n8n, practical AI applications, MIS dashboards, and ERP integrations for mid-sized Indian companies.",
};

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: "automation",
      icon: Layers,
      title: "Process Automation",
      subtitle: "Eliminating manual coordination and data bridging across teams.",
      p1: "Every growing company accumulates repetitive administrative routines: copying order details from emails into spreadsheets, chasing managers on WhatsApp for purchase approvals, and reminding site supervisors to submit daily progress logs. These manual handoffs introduce delays, errors, and significant administrative wage costs.",
      p2: "I design and implement resilient automated workflows—built primarily on self-hosted n8n. Instead of forcing your staff into an unfamiliar tool, we connect your existing communication channels (email, webhooks, WhatsApp, databases) so that information moves instantly and automatically between systems.",
      goodFit: [
        "Your team spends hours each week re-typing information from emails or messages into Excel or ERP.",
        "Operational approvals get stuck in manager inboxes without clear tracking or escalation.",
        "You want automated status notifications sent to clients or project leads without staff having to remember.",
      ],
      outcomes: [
        "Immediate reduction of 10–20 hours of manual administrative data entry per week.",
        "Automated audit trails for every approval, document submission, and state change.",
        "Zero per-task software fees when deployed on dedicated, self-hosted infrastructure.",
      ],
    },
    {
      id: "ai",
      icon: Cpu,
      title: "AI & LLM Applications",
      subtitle: "Practical intelligence on your proprietary documents — not toy chatbots.",
      p1: "Most AI marketing promises magic but delivers generic chatbot demos that hallucinate and have no context about your actual business operations. Useful AI in a business environment must be strictly grounded in your company's own documents, pricing matrices, contracts, and operating procedures.",
      p2: "I build focused, private AI workflows using Retrieval-Augmented Generation (RAG)—a method that allows language models to search through your own PDFs, vendor contracts, and internal guidelines before formulating an answer. This gives your staff an internal assistant that cites specific clauses and data points with verifiable accuracy.",
      goodFit: [
        "Your staff spends considerable time searching through long technical specifications, contracts, or HR policies.",
        "You receive high volumes of unstructured incoming customer enquiries, purchase orders, or quotation requests that need structured data extraction.",
        "You want to automate initial document drafting, summarisation, or compliance verification.",
      ],
      outcomes: [
        "Internal search assistants that answer complex employee questions with direct source citations.",
        "Automated extraction of key variables from vendor invoices and quotes into your database.",
        "Complete data privacy: your proprietary business data is never used to train public models.",
      ],
    },
    {
      id: "mis",
      icon: BarChart3,
      title: "MIS & Decision Dashboards",
      subtitle: "One single source of truth that directors and department heads actually trust.",
      p1: "In many mid-sized businesses, Monday morning management reviews begin with thirty minutes of arguing over whose spreadsheet is accurate. Accounts reports one revenue number, operations reports another based on completed site work, and procurement has a third figure based on issued purchase orders.",
      p2: "The challenge of building an effective Management Information System (MIS) is rarely about choosing a visualization tool; it is about establishing agreed business logic, cleaning source inputs, and automating data pipelines so reports compile automatically without human tampering.",
      goodFit: [
        "Leadership waits days or weeks for consolidated department performance reports.",
        "Different departments present conflicting numbers during executive review meetings.",
        "You need real-time cash flow, project burn rate, or inventory utilization visibility.",
      ],
      outcomes: [
        "Automated daily/weekly executive dashboards requiring zero manual compilation time.",
        "Standardised metric formulas agreed upon across finance, operations, and procurement.",
        "Automated variance and budget overrun alerts triggered directly to leadership.",
      ],
    },
    {
      id: "erp",
      icon: Network,
      title: "ERP & Systems Integration",
      subtitle: "Making the software you already paid for work together seamlessly.",
      p1: "Mid-sized businesses frequently purchase ERP or specialized vertical software, only to find that their field teams refuse to use the clunky desktop interface, and the new system cannot communicate with their legacy spreadsheets or banking portals.",
      p2: "I help businesses navigate ERP vendor selection, architect custom API integrations between disconnected systems, and manage the critical frontline change management required to ensure actual user adoption on the shop floor.",
      goodFit: [
        "You are evaluating ERP vendors and need an independent technical advisor to evaluate sales claims.",
        "Your ERP is operational, but critical field or accounting data still has to be re-entered by hand.",
        "Your frontline staff avoids using the system because the interface is too cumbersome for daily work.",
      ],
      outcomes: [
        "Avoidance of costly, unnecessary software customizations through vendor negotiation.",
        "Bidirectional API data sync between core ERP, field forms, and reporting databases.",
        "Simplified user access flows tailored to what field operators actually need to record.",
      ],
    },
  ];

  const engagementModels = [
    {
      title: "Diagnostic Sprint",
      duration: "1–2 Weeks",
      summary:
        "A fast, high-impact assessment of your current operational bottlenecks and system friction.",
      details: [
        "On-site process mapping and interviews with the staff doing the work",
        "Identification of manual data bridges, redundant software costs, and approval bottlenecks",
        "A prioritised, actionable roadmap with clear effort estimates and recommended architecture",
        "You receive a comprehensive blueprint you can execute independently or with me",
      ],
    },
    {
      title: "Project Build",
      duration: "4–12 Weeks",
      summary:
        "End-to-end design, implementation, and rollout of specific automations, dashboards, or internal systems.",
      details: [
        "Fixed scope, fixed timeline, and agreed deliverable milestones",
        "Iterative deployment in usable modules with front-line staff involved early",
        "Complete technical documentation, admin credentials handover, and staff training",
        "Post-rollout support period to ensure stable production adoption",
      ],
      featured: true,
    },
    {
      title: "Advisory Retainer",
      duration: "Monthly / Flexible",
      summary:
        "Ongoing technical guidance for leadership and internal teams managing their own systems.",
      details: [
        "Dedicated monthly advisory hours for architecture reviews and vendor evaluations",
        "Code and workflow reviews for internal developers or automation builders",
        "Strategic sounding board on software procurement and digital roadmap sequencing",
        "Direct async communication via email and scheduled review calls",
      ],
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" },
        ]}
      />

      {/* Header */}
      <section className="pt-16 pb-16 lg:pt-24 lg:pb-20 bg-white">
        <Container>
          <div className="max-w-[780px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.09em] text-[#1D4ED8] mb-3">
              Consulting & Implementation
            </p>
            <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.1] mb-6">
              Digital transformation consulting
            </h1>
            <p className="text-[18px] sm:text-[20px] text-[#57534E] leading-relaxed">
              Most companies don't need a transformation programme. They need four or five specific things fixed, in the right order. That's the work I do.
            </p>
          </div>
        </Container>
      </section>

      {/* 4 Deep-Dive Service Sections */}
      <div className="space-y-16 lg:space-y-24">
        {serviceDetails.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 1;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 lg:py-24 scroll-mt-20 ${
                isEven ? "bg-[#FAFAF9] border-y border-[#E7E5E4]" : "bg-white"
              }`}
            >
              <Container>
                <div className="max-w-[880px]">
                  {/* Service Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-[26px] sm:text-[32px] font-semibold text-[#0C0A09] tracking-[-0.02em]">
                        {service.title}
                      </h2>
                      <p className="text-[16px] text-[#78716C] mt-1 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-4 text-[17px] text-[#57534E] leading-[1.75] mb-10">
                    <p>{service.p1}</p>
                    <p>{service.p2}</p>
                  </div>

                  {/* Signals & Outcomes Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#E7E5E4]">
                    {/* Good Fit Signals */}
                    <div className="rounded-[8px] border border-[#E7E5E4] bg-white p-6">
                      <h3 className="text-[16px] font-semibold text-[#0C0A09] mb-4 flex items-center gap-2">
                        <span>Good fit if...</span>
                      </h3>
                      <ul className="space-y-3 text-[14px] text-[#57534E]">
                        {service.goodFit.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Typical Outcomes */}
                    <div className="rounded-[8px] border border-[#E7E5E4] bg-white p-6">
                      <h3 className="text-[16px] font-semibold text-[#0C0A09] mb-4 flex items-center gap-2">
                        <span>Typical outcomes</span>
                      </h3>
                      <ul className="space-y-3 text-[14px] text-[#57534E]">
                        {service.outcomes.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#1D4ED8]">
                              <Check className="h-3 w-3" />
                            </span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild size="sm">
                      <Link href="/contact">
                        Discuss {service.title.toLowerCase()}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* Engagement Models */}
      <Section
        eyebrow="How We Work"
        title="Engagement Models"
        description="Transparent collaboration frameworks. Scope and pricing are quoted per project after the discovery call."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engagementModels.map((model, idx) => (
            <div
              key={idx}
              className={`rounded-[8px] border p-6 sm:p-8 flex flex-col justify-between transition-all duration-180 ${
                model.featured
                  ? "border-[#1D4ED8] bg-white shadow-xs"
                  : "border-[#E7E5E4] bg-white"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[12px] font-mono uppercase font-semibold text-[#1D4ED8]">
                    {model.duration}
                  </span>
                  {model.featured && (
                    <span className="rounded-full bg-[#EFF6FF] px-2.5 py-0.5 text-xs font-semibold text-[#1D4ED8] border border-[#BFDBFE]">
                      Most Common
                    </span>
                  )}
                </div>

                <h3 className="text-[20px] font-semibold text-[#0C0A09] mb-3">
                  {model.title}
                </h3>
                <p className="text-[14px] text-[#57534E] leading-relaxed mb-6">
                  {model.summary}
                </p>

                <ul className="space-y-3 text-[14px] text-[#57534E] mb-8">
                  {model.details.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E7E5E4] space-y-4">
                <p className="text-[12px] text-[#A8A29E] italic">
                  Scope and pricing are quoted per project after the discovery call.
                </p>
                <Button asChild variant={model.featured ? "default" : "secondary"} className="w-full">
                  <Link href="/contact">Book a discovery call</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        surface
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        description="Clear answers about pricing, technical fit, remote collaboration, and ownership."
      >
        <div className="max-w-[780px]">
          <FAQ />
        </div>
      </Section>

      {/* CTA Band */}
      <CTABand />
    </>
  );
}
