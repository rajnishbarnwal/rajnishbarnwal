import React from "react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  surface?: boolean;
  containerClassName?: string;
  headerClassName?: string;
  id?: string;
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  surface = false,
  className,
  containerClassName,
  headerClassName,
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 lg:py-28 scroll-mt-24 relative",
        surface ? "bg-[#161616] border-y border-white/[0.06]" : "bg-[#131313]",
        className
      )}
      {...props}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div className={cn("mb-12 lg:mb-16 max-w-3xl", headerClassName)}>
            {eyebrow && (
              <p className="text-[12px] font-mono font-semibold uppercase tracking-widest text-blue-400 mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold tracking-[-0.03em] text-white leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-[16px] sm:text-[17px] text-neutral-400 leading-relaxed max-w-[65ch]">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
