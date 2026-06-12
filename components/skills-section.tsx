"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolioData";

export function SkillsSection() {
  const [expanded, setExpanded] = useState(false);
  const previewGroups = portfolioData.skills.slice(0, 2);
  const visibleGroups = expanded ? portfolioData.skills : previewGroups;

  return (
    <section id="skills" className="scroll-mt-28 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
        />
        <ScrollReveal className="mt-3">
          <Card className="border-border/50 bg-card/60">
            <CardContent className="space-y-4 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  {expanded ? "Full skill set" : "Preview"}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  onClick={() => setExpanded((value) => !value)}
                >
                  {expanded ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      View all skills
                    </>
                  )}
                </Button>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {visibleGroups.map((group) => {
                  const sampleItems = expanded ? group.items : group.items.slice(0, 2);
                  const extraCount = expanded ? 0 : Math.max(group.items.length - sampleItems.length, 0);

                  return (
                  <div key={group.category} className="rounded-2xl border border-border/40 bg-background/50 p-4">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      {group.category}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {sampleItems.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border/50 bg-background/60 px-2.5 py-1 text-[11px] leading-none text-foreground/75"
                        >
                          {item}
                        </span>
                      ))}
                      {extraCount > 0 ? (
                        <span className="rounded-full border border-dashed border-border/50 bg-background/60 px-2.5 py-1 text-[11px] leading-none text-foreground/60">
                          +{extraCount} more
                        </span>
                      ) : null}
                    </div>
                  </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
