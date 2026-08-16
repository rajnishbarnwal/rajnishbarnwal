import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-[8px] border border-[#E7E5E4] bg-white px-3.5 py-2 text-[15px] text-[#0C0A09] shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#A8A29E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:border-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
