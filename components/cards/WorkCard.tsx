import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CaseStudyFrontmatter } from "@/lib/content";

interface WorkCardProps {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
}

export function WorkCard({ slug, frontmatter }: WorkCardProps) {
  const { title, client, role, period, summary, tags } = frontmatter;

  return (
    <Card className="group relative flex flex-col justify-between hover:border-[#1D4ED8] hover:shadow-xs transition-all duration-180 bg-white">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2 text-[13px] text-[#A8A29E] mb-2">
          <span className="font-medium text-[#57534E]">{client}</span>
          <span>{period}</span>
        </div>

        <CardTitle className="text-[20px] sm:text-[22px] group-hover:text-[#1D4ED8] transition-colors leading-snug">
          <Link href={`/work/${slug}`} className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </Link>
        </CardTitle>

        <p className="text-[13px] text-[#78716C] font-medium pt-1">
          Role: {role}
        </p>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="text-[15px] text-[#57534E] leading-relaxed line-clamp-3">
          {summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[12px] font-normal">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="pt-4 border-t border-[#E7E5E4] flex items-center justify-between text-sm font-semibold text-[#1D4ED8]">
          <span>Read case study</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  );
}
