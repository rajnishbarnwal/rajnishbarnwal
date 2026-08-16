"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs transition-all duration-200",
        isScrolled ? "border-b border-[#E7E5E4] py-3.5 shadow-xs" : "py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="text-[19px] font-semibold tracking-tight text-[#0C0A09] hover:text-[#1D4ED8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-sm"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[15px] font-medium transition-colors hover:text-[#1D4ED8]",
                    isActive
                      ? "text-[#1D4ED8] font-semibold"
                      : "text-[#57534E]"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/contact">Book a call</Link>
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#57534E] hover:text-[#0C0A09] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-md"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-6 border-t border-[#E7E5E4] mt-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-3.5">
              {siteConfig.nav.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-[16px] py-1.5 font-medium transition-colors",
                      isActive
                        ? "text-[#1D4ED8] font-semibold"
                        : "text-[#57534E]"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <div className="pt-3">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Book a call
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
