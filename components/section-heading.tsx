import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  className?: string;
};

export function SectionHeading({ eyebrow, className }: Props) {
  return (
    <div className={cn("mb-4 max-w-2xl", className)}>
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {eyebrow}
      </p>
    </div>
  );
}
