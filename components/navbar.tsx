"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { portfolioData } from "@/lib/portfolioData";

const sectionMap = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "leetcode", label: "LeetCode" },
  { id: "github", label: "GitHub" },
  { id: "contact", label: "Contact" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = useMemo(() => portfolioData.navigation, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 80);
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -52% 0px", threshold: 0.01 }
    );

    sectionMap.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={cn("fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-6")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-border/60 bg-background/75 px-4 py-3 shadow-glow backdrop-blur-xl">
        <a href="#home" className="font-display text-sm font-semibold tracking-[0.2em] uppercase">
          VS
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isHome = item.href === "#home";
            const isActive = isHome && activeSection === "home";
            const activeClass = isActive
              ? "bg-foreground text-background"
              : "text-foreground/70 hover:bg-accent hover:text-foreground";
            const opensNewTab = item.href.startsWith("http");

            return item.external ? (
              <a
                key={item.label}
                href={item.href}
                download={item.download}
                target={item.download || !opensNewTab ? undefined : "_blank"}
                rel={item.download || !opensNewTab ? undefined : "noreferrer"}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  activeClass
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-10 rounded-full px-3"
            onClick={() => setIsOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-border/60 bg-background/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="grid gap-2">
              <div className="flex items-center justify-between rounded-2xl border border-border/60 px-4 py-3">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    download={item.download}
                    target={item.download || !item.href.startsWith("http") ? undefined : "_blank"}
                    rel={item.download || !item.href.startsWith("http") ? undefined : "noreferrer"}
                    className="rounded-2xl border border-border/60 px-4 py-3 text-sm font-medium text-foreground/80 transition hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "rounded-2xl border px-4 py-3 text-sm font-medium transition",
                      item.href === "#home" && activeSection === "home"
                        ? "border-transparent bg-foreground text-background"
                        : "border-border/60 text-foreground/80 hover:bg-accent"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
