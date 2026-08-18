import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { ArrowUpRight, Bot, Cpu, Sparkles, Terminal, Layers } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0c0c0c] py-16 lg:py-20 text-neutral-400 relative overflow-hidden">
      {/* Background ambient radial grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)", 
          backgroundSize: "32px 32px" 
        }} 
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          {/* Brand Column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-[20px] font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-black">
                RB
              </span>
              <span className="font-mono tracking-tighter uppercase text-base">DIGITAL RAJNISH</span>
            </Link>
            <p className="text-[14.5px] leading-relaxed text-neutral-400 max-w-[36ch]">
              Business systems & automation consulting for high-growth and mid-market companies. AI to build, automation to run, systems to scale.
            </p>
            <div className="text-[13px] text-neutral-500 pt-2 space-y-1">
              <p>Pune, India · Serving Worldwide (US, UK, UAE, India)</p>
              <p className="text-blue-400 font-mono font-medium">{siteConfig.email}</p>
            </div>
          </div>

          {/* Topics / Solutions (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[12px] font-mono font-semibold uppercase tracking-widest text-neutral-500">
              SOLUTIONS
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/services#automation" className="hover:text-white transition-colors">
                  Workflow & n8n Automation
                </Link>
              </li>
              <li>
                <Link href="/services#mis" className="hover:text-white transition-colors">
                  Executive MIS & Live BI
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="hover:text-white transition-colors">
                  Bespoke Internal Tools & SaaS
                </Link>
              </li>
              <li>
                <Link href="/services#erp" className="hover:text-white transition-colors">
                  ERP & Systems Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Start Here (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-[12px] font-mono font-semibold uppercase tracking-widest text-neutral-500">
              START HERE
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Rajnish
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  The Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Legal (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[12px] font-mono font-semibold uppercase tracking-widest text-neutral-500">
              CONNECT
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  LinkedIn Profile
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500" />
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors text-neutral-500">
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Book a 30-min discovery call &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* AI Interaction Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[12px] font-mono font-semibold uppercase tracking-widest text-neutral-500">
            TECHNICAL EXPERTISE STACK
          </span>
          <div className="flex items-center gap-2.5 text-neutral-400">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-colors" title="AI Agents & Workflows">
              <Bot className="h-4 w-4 text-blue-400" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-colors" title="n8n Automation Engine">
              <Sparkles className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-colors" title="Custom Software & APIs">
              <Terminal className="h-4 w-4 text-sky-400" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-colors" title="Postgres & Data Pipelines">
              <Cpu className="h-4 w-4 text-purple-400" />
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-colors" title="Enterprise Systems Architecture">
              <Layers className="h-4 w-4 text-amber-400" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-neutral-600 text-center sm:text-left">
          <p>© {currentYear} DIGITAL RAJNISH. ALL RIGHTS RESERVED.</p>
          <p>PUNE, INDIA · SERVING WORLDWIDE</p>
          <p className="text-neutral-500">AI TO BUILD. AUTOMATION TO RUN. SYSTEMS TO SCALE.</p>
        </div>
      </Container>
    </footer>
  );
}
