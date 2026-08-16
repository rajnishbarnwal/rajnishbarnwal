import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#EFF6FF] text-[#1D4ED8] hover:bg-[#DBEAFE]",
        secondary:
          "border-[#E7E5E4] bg-[#FAFAF9] text-[#57534E] hover:bg-[#F5F5F4]",
        outline:
          "border border-[#E7E5E4] text-[#57534E] bg-transparent",
        accent:
          "border-transparent bg-[#1D4ED8] text-white",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
