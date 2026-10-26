import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  className?: string;
};

export function SectionHeading({ eyebrow, className }: Props) {
  return (
    <div className={cn("mb-7 max-w-2xl", className)}>
      <span className="font-cursive text-5xl text-foreground sm:text-6xl">{eyebrow}</span>
      <div className="mt-3 flex items-center gap-2.5">
        <span className="h-px w-12 bg-foreground/25" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground/70">
          section
        </span>
      </div>
    </div>
  );
}
