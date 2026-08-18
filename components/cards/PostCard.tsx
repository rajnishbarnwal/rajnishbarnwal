import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { PostFrontmatter } from "@/lib/content";

interface PostCardProps {
  slug: string;
  frontmatter: PostFrontmatter;
}

export function PostCard({ slug, frontmatter }: PostCardProps) {
  const { title, description, date, readingTime, tags } = frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group relative flex flex-col justify-between rounded-[16px] glass-panel-card p-6 sm:p-8 transition-all duration-200">
      <div>
        <div className="flex items-center justify-between gap-2 text-[13px] text-neutral-400 mb-3">
          <time dateTime={date} className="font-mono text-xs">{formattedDate}</time>
          <span className="flex items-center gap-1 font-mono text-xs text-neutral-400">
            <Clock className="h-3.5 w-3.5 text-blue-400" />
            {readingTime}
          </span>
        </div>

        <h3 className="text-[20px] sm:text-[22px] font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
          <Link href={`/blog/${slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </Link>
        </h3>

        <p className="mt-3 text-[15px] text-neutral-300 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[12px] px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-neutral-300 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
          Read post
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </article>
  );
}
