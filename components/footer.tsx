"use client";

import { useEffect, useState } from "react";
import { SocialIcon } from "@/components/social-icon";
import { portfolioData } from "@/lib/portfolioData";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(new Date())
      );
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-lg font-semibold">{portfolioData.personal.quote}</p>
          <p className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
            IST {time}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
          {/* <div className="flex items-center gap-3">
            {portfolioData.socialLinks.map((link) => (
              <SocialIcon key={link.label} link={link} />
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}

