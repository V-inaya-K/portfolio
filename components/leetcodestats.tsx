"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  username: string;
  fallback: {
    rating: number;
    problemsSolved: number;
    contestRating: number;
    easy: number;
    medium: number;
    hard: number;
    profileUrl: string;
  };
};

type LiveLeetCodeStats = {
  rating: number;
  problemsSolved: number;
  contestRating: number;
  easy: number;
  medium: number;
  hard: number;
  profileUrl: string;
};

export function LeetCodeStats({ username, fallback }: Props) {
  const [stats, setStats] = useState<LiveLeetCodeStats>(fallback);
  const [source, setSource] = useState<"live" | "cache" | "fallback">("fallback");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const response = await fetch(`/api/leetcode/${encodeURIComponent(username)}`, {
          cache: "no-store"
        });

        if (!response.ok) {
          throw new Error(`LeetCode request failed: ${response.status}`);
        }

        const json = await response.json();
        const live = json?.stats;
        const nextSource = json?.source === "live" ? "live" : "cache";

        const liveStats: LiveLeetCodeStats = {
          rating: Number(live?.rating ?? fallback.rating),
          problemsSolved: Number(live?.problemsSolved ?? fallback.problemsSolved),
          contestRating: Number(live?.contestRating ?? fallback.contestRating),
          easy: Number(live?.easy ?? fallback.easy),
          medium: Number(live?.medium ?? fallback.medium),
          hard: Number(live?.hard ?? fallback.hard),
          profileUrl: live?.profileUrl ?? fallback.profileUrl
        };

        if (!cancelled) {
          setStats(liveStats);
          setSource(nextSource);
        }
      } catch {
        if (!cancelled) {
          setStats(fallback);
          setSource("fallback");
        }
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, [fallback, username]);

  const cards = [
    ["Global Rank", stats.rating],
    ["Contest Rating", stats.contestRating],
    ["Problems Solved", stats.problemsSolved],
    ["Easy", stats.easy],
    ["Medium", stats.medium],
    ["Hard", stats.hard]
  ] as const;

  return (
    <Card className="border-border/60">
      <CardContent className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              LeetCode
            </p>
            <h3 className="mt-1 font-display text-xl font-semibold">Problem Solving</h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
              {source === "live" ? "Live" : source === "cache" ? "Cached" : "Fallback"}
            </span>
            <a
              href={stats.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-foreground px-4 py-2 text-sm text-background transition hover:opacity-90"
            >
              Profile
            </a>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-border/60 bg-background/70 p-4"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">{label}</p>
              <p className="mt-2 font-display text-2xl font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
