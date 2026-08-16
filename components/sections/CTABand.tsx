import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABandProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTABand({
  title = "Not sure if it's worth automating?",
  description = "That's usually a 30-minute conversation, not a project. Bring one process that annoys you and we'll look at it together.",
  buttonText = "Book a 30-min call",
}: CTABandProps) {
  return (
    <section className="bg-[#EFF6FF] border-y border-[#DBEAFE] py-16 lg:py-24">
      <Container>
        <div className="max-w-[760px] mx-auto text-center space-y-6">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0C0A09] tracking-[-0.02em] leading-tight">
            {title}
          </h2>
          <p className="text-[17px] text-[#57534E] leading-relaxed max-w-[62ch] mx-auto">
            {description}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">
                {buttonText}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href="/services">
                See how I work
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
