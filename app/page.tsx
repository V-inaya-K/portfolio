import { CursorSpotlight } from "@/components/cursor-spotlight";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { LeetCodeSection } from "@/components/leetcode-section";
import { GitHubSection } from "@/components/github-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/lib/portfolioData";

export function generateMetadata() {
  return {
    title: portfolioData.personal.name,
    description: portfolioData.personal.shortIntro
  };
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <LeetCodeSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
