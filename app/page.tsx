import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { WorkCard } from "@/components/cards/WorkCard";
import { PostCard } from "@/components/cards/PostCard";
import { CTABand } from "@/components/sections/CTABand";
import { PersonJsonLd, ProfessionalServiceJsonLd } from "@/components/seo/JsonLd";
import { getAllCaseStudies, getAllPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { ArrowRight, Workflow, BarChart3, Layers, Database, Shield, Zap, Globe2, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Rajnish Barnwal | AI, Systems & Automation for Founders",
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
      summary: "Connect your disjointed software tools and eliminate manual busywork with self-hosted n8n pipelines.",
      outcomes: [
        "Multi-stage approval flows across Email, WhatsApp & Slack",
        "System-to-system data sync eliminating duplicate manual data entry",
        "Nightly scheduled ETL pipelines and automated exception alerts",
        "Zero per-execution cloud tax with robust self-hosted architecture",
      ],
      href: "/services#automation",
    },
    {
      id: "mis",
      title: "Executive MIS & Real-Time BI",
      summary: "A single, auditable source of truth for leadership that updates automatically in real time.",
      outcomes: [
        "Live executive dashboards replacing messy, disputed spreadsheets",
        "Automated extraction directly from operational and financial databases",
        "Instant visibility into project margins, billing status, and burn rates",
        "Early warning exception alerts before budget overruns occur",
      ],
      href: "/services#mis",
    },
    {
      id: "apps",
      title: "Bespoke Internal SaaS & Tools",
      summary: "Custom web applications built around your exact workflows, eliminating expensive per-seat SaaS costs.",
      outcomes: [
        "Tailored web apps built with Next.js, TypeScript & PostgreSQL",
        "Mobile-first responsive interfaces built for shop floor & field teams",
        "Role-based access control (RBAC) and clean audit logging",
        "100% intellectual property, source code, and data ownership",
      ],
      href: "/services#ai",
    },
    {
      id: "erp",
      title: "ERP & Systems Integration",
      summary: "Bridging legacy systems, accounting software, and modern cloud APIs into unified operations.",
      outcomes: [
        "Unbiased vendor evaluation and pragmatic architecture roadmap",
        "Custom middleware and bi-directional REST API connectors",
        "Frontline team change management for high adoption from day one",
        "Clean data migration without getting trapped in proprietary vendor fees",
      ],
      href: "/services#erp",
    },
  ];

  const whyWorkWithMe = [
    {
      icon: Zap,
      title: "Direct Specialist Execution",
      description:
        "You work directly with the architect and builder. No account managers, junior handoffs, or bloated agency overhead.",
    },
    {
      icon: Shield,
      title: "Fixed Scope, Zero Surprise Invoices",
      description:
        "Every project has clear milestones, predictable timelines, and transparent fixed deliverables.",
    },
    {
      icon: Globe2,
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
        "We pinpoint your single biggest operational bottleneck and evaluate technical feasibility immediately.",
    },
    {
      number: "02",
      title: "Fixed-Milestone Sprint",
      description:
        "Rapid architecture, build, and team-testing in testable 2 to 4-week delivery sprints.",
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

      {/* 1. HERO SECTION (Dark Cybernetic Executive) */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-32 mesh-bg overflow-hidden">
        <Container>
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 mb-8 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
                PUNE, INDIA & WORLDWIDE · GLOBAL CONSULTING
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[38px] sm:text-[56px] lg:text-[72px] font-extrabold text-white tracking-[-0.035em] leading-[1.08] mb-6">
              A business that does not<br />
              need <span className="italic gradient-text">you</span> in the room.
            </h1>

            {/* Subheadline Tagline */}
            <p className="text-[20px] sm:text-[24px] text-neutral-300 mb-6 font-semibold tracking-tight">
              <span className="text-blue-400 font-bold">AI</span> to build.{" "}
              <span className="text-blue-400 font-bold">Automation</span> to run.{" "}
              <span className="text-blue-400 font-bold">Systems</span> to scale.
            </p>

            {/* Target Audience & Pitch Description */}
            <p className="text-[16px] sm:text-[18px] text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              For founder-led service and mid-market companies (India & Worldwide), where daily operational follow-ups, fragmented spreadsheets, and approvals still bottleneck through leadership.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full btn-primary text-white font-semibold text-base hover:opacity-95 transition-all"
              >
                Work with me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-colors border border-white/10 text-base"
              >
                Explore case studies
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                Zero Agency Markup
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                Fixed-Price Sprints
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                100% Code & IP Ownership
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-400" />
                US, UK, UAE & India Timezones
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SOCIAL PROOF & CAPABILITIES STRIP */}
      <section className="border-y border-white/10 bg-[#0e0e0e] py-8 text-neutral-400">
        <Container>
          <div className="text-center mb-6">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              PROVEN ENTERPRISE ARCHITECTURE & IMPLEMENTATION STACK
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center hover:border-blue-500/30 transition-colors">
              <Workflow className="h-5 w-5 text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-white">n8n Orchestration</p>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">Self-Hosted Workflows</p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center hover:border-blue-500/30 transition-colors">
              <BarChart3 className="h-5 w-5 text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-white">Executive BI Hub</p>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">Real-Time Data Pipelines</p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center hover:border-blue-500/30 transition-colors">
              <Layers className="h-5 w-5 text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-white">In-House SaaS Apps</p>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">Next.js & PostgreSQL</p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center hover:border-blue-500/30 transition-colors">
              <Database className="h-5 w-5 text-blue-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-white">ERP & API Connectors</p>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">Bi-Directional Sync</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. WHERE OPERATIONS BREAK DOWN */}
      <Section
        eyebrow="The Bottlenecks"
        title="Where operations break down."
        description="Most mid-sized companies have plenty of software tools. The breakdown happens in the manual gaps between them."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel-card rounded-[16px] p-6 sm:p-8 space-y-4">
            <span className="text-[26px] font-bold text-blue-400 font-mono">01</span>
            <h3 className="text-[19px] font-bold text-white">
              Fragmented Data & Blind Spots
            </h3>
            <p className="text-[15px] text-neutral-400 leading-relaxed">
              Critical numbers live scattered across five spreadsheets and buried inbox threads. By the time leadership gets a report, it is already outdated.
            </p>
          </div>

          <div className="glass-panel-card rounded-[16px] p-6 sm:p-8 space-y-4">
            <span className="text-[26px] font-bold text-blue-400 font-mono">02</span>
            <h3 className="text-[19px] font-bold text-white">
              Manual Data Re-Entry Layers
            </h3>
            <p className="text-[15px] text-neutral-400 leading-relaxed">
              Staff spend half their week copying data between software, chasing approvals on chat apps, and re-keying identical records across systems.
            </p>
          </div>

          <div className="glass-panel-card rounded-[16px] p-6 sm:p-8 space-y-4">
            <span className="text-[26px] font-bold text-blue-400 font-mono">03</span>
            <h3 className="text-[19px] font-bold text-white">
              Expensive SaaS Bloat & Low Adoption
            </h3>
            <p className="text-[15px] text-neutral-400 leading-relaxed">
              Paying expensive per-seat subscriptions for commercial tools that nobody on the frontline uses because they do not match real operating workflows.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. SOLUTIONS I BUILD */}
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

      {/* 5. WHY CHOOSE AN INDEPENDENT SPECIALIST */}
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
                className="rounded-[16px] glass-panel-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 mb-4 border border-blue-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-neutral-400 leading-relaxed">
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
          <Link
            href="/work"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full glass-panel text-white font-semibold hover:bg-white/10 transition-colors border border-white/10"
          >
            View All Case Studies & Results
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* 7. HOW AN ENGAGEMENT WORKS */}
      <Section
        eyebrow="Process"
        title="How an engagement works."
        description="A transparent, low-risk process designed for speed, clarity, and zero consultant lock-in."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="glass-panel-card rounded-[16px] p-6 sm:p-8 space-y-4"
            >
              <span className="text-[28px] font-bold text-blue-400 font-mono">
                {step.number}
              </span>
              <h3 className="text-[19px] font-bold text-white">
                {step.title}
              </h3>
              <p className="text-[15px] text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[16px] border border-blue-500/30 bg-blue-950/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-md">
          <div className="text-left">
            <h4 className="text-[18px] font-bold text-white">
              Have a specific workflow bottleneck in mind?
            </h4>
            <p className="text-[14.5px] text-neutral-400 mt-1">
              Let&apos;s evaluate the technical requirements and approximate timeline together.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-full btn-primary text-white text-sm font-semibold hover:opacity-95 transition-all"
          >
            Schedule a 15-min chat
            <ArrowRight className="inline-block ml-1.5 h-4 w-4" />
          </Link>
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
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-colors border border-white/10"
            >
              Read all articles
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </Section>
      )}

      {/* 9. BOTTOM CTA BAND */}
      <CTABand
        title="Ready to build operations that run without you?"
        description="Whether you have an approval backlog, fragmented reporting, or need a second opinion on systems architecture, let's diagnose it together."
        primaryAction={{
          label: "Work with me",
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
