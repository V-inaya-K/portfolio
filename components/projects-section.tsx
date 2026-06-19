"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/portfolioData";

export function ProjectsSection() {
  const categories = Array.from(new Set(portfolioData.projects.map((project) => project.category)));
  const filters = ["all", ...categories] as const;
  const [active, setActive] = useState<(typeof filters)[number]>("all");
  const [showAll, setShowAll] = useState(false);
  const projects = portfolioData.projects;
  const featuredProject = projects[0];

  const filtered = useMemo(() => {
    if (active === "all") return projects;
    return projects.filter((project) => project.category === active);
  }, [active, projects]);

  const visibleProjects = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-28 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
        />

        {/* <div className="mb-5 flex flex-wrap gap-2">
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
        </div> */}

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">
            {/* Showing {showAll ? filtered.length : 3} of {filtered.length} projects */}
            Showing {showAll ? filtered.length : Math.min(3, filtered.length)} of {filtered.length} projects
          </p>
          <Button variant="outline" size="sm" type="button" onClick={() => setShowAll((value) => !value)}>
            {showAll ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Show less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                View all projects
              </>
            )}
          </Button>
        </div>

        <motion.div layout className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
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
