import { LeetCodeStats } from "@/components/leetcodestats";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/lib/portfolioData";

export function LeetCodeSection() {
  return (
    <section id="leetcode" className="scroll-mt-28 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="LeetCode"
        />
        <LeetCodeStats username="winky_huh" fallback={portfolioData.leetcode} />
      </div>
    </section>
  );
}
