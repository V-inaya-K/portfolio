import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  label: string;
  children: ReactNode;
  className?: string;
};

export function Tooltip({ label, children, className }: Props) {
  return (
    <span className={cn("group relative inline-flex", className)}>
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-1 rounded-full border border-border/60 bg-background px-3 py-1 text-xs text-foreground opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
        {label}
      </span>
    </span>
  );
}

