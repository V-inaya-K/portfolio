import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolioData";

function BulletList({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <Card className="h-full border-border/60">
      <CardContent className="p-5 sm:p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{title}</p>
        <ul className="mt-4 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-foreground/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  const communityItems = portfolioData.experience.map(
    (item) => `${item.position} at ${item.company} (${item.dates})`
  );
  const hackathonItems = portfolioData.hackathons
    .slice(0, 4)
    .map((item) => `${item.title} - ${item.issuer} (${item.year})`);

  return (
    <section id="experience" className="scroll-mt-28 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
        />

        <div className="grid gap-4 md:grid-cols-2">
          <ScrollReveal>
            <BulletList title="Community & Leadership" items={communityItems} />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <BulletList title="Top Hackathons" items={hackathonItems} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
