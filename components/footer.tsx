"use client";

import { useEffect, useState } from "react";
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
    <footer className="border-t border-white/30 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="font-display text-lg font-semibold">{portfolioData.personal.quote}</p>
          <p className="rounded-full border border-white/25 px-3 py-1 text-xs text-muted-foreground">
            IST {time}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
