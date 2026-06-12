"use client";

import Image from "next/image";
import { ArrowDownToLine, CircleCheckBig, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolioData";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/social-icon";
import { TypewriterText } from "@/components/typewriter-text";

const roles = ["Full Stack Developer", "AI Engineer", "Problem Solver", "Agentic AI Developer"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {portfolioData.personal.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl"
          >
            {portfolioData.personal.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-4 font-display text-2xl text-muted-foreground sm:text-3xl"
          >
            <TypewriterText phrases={roles} className="text-foreground" />
          </motion.div>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            {portfolioData.personal.shortIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {portfolioData.personal.location}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-sm text-muted-foreground">
              <CircleCheckBig className="h-4 w-4 text-emerald-500" />
              {portfolioData.personal.status === "available" ? "Available now" : "Currently engaged"}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              className="shadow-glow"
              href={portfolioData.personal.resumeUrl}
              download="Vinayak-Shukla-Resume.md"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" href={`mailto:${portfolioData.personal.email}`}>
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-8 flex items-center gap-3"
          >
            {portfolioData.socialLinks.map((link) => (
              <SocialIcon key={link.label} link={link} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto flex w-full max-w-[520px] items-center justify-center"
        >
          <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-400/20 via-transparent to-emerald-400/20 blur-3xl" />
          <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-border/60 bg-card/70 p-4 shadow-2xl backdrop-blur-xl">
            <div className="absolute left-0 top-0 h-full w-full bg-hero-radial opacity-80" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-4">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
                <Image
                  src={portfolioData.personal.profileImage}
                  alt={portfolioData.personal.name}
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Focus</p>
                  <p className="mt-2 font-display text-lg font-semibold">Design + Engineering</p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    Current Mode
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold">End-to-end scalable apps</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
