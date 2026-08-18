import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

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
  title = "Ready to automate your operations?",
  description = "Bring one workflow bottleneck that annoys your team and let's diagnose it in a 30-minute discovery call.",
  buttonText = "Book a 30-min discovery call",
  primaryAction,
  secondaryAction,
}: CTABandProps) {
  const pAction = primaryAction || {
    label: buttonText,
    href: "/contact",
  };

  const sAction = secondaryAction || {
    label: "See services & pricing",
    href: "/services",
  };

  return (
    <section className="bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE]/30 border-y border-[#DBEAFE] py-16 lg:py-24">
      <Container>
        <div className="max-w-[760px] mx-auto text-center space-y-6">
          <h2 className="text-[30px] sm:text-[38px] font-bold text-[#0C0A09] tracking-[-0.025em] leading-tight">
            {title}
          </h2>
          <p className="text-[17px] sm:text-[18px] text-[#57534E] leading-relaxed max-w-[62ch] mx-auto">
            {description}
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto shadow-md shadow-blue-900/10 h-12 text-base px-6">
              <Link href={pAction.href}>
                {pAction.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto border border-[#BFDBFE] bg-white hover:bg-[#FAFAF9] h-12 text-base px-6">
              <Link href={sAction.href}>
                {sAction.href.startsWith("mailto:") ? (
                  <>
                    <Mail className="mr-2 h-4 w-4 text-[#1D4ED8]" />
                    {sAction.label}
                  </>
                ) : (
                  sAction.label
                )}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
