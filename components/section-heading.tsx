import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <div className={cn("mb-5 max-w-2xl", className)}>
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
