"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  className?: string;
};

export function TypewriterText({ phrases, className }: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    const timeout = window.setTimeout(
      () => {
        if (!deleting && text === current) {
          setTimeout(() => setDeleting(true), 1200);
          return;
        }

        if (deleting && text === "") {
          setDeleting(false);
          setIndex((value) => (value + 1) % phrases.length);
          return;
        }

        const next = deleting
          ? current.slice(0, Math.max(0, text.length - 1))
          : current.slice(0, text.length + 1);
        setText(next);
      },
      deleting ? 42 : 62
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, index, phrases, text]);

  return (
    <motion.span
      key={index}
      className={className}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {text}
      <span className="ml-1 inline-block animate-pulse">|</span>
    </motion.span>
  );
}
