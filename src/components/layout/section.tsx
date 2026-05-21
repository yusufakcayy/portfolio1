import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  crossNav?: boolean;
}

export function Section({ className, children, id, crossNav, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 lg:py-32 w-full",
        crossNav && "scroll-mt-24", // To account for sticky navbar
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
