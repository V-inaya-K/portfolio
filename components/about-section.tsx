 "use client";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { portfolioData } from "@/lib/portfolioData";

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="scroll-mt-28 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <Card className="h-full border-border/60">
              <CardContent className="space-y-4 p-5 sm:p-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  {portfolioData.personal.summary}
                </p>
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      Focus
                    </p>
                    <p className="mt-2 text-sm text-foreground/85">
                      End-to-end scalable apps and agentic AI systems.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      Interests
                    </p>
                    <p className="mt-2 text-sm text-foreground/85">
                      UI systems, performance, hackathons, and open source.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      Goals
                    </p>
                    <p className="mt-2 text-sm text-foreground/85">
                      Ship fast, build clean, and keep learning through real teams.
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setExpanded((value) => !value)}
                >
                  {expanded ? "Show less" : "Show more details"}
                </Button>
                {expanded ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                        Career Goals
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-foreground/85">
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
                ) : null}
              </CardContent>
            </Card>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <Card className="h-full border-border/60">
              <CardContent className="space-y-3.5 p-5 sm:p-6">
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
