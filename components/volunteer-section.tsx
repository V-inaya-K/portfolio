import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/lib/portfolioData";

export function VolunteerSection() {
  return (
    <section id="volunteer" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Volunteer Experience"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {portfolioData.volunteerExperience.map((item, index) => (
            <ScrollReveal key={item.company} delay={index * 0.04}>
              <Card className="h-full border-border/60">
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        {item.position}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold">{item.company}</h3>
                    </div>
                    <div className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                      {item.dates}
                    </div>
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
