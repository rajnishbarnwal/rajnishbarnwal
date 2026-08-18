import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export interface ServiceCardProps {
  id: string;
  title: string;
  summary: string;
  outcomes: string[];
  href: string;
}

export function ServiceCard({
  title,
  summary,
  outcomes,
  href,
}: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-[16px] glass-panel-card p-6 sm:p-8 transition-all duration-200">
      <div>
        <h3 className="text-[20px] sm:text-[22px] font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="pt-2 text-[15px] font-normal text-neutral-400 leading-relaxed">
          {summary}
        </p>

        <ul className="mt-6 space-y-3 text-[14px] text-neutral-300">
          {outcomes.map((outcome, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                <Check className="h-3 w-3" />
              </span>
              <span className="leading-snug">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4 border-t border-white/10">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
        >
          Explore {title.toLowerCase()}
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
