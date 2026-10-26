"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/lib/portfolioData";

const ease = [0.22, 1, 0.36, 1] as const;

function ExperienceCard({
  company,
  position,
  dates,
  description,
  highlights,
  logo,
  expanded,
  onToggle
}: {
  company: string;
  position: string;
  dates: string;
  description: string;
  highlights: string[];
  logo: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease }}
      className="group relative overflow-hidden rounded-2xl border border-white/25 bg-card/60 transition-all duration-300 hover:border-foreground/25 hover:shadow-xl"
    >
      <button
        onClick={onToggle}
        aria-expanded={expanded}
        className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
      >
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/25 bg-background/80 shadow-sm transition-transform duration-300 group-hover:scale-105">
          {logo ? (
            <Image src={logo} alt={`${company} logo`} width={100} height={100} className="h-full w-full object-cover" />
          ) : (
            <span className="flex h-full w-full items-center justify-center font-display text-xl font-bold text-foreground/70">
              {company.charAt(0)}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="font-display text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-foreground sm:text-xl">
              {position}
            </h3>
            <span className="text-sm font-medium text-muted-foreground">{company}</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 shrink-0" />
            <span>{dates}</span>
          </div>
        </div>

        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease }}
          className="mt-1.5 shrink-0 rounded-full border border-white/25 p-1.5 text-muted-foreground transition-colors duration-200 group-hover:border-foreground/30 group-hover:text-foreground"
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="overflow-hidden"
          >
            <div className="border-t border-border/40 px-5 pb-5 sm:px-6">
              <p className="pt-4 text-sm leading-6 text-muted-foreground">{description}</p>
              {highlights.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {highlights.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-6 text-foreground/85">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const items = portfolioData.experience;

  return (
    <section id="experience" className="scroll-mt-28 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" />

        <div className="space-y-3">
          {items.map((item, i) => (
            <ScrollReveal key={`${item.company}-${item.position}`} delay={i * 0.07}>
              <ExperienceCard
                company={item.company}
                position={item.position}
                dates={item.dates}
                description={item.description}
                highlights={item.highlights}
                logo={item.logo}
                expanded={expandedIndex === i}
                onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
