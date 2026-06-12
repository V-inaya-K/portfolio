import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/lib/portfolioData";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="A focused builder with a taste for premium experiences."
          description={portfolioData.about.professionalSummary}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <Card className="h-full border-border/60">
              <CardContent className="space-y-4">
                <p className="text-sm leading-8 text-muted-foreground sm:text-base">
                  {portfolioData.personal.summary}
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Career Goals
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground/85">
                      {portfolioData.about.careerGoals.map((goal) => (
                        <li key={goal} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                    <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Interests
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {portfolioData.about.interests.map((interest) => (
                        <span
                          key={interest}
                          className="rounded-full border border-border/60 px-3 py-1 text-xs text-foreground/80"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <Card className="h-full border-border/60">
              <CardContent className="space-y-3.5">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Snapshot</p>
                <div className="space-y-2.5 text-sm text-foreground/85">
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-3.5">
                    <p className="text-muted-foreground">Location</p>
                    <p className="mt-1 font-medium">{portfolioData.personal.location}</p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-3.5">
                    <p className="text-muted-foreground">Availability</p>
                    <p className="mt-1 font-medium">{portfolioData.personal.availability}</p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-3.5">
                    <p className="text-muted-foreground">Current Direction</p>
                    <p className="mt-1 font-medium">End-to-end scalable apps, agentic AI systems, and UI systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
