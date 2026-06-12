"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowRight, Mail, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { portfolioData } from "@/lib/portfolioData";
import { SocialIcon } from "@/components/social-icon";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-28 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
        />
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="border-border/60">
            <CardContent className="space-y-4 p-5 sm:p-6">
              <div className="rounded-3xl border border-border/60 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Direct Mail
                </p>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-lg font-semibold transition hover:opacity-80"
                >
                  <Mail className="h-4 w-4" />
                  {portfolioData.personal.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Social Links
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {portfolioData.socialLinks.map((link) => (
                    <SocialIcon key={link.label} link={link} />
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-foreground/5 to-transparent p-4">
                <p className="text-sm leading-6 text-muted-foreground">
                  If you have a product challenge, a freelance brief, or a team opening, I'm happy to
                  talk through scope, timeline, and the best way to ship it well.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60">
            <CardContent className="p-5 sm:p-6">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    placeholder="Your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <Textarea
                  placeholder="Tell me about the project"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" size="lg">
                    <Send className="h-4 w-4" />
                    Send via Gmail
                  </Button>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm transition hover:bg-accent"
                  >
                    Alternate Email
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
