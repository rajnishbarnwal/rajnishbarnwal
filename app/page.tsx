import React from "react";
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
import { ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Calendar, Clock, Globe } from "lucide-react";

export default async function HomePage() {
  const caseStudies = await getAllCaseStudies();
  const posts = await getAllPosts();

  const selectedWork = caseStudies.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  const capabilities = [
    {
      id: "automation",
      title: "Process Automation",
      summary: "Repetitive work handled by workflows instead of people.",
      outcomes: [
        "Automated approvals and cross-team handoffs",
        "System-to-system data sync eliminating manual re-keying",
        "Scheduled reports that compile and send themselves",
        "Built primarily on secure, self-hosted n8n",
      ],
      href: "/services#automation",
    },
    {
      id: "ai",
      title: "AI & LLM Applications",
      summary: "Practical AI on your own data — not a chatbot demo.",
      outcomes: [
        "Internal assistants that answer accurately from your documents (RAG)",
        "Automated document, PO, and incoming email processing",
        "Drafting and summarisation workflows built directly into existing tools",
      ],
      href: "/services#ai",
    },
    {
      id: "mis",
      title: "MIS & Decision Dashboards",
      summary: "One screen that leadership actually trusts.",
      outcomes: [
        "Single source of truth across siloed business software",
        "Daily/weekly KPI reporting without manual preparation time",
        "Exception alerts instead of manual report-chasing",
      ],
      href: "/services#mis",
    },
    {
      id: "erp",
      title: "ERP & Systems Integration",
      summary: "Making the systems you already paid for work together.",
      outcomes: [
        "ERP evaluation and vendor selection advisory",
        "Rollout planning and frontline change management",
        "Integrations between ERP, HR, finance, and field operations",
      ],
      href: "/services#erp",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery call (30 min, free)",
      description:
        "You describe where time is going. I tell you honestly whether I can help, and roughly what it would take.",
    },
    {
      number: "02",
      title: "Diagnostic (1–2 weeks)",
      description:
        "I map your current process, talk to the people doing the work, and come back with a prioritised roadmap — including what not to build.",
    },
    {
      number: "03",
      title: "Build & rollout",
      description:
        "Fixed scope, agreed milestones. Shipped in usable pieces, with your team involved from day one so adoption isn't a surprise at the end.",
    },
    {
      number: "04",
      title: "Handover",
      description:
        "Documentation, training, and full ownership. You should not need me on retainer to keep it running. Ongoing advisory only if you want it.",
    },
  ];

  return (
    <>
      <PersonJsonLd />
      <ProfessionalServiceJsonLd />

      {/* 1. HERO SECTION */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.09em] text-[#1D4ED8] bg-[#EFF6FF] px-3 py-1 rounded-full inline-block border border-[#DBEAFE]">
                Digital Transformation Consultant · Pune, India
              </p>

              <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.08]">
                Digital transformation that actually gets used.
              </h1>

              <p className="text-[17px] sm:text-[18px] text-[#57534E] leading-relaxed max-w-[62ch]">
                I help mid-sized companies cut out manual work with automation, AI, and internal systems — built around how your team already works, so adoption isn't an afterthought.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Book a 30-min call
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/services">See how I work</Link>
                </Button>
              </div>
            </div>

            {/* Right Col (5 cols): Photo Placeholder */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <PhotoPlaceholder />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CREDIBILITY STRIP */}
      <section className="border-y border-[#E7E5E4] bg-[#FAFAF9] py-5 text-[#57534E]">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] sm:text-[14px] text-center font-medium">
            {siteConfig.credentials.map((cred, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[#0C0A09]">{cred}</span>
                {idx < siteConfig.credentials.length - 1 && (
                  <span className="hidden sm:inline text-[#A8A29E]" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. THE PROBLEM */}
      <Section
        eyebrow="The Real Problem"
        title="It's rarely a software problem."
        description="Most mid-sized companies have plenty of tools. The breakdown happens in the spaces between them and on the shop floor."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Problem 01 */}
          <div className="border border-[#E7E5E4] rounded-[8px] p-6 sm:p-8 bg-white space-y-4">
            <span className="text-[28px] font-semibold text-[#1D4ED8] font-mono">
              01
            </span>
            <h3 className="text-[19px] font-semibold text-[#0C0A09]">
              The data exists, nobody can see it.
            </h3>
            <p className="text-[15px] text-[#57534E] leading-relaxed">
              Numbers live in five different Excel files and one person's inbox. By the time a report reaches leadership, it's a week old and already disputed.
            </p>
          </div>

          {/* Problem 02 */}
          <div className="border border-[#E7E5E4] rounded-[8px] p-6 sm:p-8 bg-white space-y-4">
            <span className="text-[28px] font-semibold text-[#1D4ED8] font-mono">
              02
            </span>
            <h3 className="text-[19px] font-semibold text-[#0C0A09]">
              Your team is the integration layer.
            </h3>
            <p className="text-[15px] text-[#57534E] leading-relaxed">
              People copy data between systems by hand, chase approvals on WhatsApp, and re-key the same information three times. That's not a workflow — that's a salary spent on data entry.
            </p>
          </div>

          {/* Problem 03 */}
          <div className="border border-[#E7E5E4] rounded-[8px] p-6 sm:p-8 bg-white space-y-4">
            <span className="text-[28px] font-semibold text-[#1D4ED8] font-mono">
              03
            </span>
            <h3 className="text-[19px] font-semibold text-[#0C0A09]">
              You bought the software. Nobody uses it.
            </h3>
            <p className="text-[15px] text-[#57534E] leading-relaxed">
              Most transformation projects don't fail technically. They fail because nobody asked the people doing the work what would actually help.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. WHAT I DO */}
      <Section
        surface
        eyebrow="Capabilities"
        title="Four things, done properly."
        description="Focused technical solutions designed around actual operating workflows."
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

      {/* 5. WHY ME */}
      <Section
        eyebrow="Why Work With Me"
        title="I've been on both sides of the table."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: 4 short paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[17px] text-[#57534E] leading-relaxed">
            <p>
              I spent nine years in marketing and growth before moving into IT — including four years running my own company. I've been the person who needed the report, not just the person building it.
            </p>
            <p>
              Today I lead IT and digitalisation at an EPC company, where I've automated internal workflows with n8n, built MIS dashboards for leadership, run ERP integrations and vendor evaluations, and I'm currently building an in-house HRMS to replace paid commercial software.
            </p>
            <p>
              That means I've done this work inside a real operating business, with real budget constraints and real people who didn't ask for a new system. Not as a slide deck.
            </p>
            <p>
              I take on a small number of outside engagements at a time, so the ones I take get proper attention.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:underline underline-offset-4"
              >
                Read my background and story &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Sticky Facts Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-[8px] border border-[#E7E5E4] bg-[#FAFAF9] p-6 sm:p-8 space-y-5">
              <h3 className="text-[17px] font-semibold text-[#0C0A09] uppercase tracking-wider text-xs text-[#A8A29E]">
                Engagement Profile
              </h3>
              <ul className="space-y-3.5 text-[15px] text-[#0C0A09]">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span>Based in Pune, works with clients across India</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span>Available for project-based and advisory work</span>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span>Typical first engagement: 2–6 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                  <span>Languages: English, Hindi, Marathi</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#E7E5E4]">
                <Button asChild className="w-full">
                  <Link href="/contact">Book a discovery call</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. SELECTED WORK */}
      <Section
        surface
        eyebrow="Selected Work"
        title="What this looks like in practice."
        description="Real operational systems delivered in-house. Confidential metrics generalized."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {selectedWork.map((study) => (
            <WorkCard
              key={study.slug}
              slug={study.slug}
              frontmatter={study.frontmatter}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="secondary">
            <Link href="/work">
              View all case studies
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* 7. HOW WE'D WORK TOGETHER */}
      <Section
        eyebrow="The Process"
        title="No 40-page proposals."
        description="A structured, four-step approach focused on rapid diagnostic and real adoption."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="border-t-2 border-[#1D4ED8] pt-6 space-y-3"
            >
              <span className="text-[13px] font-mono font-semibold text-[#1D4ED8]">
                Step {step.number}
              </span>
              <h3 className="text-[18px] font-semibold text-[#0C0A09] leading-snug">
                {step.title}
              </h3>
              <p className="text-[15px] text-[#57534E] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. LATEST WRITING */}
      {latestPosts.length > 0 && (
        <Section
          surface
          eyebrow="Latest Writing"
          title="Thoughts on systems and operations."
          description="Practical essays on automation, software procurement, and building internal tools."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {latestPosts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                frontmatter={post.frontmatter}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="secondary">
              <Link href="/blog">
                Read all articles
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Section>
      )}

      {/* 9. CTA BAND */}
      <CTABand />
    </>
  );
}
