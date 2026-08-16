import React from "react";
import { cn } from "@/lib/utils";

interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Prose({ className, children, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "prose max-w-[68ch] text-[17px] leading-[1.75] text-[#57534E]",
        // Headings
        "[&_h1]:text-[32px] [&_h1]:sm:text-[40px] [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-[#0C0A09] [&_h1]:mb-6 [&_h1]:mt-10",
        "[&_h2]:text-[24px] [&_h2]:sm:text-[28px] [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-[#0C0A09] [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:pt-4 [&_h2]:border-t [&_h2]:border-[#E7E5E4]",
        "[&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:text-[#0C0A09] [&_h3]:mb-3 [&_h3]:mt-6",
        // Paragraphs & lists
        "[&_p]:mb-6 [&_p]:leading-[1.75]",
        "[&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2",
        "[&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2",
        "[&_li]:text-[#57534E] [&_li]:leading-relaxed",
        // Blockquotes
        "[&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-[#1D4ED8] [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-[#0C0A09] [&_blockquote]:bg-[#FAFAF9] [&_blockquote]:py-3 [&_blockquote]:rounded-r-sm",
        // Strong & Emphasis
        "[&_strong]:font-semibold [&_strong]:text-[#0C0A09]",
        "[&_em]:italic",
        // Links
        "[&_a]:font-medium [&_a]:text-[#1D4ED8] [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-[#1E40AF]",
        // Code
        "[&_code]:rounded-[4px] [&_code]:bg-[#FAFAF9] [&_code]:border [&_code]:border-[#E7E5E4] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[14px] [&_code]:font-mono [&_code]:text-[#0C0A09]",
        "[&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-[8px] [&_pre]:border [&_pre]:border-[#E7E5E4] [&_pre]:bg-[#FAFAF9] [&_pre]:p-4 [&_pre_code]:border-0 [&_pre_code]:bg-transparent [&_pre_code]:p-0",
        // HR
        "[&_hr]:my-10 [&_hr]:border-[#E7E5E4]",
        // Table
        "[&_table]:my-8 [&_table]:w-full [&_table]:text-left [&_table]:text-sm",
        "[&_th]:border-b [&_th]:border-[#E7E5E4] [&_th]:pb-3 [&_th]:font-semibold [&_th]:text-[#0C0A09]",
        "[&_td]:border-b [&_td]:border-[#E7E5E4] [&_td]:py-3 [&_td]:text-[#57534E]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
