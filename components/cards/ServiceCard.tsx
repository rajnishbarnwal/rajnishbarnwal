import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

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
    <Card className="group relative flex flex-col justify-between hover:border-[#1D4ED8] hover:shadow-xs transition-all duration-180 bg-white">
      <CardHeader>
        <CardTitle className="text-[20px] sm:text-[22px] group-hover:text-[#1D4ED8] transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="pt-1.5 text-[15px] font-normal text-[#57534E]">
          {summary}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col justify-between flex-1">
        <ul className="space-y-2.5 text-[14px] text-[#57534E] mb-6">
          {outcomes.map((outcome, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-[#1D4ED8]">
                <Check className="h-3 w-3" />
              </span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-[#E7E5E4]">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] group-hover:translate-x-0.5 transition-transform"
          >
            Learn more about {title.toLowerCase()}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
