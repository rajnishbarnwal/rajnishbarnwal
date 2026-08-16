"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  className?: string;
  src?: string;
  alt?: string;
}

export function PhotoPlaceholder({
  className,
  src = "/rajnish.jpg",
  alt = "Rajnish Barnwal — Digital Transformation Consultant",
}: PhotoPlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full max-w-[380px] mx-auto overflow-hidden rounded-[8px] border border-[#E7E5E4] bg-[#FAFAF9]",
        className
      )}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-opacity duration-300"
          onError={() => setHasError(true)}
          priority
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-2xl font-semibold tracking-tight text-[#1D4ED8] mb-4">
            RB
          </div>
          <p className="text-[17px] font-semibold text-[#0C0A09]">
            Rajnish Barnwal
          </p>
          <p className="mt-1 text-[13px] text-[#57534E]">
            Manager – IT & Digitalisation
          </p>
          <p className="text-[12px] text-[#A8A29E] mt-0.5">
            Shubham EPC · Pune, India
          </p>
        </div>
      )}
    </div>
  );
}
