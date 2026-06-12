import { SectionHeading } from "@/components/section-heading";
import { GitHubGraph } from "@/components/github-graph";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioData } from "@/lib/portfolioData";

export function GitHubSection() {
  return (
    <section id="github" className="scroll-mt-28 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GitHub"
          title="Signals from the codebase, the way a recruiter would actually scan them."
          description="Followers, repositories, streaks, and a contribution graph keep the section informative without feeling crowded."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <ScrollReveal>
            <GitHubGraph squares={portfolioData.github.contributionSquares} />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <Card className="border-border/60">
              <CardContent className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Followers
                    </p>
                    <p className="mt-2 font-display text-3xl font-semibold">
                      {portfolioData.github.followers}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      Repositories
                    </p>
                    <p className="mt-2 font-display text-3xl font-semibold">
                      {portfolioData.github.repositories}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Recent Projects
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground/85">
                    {portfolioData.github.recentProjects.map((project) => (
                      <li key={project} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Achievements
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {portfolioData.github.achievements.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/60 px-3 py-1 text-xs text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <ScrollReveal>
            <Card className="border-border/60">
              <CardContent>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Certifications
                </p>
                <div className="mt-3 space-y-3">
                  {portfolioData.certifications.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border/60 p-4">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.issuer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
