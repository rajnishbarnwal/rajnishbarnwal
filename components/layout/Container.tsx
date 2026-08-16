import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1120px] px-6 sm:px-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
