import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { WorkCard } from "@/components/cards/WorkCard";
import { PostCard } from "@/components/cards/PostCard";
import { CTABand } from "@/components/sections/CTABand";
import { PersonJsonLd, ProfessionalServiceJsonLd } from "@/components/seo/JsonLd";
import { getAllCaseStudies, getAllPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { ArrowRight, CheckCircle2, Globe, Zap, Shield, Clock, Workflow, BarChart3, Database, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Rajnish Barnwal — Systems & Automation Consultant",
  description:
    "Business systems and automation consultant. Helping fast-growing companies and mid-market enterprises eliminate operational chaos with custom workflow automation (n8n), executive MIS dashboards, AI workflows, and bespoke internal tools.",
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const caseStudies = await getAllCaseStudies();
  const posts = await getAllPosts();

  const selectedWork = caseStudies.slice(0, 4);
  const latestPosts = posts.slice(0, 3);

  const capabilities = [
    {
      id: "automation",
      title: "Workflow & Process Automation",
      summary: "Connect your tools and eliminate manual busywork with reliable, self-hosted n8n pipelines.",
      outcomes: [
        "Automated multi-stage approval flows across email, Slack & WhatsApp",
        "System-to-system data sync eliminating duplicate manual entry",
        "Nightly scheduled reports and automated alert triggers",
        "Self-hosted infrastructure with zero per-execution SaaS tax",
      ],
      href: "/services#automation",
    },
    {
      id: "mis",
      title: "Executive MIS & Real-Time BI",
      summary: "A single, auditable source of truth for leadership that updates automatically.",
      outcomes: [
        "Unified executive dashboards replacing messy Monday spreadsheets",
        "Automated data extraction directly from operational databases",
        "Real-time visibility into project margins, billing, and burn rates",
        "Exception-based alerts before budget overruns occur",
      ],
      href: "/services#mis",
    },
    {
      id: "apps",
      title: "Bespoke Internal SaaS & Tools",
      summary: "Custom web applications built around your exact workflows, eliminating per-seat SaaS costs.",
      outcomes: [
        "Tailored web apps built with Next.js, TypeScript & PostgreSQL",
        "Mobile-optimized interfaces designed for floor and field teams",
        "Role-based access control (RBAC) and data isolation",
        "100% intellectual property and code ownership",
      ],
      href: "/services#ai",
    },
    {
      id: "erp",
      title: "ERP & Systems Integration",
      summary: "Bridging legacy systems, accounting databases, and modern APIs into unified operations.",
      outcomes: [
        "Unbiased vendor evaluation and pragmatic architecture roadmap",
        "Custom middleware and bi-directional REST API connectors",
        "Field team change management for high frontline adoption",
        "Clean data migration avoiding costly custom vendor add-ons",
      ],
      href: "/services#erp",
    },
  ];

  const whyWorkWithMe = [
    {
      icon: Zap,
      title: "Direct Specialist Execution",
      description:
        "You work directly with the architect and builder. No account managers, junior handoffs, or agency overhead.",
    },
    {
      icon: Shield,
      title: "Fixed Scope, Zero Surprise Invoices",
      description:
        "Every project has clear milestones, predictable timelines, and transparent fixed deliverables.",
    },
    {
      icon: Globe,
      title: "Global Async & Timezone Agnostic",
      description:
        "Experienced working with clients in the US, UK, Middle East, and India with seamless asynchronous communication.",
    },
    {
      icon: Clock,
      title: "100% Code & IP Ownership",
      description:
        "No vendor lock-in or recurring consultant dependencies. Complete documentation, code, and team training on handover.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "15-Min Discovery",
      description:
        "We pinpoint your single biggest operational bottleneck and evaluate feasibility immediately.",
    },
    {
      number: "02",
      title: "Fixed-Milestone Sprint",
      description:
        "Rapid architecture, building, and team-testing in testable 2 to 4-week delivery sprints.",
    },
    {
      number: "03",
      title: "Handover & Training",
      description:
        "Full walkthrough, documentation, and training so your team owns and operates the system independently.",
    },
  ];

  return (
    <>
      <PersonJsonLd />
      <ProfessionalServiceJsonLd />

      {/* 1. HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white overflow-hidden">
        {/* Ambient Gradient Mesh Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-32 left-1/4 w-[540px] h-[540px] bg-gradient-to-br from-blue-100/60 via-indigo-50/40 to-transparent rounded-full blur-3xl opacity-70" />
          <div className="absolute top-24 right-1/4 w-[460px] h-[460px] bg-gradient-to-bl from-sky-100/50 via-blue-50/25 to-transparent rounded-full blur-3xl opacity-60" />
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Executive Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#BFDBFE] bg-white/90 backdrop-blur-sm shadow-xs text-[12.5px] font-semibold text-[#1D4ED8] tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Systems & Automation Consultant · Serving Clients Worldwide</span>
              </div>

              {/* High-Impact Headline */}
              <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-bold text-[#0C0A09] tracking-[-0.035em] leading-[1.08]">
                I build internal systems and automations that{" "}
                <span className="text-[#1D4ED8]">save 100s of hours.</span>
              </h1>

              {/* High-Readability Subtitle */}
              <p className="text-[17px] sm:text-[19px] text-[#57534E] leading-[1.6] max-w-[62ch]">
                Eliminate operational chaos with custom workflow automation (n8n), real-time executive BI dashboards, and bespoke internal tools for mid-market and high-growth companies.
              </p>

              {/* CTA Group */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button asChild size="lg" className="shadow-md shadow-blue-900/10 hover:shadow-lg transition-all h-12 text-base px-6">
                  <Link href="/contact">
                    Book a 30-min discovery call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="border border-[#E7E5E4] hover:bg-[#FAFAF9] h-12 text-base px-6">
                  <Link href="/work">View Client Work</Link>
                </Button>
              </div>

              {/* Trust Markers */}
              <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[13px] text-[#57534E] font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#1D4ED8] shrink-0" />
                  Direct practitioner — no agency overhead
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#1D4ED8] shrink-0" />
                  Fixed-scope sprints with 100% IP handover
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-[#1D4ED8] shrink-0" />
                  Compatible with US, UK, Middle East & India timezones
                </span>
              </div>
            </div>

            {/* Right Col (5 cols): Global Consultant Terminal Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <PhotoPlaceholder />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. GLOBAL TRUST STRIP */}
      <section className="border-y border-[#E7E5E4] bg-[#FAFAF9]/90 backdrop-blur-sm py-4 text-[#57534E]">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] sm:text-[14px] text-center font-medium">
            <span className="text-[#0C0A09] font-semibold flex items-center gap-1.5">
              <Workflow className="h-4 w-4 text-[#1D4ED8]" /> Enterprise n8n Pipelines
            </span>
            <span className="hidden sm:inline text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="text-[#0C0A09] font-semibold flex items-center gap-1.5">
              <BarChart3 className="h-4 w-4 text-[#1D4ED8]" /> Real-Time Executive BI
            </span>
            <span className="hidden sm:inline text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="text-[#0C0A09] font-semibold flex items-center gap-1.5">
              <Layers className="h-4 w-4 text-[#1D4ED8]" /> Custom In-House SaaS
            </span>
            <span className="hidden sm:inline text-[#A8A29E]" aria-hidden="true">·</span>
            <span className="text-[#0C0A09] font-semibold flex items-center gap-1.5">
              <Database className="h-4 w-4 text-[#1D4ED8]" /> ERP & API Integration
            </span>
          </div>
        </Container>
      </section>

      {/* 3. THE PROBLEM WE SOLVE */}
      <Section
        eyebrow="The Bottlenecks"
        title="Where operations break down."
        description="Most growing companies have plenty of tools. The breakdown happens in the manual gaps between them."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Problem 01 */}
          <div className="border border-[#E7E5E4] rounded-[12px] p-6 sm:p-8 bg-white space-y-4 hover:border-[#1D4ED8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <span className="text-[26px] font-bold text-[#1D4ED8] font-mono">
              01
            </span>
            <h3 className="text-[19px] font-semibold text-[#0C0A09]">
              Fragmented Data & Blind Spots
            </h3>
            <p className="text-[15px] text-[#57534E] leading-relaxed">
              Critical numbers live scattered across five spreadsheets and buried inbox threads. By the time leadership gets a report, it is already outdated.
            </p>
          </div>

          {/* Problem 02 */}
          <div className="border border-[#E7E5E4] rounded-[12px] p-6 sm:p-8 bg-white space-y-4 hover:border-[#1D4ED8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <span className="text-[26px] font-bold text-[#1D4ED8] font-mono">
              02
            </span>
            <h3 className="text-[19px] font-semibold text-[#0C0A09]">
              Manual Data Re-Entry Layers
            </h3>
            <p className="text-[15px] text-[#57534E] leading-relaxed">
              Staff spend half their week copying data between software, chasing approvals on chat apps, and re-keying identical records.
            </p>
          </div>

          {/* Problem 03 */}
          <div className="border border-[#E7E5E4] rounded-[12px] p-6 sm:p-8 bg-white space-y-4 hover:border-[#1D4ED8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <span className="text-[26px] font-bold text-[#1D4ED8] font-mono">
              03
            </span>
            <h3 className="text-[19px] font-semibold text-[#0C0A09]">
              Expensive SaaS Bloat & Low Adoption
            </h3>
            <p className="text-[15px] text-[#57534E] leading-relaxed">
              Paying expensive per-seat subscriptions for commercial tools that nobody on the frontline uses because they do not match real operating workflows.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. CORE CAPABILITIES */}
      <Section
        surface
        eyebrow="Solutions"
        title="What I build for clients."
        description="Focused, battle-tested solutions engineered directly around your actual operating workflows."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilities.map((cap) => (
            <ServiceCard
              key={cap.id}
              id={cap.id}
              title={cap.title}
              summary={cap.summary}
              outcomes={cap.outcomes}
              href={cap.href}
            />
          ))}
        </div>
      </Section>

      {/* 5. WHY WORK WITH ME */}
      <Section
        eyebrow="Why Choose An Independent Specialist"
        title="Senior execution. Predictable outcomes."
        description="A direct partnership focused on tangible business ROI, transparency, and complete technical ownership."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMe.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-[12px] border border-[#E7E5E4] bg-white p-6 hover:border-[#1D4ED8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#1D4ED8] mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[17px] font-semibold text-[#0C0A09] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#57534E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* 6. FEATURED CLIENT CASE STUDIES */}
      <Section
        surface
        eyebrow="Case Studies"
        title="Proven operational transformations."
        description="Real internal systems, automated pipelines, and cost avoidance delivered for enterprise operations."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {selectedWork.map((study) => (
            <WorkCard
              key={study.slug}
              slug={study.slug}
              frontmatter={study.frontmatter}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="secondary" size="lg" className="border border-[#E7E5E4] bg-white">
            <Link href="/work">
              View All Case Studies & Results
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* 7. HOW WE WORK TOGETHER */}
      <Section
        eyebrow="Process"
        title="How an engagement works."
        description="A transparent, low-risk process designed for speed, clarity, and zero consultant lock-in."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="border border-[#E7E5E4] rounded-[12px] p-6 sm:p-8 bg-white space-y-4 hover:border-[#1D4ED8] hover:shadow-xs transition-all"
            >
              <span className="text-[28px] font-bold text-[#1D4ED8] font-mono">
                {step.number}
              </span>
              <h3 className="text-[19px] font-semibold text-[#0C0A09]">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#57534E] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[12px] border border-[#BFDBFE] bg-[#EFF6FF] p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-[17px] font-semibold text-[#0C0A09]">
              Have a specific workflow bottleneck in mind?
            </h4>
            <p className="text-[14.5px] text-[#57534E] mt-0.5">
              Let&apos;s evaluate the technical requirements and approximate timeline together.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href="/contact">
              Schedule a 15-min chat
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* 8. LATEST WRITING */}
      {latestPosts.length > 0 && (
        <Section
          surface
          eyebrow="Writing"
          title="Practical operational insights."
          description="Essays on business automation, build vs. buy tradeoffs, and digital adoption."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                frontmatter={post.frontmatter}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="secondary">
              <Link href="/blog">
                Read all articles
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
      )}

      {/* 9. HIGH-CONVERTING BOTTOM CTA BAND */}
      <CTABand
        title="Ready to automate your operations?"
        description="Whether you have an approval backlog, fragmented reporting, or need a second opinion on systems architecture, let's look at one problem together."
        primaryAction={{
          label: "Book a 30-min discovery call",
          href: "/contact",
        }}
        secondaryAction={{
          label: "Email directly",
          href: `mailto:${siteConfig.email}?subject=Consulting%20Enquiry`,
        }}
      />
    </>
  );
}
