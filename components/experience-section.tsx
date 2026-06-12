import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolioData";

function ExperienceCard({
  title,
  subtitle,
  details,
  meta
}: {
  title: string;
  subtitle: string;
  details: string;
  meta: string;
}) {
  return (
    <Card className="h-full min-h-[11rem] border-border/60">
      <CardContent className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{subtitle}</p>
            <h3 className="mt-1 font-display text-xl font-semibold">{title}</h3>
          </div>
          <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
            {meta}
          </span>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{details}</p>
      </CardContent>
    </Card>
  );
}

function HackathonCard({
  title,
  issuer,
  description,
  year
}: {
  title: string;
  issuer: string;
  description: string;
  year: string;
}) {
  return (
    <Card className="h-full min-h-[11rem] border-border/60">
      <CardContent className="flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Hackathon</p>
            <h3 className="mt-1 font-display text-xl font-semibold">{title}</h3>
          </div>
          <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
            {year}
          </span>
        </div>
        <p className="text-sm font-medium text-foreground/85">{issuer}</p>
        <p className="text-sm leading-7 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Built through community, hackathons, and hands-on contribution."
          description="The cards below keep every entry the same visual width so the section feels calm and balanced."
        />

        <div className="space-y-8">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Community & Leadership
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
              {portfolioData.experience.map((item, index) => (
                <ScrollReveal key={item.company} delay={index * 0.06}>
                  <ExperienceCard
                    title={item.company}
                    subtitle={item.position}
                    details={item.description}
                    meta={item.dates}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Hackathons
            </p>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-2">
              {portfolioData.hackathons.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.06}>
                  <HackathonCard
                    title={item.title}
                    issuer={item.issuer}
                    description={item.description}
                    year={item.year}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
