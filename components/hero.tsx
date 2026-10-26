"use client";

import Image from "next/image";
import { ArrowDownToLine, CircleCheckBig, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolioData";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/social-icon";
import { TypewriterText } from "@/components/typewriter-text";

const roles = ["Full Stack Developer", "AI Engineer", "Problem Solver", "Agentic AI Developer"];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-card/70 px-4 py-2 text-xs font-medium text-muted-foreground"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {portfolioData.personal.availability}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-4 font-cursive text-2xl text-muted-foreground/80 sm:text-3xl"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease }}
            className="mt-1 font-display text-5xl font-bold tracking-tight text-balance sm:text-6xl lg:text-[4.5rem]"
          >
            {portfolioData.personal.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-3 font-display text-xl text-muted-foreground sm:text-2xl"
          >
            <TypewriterText phrases={roles} className="text-foreground" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-[17px]"
          >
            {portfolioData.personal.shortIntro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-foreground/25 hover:text-foreground">
              <MapPin className="h-4 w-4" />
              {portfolioData.personal.location}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:border-foreground/25 hover:text-foreground">
              <CircleCheckBig className="h-4 w-4 text-emerald-500" />
              {portfolioData.personal.status === "available" ? "Available now" : "Currently engaged"}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button
              size="lg"
              className="shadow-glow transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
              href={portfolioData.personal.resumeUrl}
              download="resume.pdf"
            >
              <ArrowDownToLine className="h-4 w-4" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/30 active:translate-y-0"
              href={`mailto:${portfolioData.personal.email}`}
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="mt-7 flex items-center gap-3"
          >
            {portfolioData.socialLinks.map((link) => (
              <SocialIcon key={link.label} link={link} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease }}
          className="relative mx-auto flex w-full max-w-[480px] items-center justify-center"
        >
          <div className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-br from-sky-400/20 via-transparent to-emerald-400/20 blur-3xl" />
          <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/25 bg-card/70 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-foreground/25 hover:shadow-glow">
            <div className="absolute left-0 top-0 h-full w-full bg-hero-radial opacity-80" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/25 bg-background/80 p-4">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
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
                <div className="rounded-2xl border border-white/25 bg-background/80 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Focus</p>
                  <p className="mt-2 font-display text-lg font-semibold">Design + Engineering</p>
                </div>
                <div className="rounded-2xl border border-white/25 bg-background/80 p-4">
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
