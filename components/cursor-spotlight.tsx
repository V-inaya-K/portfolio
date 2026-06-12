"use client";

import { useEffect } from "react";

export function CursorSpotlight() {
  useEffect(() => {
    const update = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return <div className="spotlight" />;
}

