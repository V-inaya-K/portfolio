import { Badge } from "@/components/ui/badge";
import type { SkillGroup } from "@/lib/types";

function MarqueeRow({
  items,
  reverse = false
}: {
  items: string[];
  reverse?: boolean;
}) {
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-2 px-3 motion-safe:animate-marquee"
        style={{
          animationDuration: "84s",
          animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        {repeated.map((item, index) => (
          <Badge
            key={`${item}-${index}`}
            className="whitespace-nowrap border-border/40 bg-background/40 px-2.5 py-0.5 text-[11px] font-normal text-foreground/70"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function SkillsMarquee({ groups }: { groups: SkillGroup[] }) {
  const items = groups.flatMap((group) =>
    group.items.map((item) => `${group.category} · ${item}`)
  );

  const midpoint = Math.ceil(items.length / 2);
  const upperRow = items.slice(0, midpoint);
  const lowerRow = items.slice(midpoint);

  return (
    <div className="space-y-3 rounded-[2rem] border border-border/60 bg-card/50 py-3">
      <MarqueeRow items={upperRow} />
      <MarqueeRow items={lowerRow} reverse />
    </div>
  );
}
