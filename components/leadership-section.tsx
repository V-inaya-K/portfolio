import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/lib/portfolioData";

export function LeadershipSection() {
  return (
    <section id="leadership" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Leadership Experience" />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <ScrollReveal>
            <Card className="h-full border-border/60">
              <CardContent className="space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Team Leadership
                </p>
                <p className="text-sm leading-7 text-muted-foreground">
                  {portfolioData.leadershipExperience[0]?.description}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <Card className="h-full border-border/60">
              <CardContent className="space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Hackathon Highlights
                </p>
                <ul className="space-y-3 text-sm leading-7 text-foreground/85">
                  {portfolioData.hackathons.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>
                        <strong>{item.title}</strong> {item.issuer}. {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
