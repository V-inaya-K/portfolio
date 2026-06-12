import Image from "next/image";
import { Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  const techTags = project.tech.slice(0, 6);
  const extraTech = project.tech.length - techTags.length;

  return (
    <Card className="group flex h-full min-h-[30rem] flex-col overflow-hidden border-border/60 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-4">
        <div className="flex aspect-[16/10] items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-4">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={project.featured}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 text-center">
              <p className="font-display text-2xl font-semibold text-white">{project.title}</p>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/70">{project.category}</p>
            </div>
          )}
        </div>
      </div>
      <CardContent className="flex flex-1 flex-col space-y-4 p-5 sm:p-6">
        <div className="space-y-2.5">
          <div className="mb-2 flex items-center justify-between gap-4">
            <h3 className="font-display text-xl font-semibold">{project.title}</h3>
            {project.featured ? (
              <span className="rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-background">
                Featured
              </span>
            ) : null}
          </div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {project.category}
          </p>
          <div className="min-h-[5.75rem]">
            <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{project.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {techTags.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {extraTech > 0 ? <Badge>+{extraTech} more</Badge> : null}
        </div>
        <div className="mt-auto flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm transition hover:bg-accent"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
        {!project.live.startsWith("http") ? (
          <p className="text-xs leading-5 text-muted-foreground">{project.live}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}
