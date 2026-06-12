import { LeetCodeStats } from "@/components/leetcodestats";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/lib/portfolioData";

export function LeetCodeSection() {
  return (
    <section id="leetcode" className="scroll-mt-28 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="LeetCode"
          title="Problem solving is part of the craft, not an afterthought."
          description="The stats load live through a same-origin API and fall back gracefully if the network is unavailable."
        />
        <LeetCodeStats username="winky_huh" fallback={portfolioData.leetcode} />
      </div>
    </section>
  );
}
