import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { CalEmbed } from "@/components/sections/CalEmbed";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/site";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Book a 30-Minute Discovery Call",
  description:
    "Get in touch with Rajnish Barnwal for digital transformation, n8n automation, MIS reporting, and systems consulting. Book a 30-minute introductory call.",
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ]}
      />

      <section className="pt-16 pb-24 lg:pt-24 lg:pb-32 bg-white">
        <Container>
          {/* Header */}
          <div className="max-w-[780px] mb-14">
            <p className="text-[12px] font-semibold uppercase tracking-[0.09em] text-[#1D4ED8] mb-3">
              Direct Contact & Scheduling
            </p>
            <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.1] mb-6">
              Let's talk about your operations.
            </h1>
            <p className="text-[18px] sm:text-[20px] text-[#57534E] leading-relaxed">
              Whether you have a specific workflow bottleneck or need a second opinion on software architecture, bring one problem and we'll look at it together.
            </p>
          </div>

          {/* 5 / 7 Asymmetric Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Form (5 cols) */}
            <div className="lg:col-span-5 rounded-[8px] border border-[#E7E5E4] bg-white p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <h2 className="text-[20px] sm:text-[22px] font-semibold text-[#0C0A09]">
                  Send a project enquiry
                </h2>
                <p className="text-[14px] text-[#57534E] mt-1">
                  Fill in your details below. I reply within one business day.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right: Booking Embed / Fallback (7 cols) */}
            <div className="lg:col-span-7">
              <CalEmbed />
            </div>
          </div>

          {/* Direct Contact Bar below */}
          <div className="mt-16 pt-10 border-t border-[#E7E5E4] grid grid-cols-1 sm:grid-cols-3 gap-6 text-[15px]">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-[#1D4ED8] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#0C0A09]">Email Directly</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#57534E] hover:text-[#1D4ED8] transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ArrowUpRight className="h-5 w-5 text-[#1D4ED8] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#0C0A09]">LinkedIn</p>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#57534E] hover:text-[#1D4ED8] transition-colors"
                >
                  linkedin.com/in/rajnishbarnwal
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#1D4ED8] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#0C0A09]">Location</p>
                <p className="text-[#57534E]">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
