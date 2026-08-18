"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";
import { Menu, X, ArrowRight } from "lucide-react";
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
        "fixed top-0 left-0 z-50 w-full bg-[#131313]/80 backdrop-blur-md transition-all duration-200 border-b",
        isScrolled ? "border-white/10 py-3.5 shadow-lg shadow-black/40" : "border-transparent py-4.5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 text-[18px] sm:text-[20px] font-extrabold tracking-tight text-white hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs font-black tracking-tighter shadow-md shadow-blue-500/20 ring-1 ring-white/20">
              RB
            </div>
            <span className="tracking-tighter uppercase font-mono text-sm sm:text-base text-neutral-100">
              DIGITAL RAJNISH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10 backdrop-blur-md" aria-label="Main Navigation">
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
                    "text-[13.5px] px-4 py-1.5 rounded-full transition-all duration-150 font-medium",
                    isActive
                      ? "bg-white/10 text-white font-semibold shadow-xs border border-white/10"
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Actions & CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full btn-primary text-white text-sm font-semibold hover:opacity-90 transition-all shadow-md shadow-blue-600/30"
            >
              Book a call
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
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
          <div className="md:hidden pt-4 pb-6 border-t border-white/10 mt-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <nav className="flex flex-col space-y-3">
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
                      "text-[15px] py-1.5 px-3 rounded-lg font-medium transition-colors",
                      isActive
                        ? "bg-white/10 text-white font-semibold"
                        : "text-neutral-400 hover:text-white"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <div className="pt-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 rounded-full btn-primary text-white text-sm font-semibold"
                >
                  Book a discovery call
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
