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
        "py-20 lg:py-32 scroll-mt-24",
        surface ? "bg-[#FAFAF9]" : "bg-white",
        className
      )}
      {...props}
    >
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <div className={cn("mb-12 lg:mb-16", headerClassName)}>
            {eyebrow && (
              <p className="text-[12px] font-medium uppercase tracking-[0.09em] text-[#A8A29E] mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-semibold tracking-[-0.02em] text-[#0C0A09] leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-[17px] text-[#57534E] leading-relaxed max-w-[68ch]">
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
