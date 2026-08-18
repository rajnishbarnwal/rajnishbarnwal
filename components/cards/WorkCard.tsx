import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CaseStudyFrontmatter } from "@/lib/content";

interface WorkCardProps {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
}

export function WorkCard({ slug, frontmatter }: WorkCardProps) {
  const { title, client, role, period, summary, tags } = frontmatter;

  return (
    <div className="group relative flex flex-col justify-between rounded-[16px] glass-panel-card p-6 sm:p-8 transition-all duration-200">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-neutral-400 mb-3">
          <span className="font-semibold text-blue-400 font-mono">{client}</span>
          <span className="text-neutral-500 font-mono text-xs">{period}</span>
        </div>

        <h3 className="text-[20px] sm:text-[22px] font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
          <Link href={`/work/${slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </Link>
        </h3>

        <p className="text-[13px] text-neutral-400 font-medium pt-1.5">
          Architecture: {role}
        </p>

        <p className="mt-4 text-[15px] text-neutral-300 leading-relaxed line-clamp-3">
          {summary}
        </p>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
          <span>Read case study</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}
