import { SectionHeading } from "@/components/section-heading";
import { SkillsMarquee } from "@/components/skills-marquee";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolioData";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A wide toolkit, organized by the problems it solves."
          description="The marquee keeps motion alive while the cards keep the stack readable and modular."
        />
        <ScrollReveal>
          <SkillsMarquee groups={portfolioData.skills} />
        </ScrollReveal>
        <ScrollReveal className="mt-4">
          <Card className="border-border/50 bg-card/60">
            <CardContent className="space-y-7 p-5 sm:p-6 lg:p-7">
              {portfolioData.skills.map((group, index) => (
                <div
                  key={group.category}
                  className={index === portfolioData.skills.length - 1 ? "" : "pb-5 border-b border-border/40"}
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    {group.category}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/50 bg-background/50 px-2.5 py-1 text-[11px] leading-none text-foreground/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
