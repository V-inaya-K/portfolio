"use client";

import { Code2, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";
import type { SocialLink } from "@/lib/types";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Code2,
  instagram: Instagram,
  gmail: Mail
};

export function SocialIcon({ link }: { link: SocialLink }) {
  const Icon = iconMap[link.icon];

  return (
    <Tooltip label={link.tooltip}>
      <a
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground transition hover:-translate-y-1 hover:scale-105 hover:bg-accent/80"
        aria-label={link.label}
      >
        <Icon className="h-4 w-4" />
      </a>
    </Tooltip>
  );
}
