import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PostFrontmatter } from "@/lib/content";

interface PostCardProps {
  slug: string;
  frontmatter: PostFrontmatter;
}

export function PostCard({ slug, frontmatter }: PostCardProps) {
  const { title, description, date, readingTime, tags } = frontmatter;

  // Format date nicely
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group relative flex flex-col justify-between rounded-[10px] border border-[#E7E5E4] bg-white p-6 sm:p-8 hover:border-[#1D4ED8] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div>
        <div className="flex items-center justify-between gap-2 text-[13px] text-[#A8A29E] mb-3">
          <time dateTime={date}>{formattedDate}</time>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {readingTime}
          </span>
        </div>

        <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#0C0A09] group-hover:text-[#1D4ED8] transition-colors leading-snug">
          <Link href={`/blog/${slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </Link>
        </h3>

        <p className="mt-3 text-[15px] text-[#57534E] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#E7E5E4] flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[12px] font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1D4ED8]">
          Read post
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </article>
  );
}
