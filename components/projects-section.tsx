"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { portfolioData } from "@/lib/portfolioData";

export function ProjectsSection() {
  const categories = Array.from(new Set(portfolioData.projects.map((project) => project.category)));
  const filters = ["all", ...categories] as const;
  const [active, setActive] = useState<(typeof filters)[number]>("all");
  const projects = portfolioData.projects;

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  return (
    <section id="projects" className="scroll-mt-28 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds with strong visuals and practical utility."
          description="Each project card is designed to be scannable, informative, and easy to extend from the data file."
        />

        <div className="mb-5 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className="rounded-full border border-border/60 px-4 py-2 text-sm transition hover:bg-accent"
            >
              {filter}
              {active === filter ? " •" : ""}
            </button>
          ))}
        </div>

        <motion.div layout className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
