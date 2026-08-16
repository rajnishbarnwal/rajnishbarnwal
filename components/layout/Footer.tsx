import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E7E5E4] bg-[#FAFAF9] py-16 lg:py-20 text-[#57534E]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Col 1: Bio / Identity (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-[18px] font-semibold tracking-tight text-[#0C0A09] hover:text-[#1D4ED8] transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-[15px] leading-relaxed text-[#57534E] max-w-[42ch]">
              {siteConfig.tagline}
            </p>
            <p className="text-[13px] text-[#A8A29E]">
              Based in {siteConfig.location} · Working with clients across India
            </p>
          </div>

          {/* Col 2: Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.09em] text-[#A8A29E]">
              Navigation
            </p>
            <ul className="space-y-2.5 text-[15px]">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#1D4ED8] transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#1D4ED8] transition-colors text-[#78716C]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-[12px] font-medium uppercase tracking-[0.09em] text-[#A8A29E]">
              Direct Contact
            </p>
            <div className="space-y-2.5 text-[15px]">
              <div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1 text-[#0C0A09] font-medium hover:text-[#1D4ED8] transition-colors"
                >
                  {siteConfig.email}
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#A8A29E]" />
                </a>
              </div>
              <div>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#57534E] hover:text-[#1D4ED8] transition-colors"
                >
                  LinkedIn Profile
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#A8A29E]" />
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-sm font-medium text-[#1D4ED8] hover:underline underline-offset-4"
                >
                  Book a 30-min discovery call &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#A8A29E]">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
