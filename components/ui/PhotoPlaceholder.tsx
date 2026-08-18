"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Workflow, BarChart3, Layers, Database, Globe2 } from "lucide-react";

interface PhotoPlaceholderProps {
  className?: string;
  src?: string;
  alt?: string;
}

export function PhotoPlaceholder({
  className,
  src,
  alt = "Rajnish Barnwal — Systems & Automation Consultant",
}: PhotoPlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={cn("relative w-full max-w-[400px] mx-auto", className)}>
      {/* Ambient background glow aura */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#1D4ED8]/15 via-blue-500/10 to-indigo-500/5 rounded-[20px] blur-xl -z-10" />

      {/* Main card container */}
      <div className="rounded-[14px] border border-[#E7E5E4] bg-white/95 backdrop-blur-md p-6 sm:p-7 shadow-xl shadow-blue-950/[0.04]">
        {src && !hasError ? (
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] border border-[#E7E5E4] bg-[#FAFAF9] mb-5">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              className="object-cover transition-opacity duration-300"
              onError={() => setHasError(true)}
              priority
            />
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            {/* Top status indicator badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] font-semibold text-[#1D4ED8] mb-5 tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Independent Advisory · Global
            </div>

            {/* Monogram Avatar with Layered Depth */}
            <div className="relative mb-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#1E40AF] text-2xl font-bold tracking-tight text-white shadow-md shadow-blue-900/20 ring-4 ring-blue-50">
                RB
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-xs ring-2 ring-white">
                <Globe2 className="h-3.5 w-3.5" />
              </div>
            </div>

            {/* Identity & Global Role */}
            <h3 className="text-[19px] font-bold text-[#0C0A09] tracking-tight">
              Rajnish Barnwal
            </h3>
            <p className="text-[13.5px] font-semibold text-[#1D4ED8] mt-0.5">
              Systems & Automation Architect
            </p>
            <p className="text-[12.5px] text-[#78716C] mt-0.5">
              Serving Clients Across US, UK, Middle East & India
            </p>
          </div>
        )}

        {/* Live Systems Capabilities Matrix */}
        <div className="mt-5 pt-5 border-t border-[#F5F5F4]">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#A8A29E] mb-2.5 text-center">
            Core Technical Capabilities
          </p>
          <div className="grid grid-cols-2 gap-2 text-[12px] font-medium text-[#292524]">
            <div className="flex items-center gap-1.5 rounded-[7px] border border-[#E7E5E4] bg-[#FAFAF9] px-2.5 py-1.5">
              <Workflow className="h-3.5 w-3.5 text-[#1D4ED8] shrink-0" />
              <span className="truncate">n8n Automation</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-[7px] border border-[#E7E5E4] bg-[#FAFAF9] px-2.5 py-1.5">
              <BarChart3 className="h-3.5 w-3.5 text-[#1D4ED8] shrink-0" />
              <span className="truncate">Executive BI</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-[7px] border border-[#E7E5E4] bg-[#FAFAF9] px-2.5 py-1.5">
              <Layers className="h-3.5 w-3.5 text-[#1D4ED8] shrink-0" />
              <span className="truncate">Custom SaaS & Apps</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-[7px] border border-[#E7E5E4] bg-[#FAFAF9] px-2.5 py-1.5">
              <Database className="h-3.5 w-3.5 text-[#1D4ED8] shrink-0" />
              <span className="truncate">ERP & API Sync</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
