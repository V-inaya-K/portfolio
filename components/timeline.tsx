import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import type { Experience } from "@/lib/types";

export function Timeline({ items }: { items: Experience[] }) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <ScrollReveal key={item.company} delay={index * 0.08}>
          <div className="grid gap-4 md:grid-cols-[1fr_3fr]">
            <div className="flex items-start gap-4 md:justify-end">
              <div className="mt-2 flex h-4 w-4 shrink-0 rounded-full border-4 border-background bg-foreground shadow" />
              <div className="hidden h-full w-px bg-gradient-to-b from-border via-border/20 to-transparent md:block" />
              <div className="md:text-right">
                <p className="font-display text-lg font-semibold">{item.company}</p>
                <p className="text-sm text-muted-foreground">{item.dates}</p>
              </div>
            </div>
            <Card className="border-border/60">
              <CardContent className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                      {item.position}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-semibold">{item.company}</h3>
                  </div>
                  <div className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                    {item.dates}
                  </div>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                <ul className="space-y-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-foreground/85">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

