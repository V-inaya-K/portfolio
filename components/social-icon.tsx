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

export function SocialIcon({ link, size = "md" }: { link: SocialLink; size?: "sm" | "md" }) {
  const Icon = iconMap[link.icon];

  const sizeClass = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  const iconClass = size === "sm" ? "h-[15px] w-[15px]" : "h-[18px] w-[18px]";

  return (
    <Tooltip label={link.tooltip}>
      <a
        href={link.href}
        target={link.href.startsWith("http") ? "_blank" : undefined}
        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        aria-label={link.label}
        className={[
          "inline-flex items-center justify-center rounded-full",
          "border border-border/70 bg-background/80 text-foreground",
          "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
          "hover:-translate-y-0.5 hover:scale-105 hover:border-foreground/30 hover:bg-foreground/10 hover:shadow-lg",
          "active:translate-y-0 active:scale-100",
          sizeClass
        ].join(" ")}
      >
        <Icon className={iconClass} strokeWidth={1.8} />
      </a>
    </Tooltip>
  );
}
