import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

interface ActionItem {
  label: string;
  href: string;
}

interface CTABandProps {
  title?: string;
  description?: string;
  buttonText?: string;
  primaryAction?: ActionItem;
  secondaryAction?: ActionItem;
}

export function CTABand({
  title = "Ready to build operations that run without you?",
  description = "Bring one workflow bottleneck that annoys your team and let's diagnose the automation roadmap in a 30-minute discovery call.",
  buttonText = "Book a 30-min discovery call",
  primaryAction,
  secondaryAction,
}: CTABandProps) {
  const pAction = primaryAction || {
    label: buttonText,
    href: "/contact",
  };

  const sAction = secondaryAction || {
    label: "Explore all services",
    href: "/services",
  };

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#101010] border-y border-white/10">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="max-w-[800px] mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-blue-400">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>DIRECT FOUNDER ARCHITECTURE · ZERO SALES REPS</span>
          </div>

          <h2 className="text-[32px] sm:text-[44px] font-extrabold text-white tracking-[-0.03em] leading-tight">
            {title}
          </h2>

          <p className="text-[17px] sm:text-[18px] text-neutral-300 leading-relaxed max-w-[62ch] mx-auto">
            {description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={pAction.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full btn-primary text-white font-semibold text-base hover:opacity-90 transition-opacity"
            >
              {pAction.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href={sAction.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full glass-panel text-white font-medium hover:bg-white/10 transition-colors border border-white/10 text-base"
            >
              {sAction.href.startsWith("mailto:") ? (
                <>
                  <Mail className="mr-2 h-4 w-4 text-blue-400" />
                  {sAction.label}
                </>
              ) : (
                sAction.label
              )}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
