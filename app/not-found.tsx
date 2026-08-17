import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found — Rajnish Barnwal",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <section className="pt-20 pb-24 lg:pt-32 lg:pb-36 bg-white min-h-[60vh] flex items-center">
      <Container>
        <div className="max-w-[580px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.09em] text-[#1D4ED8] mb-3 font-mono">
            404 Error
          </p>
          <h1 className="text-[32px] sm:text-[42px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.12] mb-4">
            Page not found.
          </h1>
          <p className="text-[17px] sm:text-[18px] text-[#57534E] leading-relaxed mb-8">
            The page you are looking for does not exist, has been moved, or the link is incorrect.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <Button asChild size="lg">
              <Link href="/">
                Return to homepage
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-[#E7E5E4]">
            <p className="text-[13px] font-medium text-[#A8A29E] uppercase tracking-wider mb-3">
              Explore other sections
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-[#1D4ED8]">
              <Link href="/services" className="hover:underline underline-offset-4">
                Services
              </Link>
              <Link href="/work" className="hover:underline underline-offset-4">
                Case Studies
              </Link>
              <Link href="/contact" className="hover:underline underline-offset-4">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
