import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[8px] text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#1D4ED8] text-white hover:bg-[#1E40AF] shadow-xs active:bg-[#1E40AF]",
        secondary:
          "bg-white text-[#0C0A09] border border-[#E7E5E4] hover:bg-[#FAFAF9] hover:border-[#D6D3D1] active:bg-[#F5F5F4]",
        ghost:
          "text-[#1D4ED8] hover:text-[#1E40AF] hover:underline underline-offset-4 p-0 h-auto font-medium",
        outline:
          "border border-[#E7E5E4] bg-transparent hover:bg-[#EFF6FF] hover:text-[#1D4ED8] hover:border-[#BFDBFE]",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-[8px] px-3.5 text-sm",
        lg: "h-12 rounded-[8px] px-6 text-base",
        icon: "h-10 w-10",
        link: "p-0 h-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
