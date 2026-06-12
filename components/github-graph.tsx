import { Card, CardContent } from "@/components/ui/card";

const shades = [
  "bg-border/40",
  "bg-emerald-500/30",
  "bg-emerald-500/50",
  "bg-emerald-500/70",
  "bg-emerald-400"
];

export function GitHubGraph({ squares }: { squares: number[] }) {
  return (
    <Card className="border-border/60">
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              GitHub Activity
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold">Contribution Graph</h3>
          </div>
          <div className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
            Past 12 months
          </div>
        </div>
        <div
          className="grid gap-1"
          style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}
        >
          {squares.map((value, index) => (
            <div
              key={`${value}-${index}`}
              className={`aspect-square rounded-[4px] ${shades[value] ?? shades[0]}`}
              title={`Contribution intensity ${value}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
