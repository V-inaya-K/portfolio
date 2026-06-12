export type ThemePreference = "light" | "dark" | "system";

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "leetcode" | "instagram" | "gmail";
  tooltip: string;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  download?: string;
};

export type ProjectCategory =
  | "AI / Reinforcement Learning"
  | "AI / Security"
  | "Cybersecurity"
  | "AI / Browser Automation"
  | "AI / Privacy"
  | "AI / Full Stack"
  | "Generative AI"
  | "AI / Fraud Detection"
  | "AI / Startup Tools"
  | "Mobile Development";

export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image?: string;
  featured?: boolean;
};

export type Experience = {
  company: string;
  logo: string;
  position: string;
  dates: string;
  description: string;
  highlights: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Achievement = {
  title: string;
  issuer: string;
  description: string;
  year: string;
};

export type PortfolioData = {
  personal: {
    name: string;
    title: string;
    shortIntro: string;
    summary: string;
    location: string;
    availability: string;
    status: "available" | "busy" | "open";
    profileImage: string;
    resumeUrl: string;
    email: string;
    quote: string;
  };
  navigation: NavItem[];
  socialLinks: SocialLink[];
  about: {
    professionalSummary: string;
    careerGoals: string[];
    interests: string[];
  };
  experience: Experience[];
  volunteerExperience: Experience[];
  leadershipExperience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  leetcode: {
    rating: number;
    problemsSolved: number;
    contestRating: number;
    easy: number;
    medium: number;
    hard: number;
    profileUrl: string;
  };
  github: {
    followers: number;
    repositories: number;
    contributionSquares: number[];
    recentProjects: string[];
    achievements: string[];
  };
  achievements: Achievement[];
  certifications: Achievement[];
  awards: Achievement[];
  hackathons: Achievement[];
  competitiveProgramming: Achievement[];
};
