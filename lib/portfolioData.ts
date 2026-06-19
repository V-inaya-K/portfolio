import type { PortfolioData } from "@/lib/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Vinayak Shukla",
    title: "Aspiring Full Stack Developer",
    shortIntro:
      "I'm a fresher focused on building thoughtful products, AI-assisted workflows, and fast interfaces that feel effortless to use.",
    summary:
      "I'm a fresher who is building strong fundamentals through hackathons, open-source work, and volunteer experience. I like turning complex requirements into simple, polished experiences while learning fast and shipping with care.",
    location: "Delhi, India",
    availability: "Open to internships, freelance, full-time, and selective collaborations.",
    status: "available",
    profileImage: "/profile.jpg",
    resumeUrl: "/resume.pdf",
    email: "vinze200410@gmail.com",
    quote: "Make it sharp, make it fast, make it feel inevitable."
  },
  navigation: [
    // { label: "Resume", href: "/api/resume", external: true, download: "Vinayak-Shukla-Resume.pdf" },
    { label: "GitHub", href: "https://github.com/V-inaya-K", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vinayak-shukla-0904s/", external: true },
    { label: "LeetCode", href: "https://leetcode.com/u/winky_huh/", external: true },
    { label: "Instagram", href: "https://www.instagram.com/vinayak.xdd/", external: true },
    { label: "Gmail", href: "mailto:vinze200410@gmail.com", external: true }
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/V-inaya-K",
      icon: "github",
      tooltip: "Explore source code"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vinayak-shukla-0904s/",
      icon: "linkedin",
      tooltip: "Connect professionally"
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/winky_huh/",
      icon: "leetcode",
      tooltip: "See problem solving"
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/vinayak.xdd/",
      icon: "instagram",
      tooltip: "A bit more personal"
    },
    {
      label: "Gmail",
      href: "mailto:vinze200410@gmail.com",
      icon: "gmail",
      tooltip: "Start a conversation"
    }
  ],
  about: {
    professionalSummary:
      "I enjoy building premium web experiences with strong systems thinking behind them. As a fresher, my work blends frontend craftsmanship, backend pragmatism, and AI tooling while I keep learning through volunteer work and hackathons.",
    careerGoals: [
      "Grow as a dependable engineer through hands-on projects and team collaborations.",
      "Ship interfaces that are fast, memorable, and genuinely useful.",
      "Keep expanding into AI systems, growth experiments, and platform design."
    ],
    interests: [
      "Interactive UI systems",
      "Design systems",
      "Applied AI",
      "Performance engineering",
      "Hackathons",
      "Open source"
    ]
  },
  experience: [
    {
      company: "Google Developer Group On Campus ADGIPS",
      logo: "/company-nova.svg",
      position: "AI/ML and Tech Member",
      dates: "2024 - Present",
      description: "Contribution towards tech growth at ADGIPS.",
      highlights: []
    },
    {
      company: "Social Winter of Code",
      logo: "/company-atlas.svg",
      position: "Contributor",
      dates: "2024 - Present",
      description: "Developing effective open source solutions for social benefit.",
      highlights: []
    },
    {
      company: "Yakshagna",
      logo: "/company-nova.svg",
      position: "Actor",
      dates: "2023 - Present",
      description: "Bringing to stage through engaging performances.",
      highlights: []
    },
    {
      company: "Quintessence",
      logo: "/company-atlas.svg",
      position: "Member",
      dates: "2023 - Present",
      description: "Developing critical thinking and communication skills.",
      highlights: []
    }
  ],
  volunteerExperience: [
    {
      company: "Google Developer Group On Campus ADGIPS",
      logo: "/company-nova.svg",
      position: "AI/ML and Tech Member",
      dates: "2024 - Present",
      description: "Contribution towards tech growth at ADGIPS.",
      highlights: []
    },
    {
      company: "Social Winter of Code",
      logo: "/company-atlas.svg",
      position: "Contributor",
      dates: "2024 - Present",
      description: "Developing effective open source solutions for social benefit.",
      highlights: []
    },
    {
      company: "Yakshagna",
      logo: "/company-nova.svg",
      position: "Actor",
      dates: "2023 - Present",
      description: "Bringing to stage through engaging performances.",
      highlights: []
    },
    {
      company: "Quintessence",
      logo: "/company-atlas.svg",
      position: "Member",
      dates: "2023 - Present",
      description: "Developing critical thinking and communication skills.",
      highlights: []
    }
  ],
  leadershipExperience: [
    {
      company: "Hackathon Teams",
      logo: "/company-nova.svg",
      position: "Team Lead",
      dates: "Multiple Hackathons",
      description:
        "Led various teams of hackathons to deliver meaningful and impactful solutions.",
      highlights: []
    }
  ],
  projects: [
    
    {
      title: "Hook.ai",
      category: "Generative AI",
      description:
        "Hook.ai is a Flask-based AI application that generates viral, SEO-optimized titles, descriptions, and hashtags for video content. Powered by Llama 2 and modern prompting techniques, it helps creators maximize reach and engagement.",
      tech: ["Python", "Flask", "Whisper", "Lang Chain", "Fine-Tuning", "Few-Shot Prompting", "HTML", "CSS", "Prompt Engineering"],
      github: "https://github.com/V-inaya-K/Hook.AI",
      live: "https://example.com",
      image: "/projectpic/hook.jpeg",
      featured: true
    },
    {
      title: "Modco",
      category: "AI / Reinforcement Learning",
      description:
        "Modco is a reinforcement learning–powered content moderation platform that automatically detects toxic, spam, hateful, and unsafe content across digital platforms. The system combines NLP, LLM-based classification, and automated evaluation pipelines to continuously improve moderation accuracy and safety outcomes.",
      tech: ["Reinforcement Learning", "NLP", "Hugging Face", "LLMs", "Python", "Machine Learning", "Docker", "PyTorch", "Prompt Engineering"],
      github: "https://github.com/V-inaya-K/Contend-Moderator-RL",
      live: "https://example.com",
      image: "/projectpic/modco.jpg",
      featured: true,
    },
    {
      title: "AI Startup Roast",
      category: "AI / Startup Tools",
      description:
        "AI Startup Roast is a fun and relatable roast-style startup idea analyzer inspired by Tech Roast Show. It uses four agents - Business, Use, Opponent, and Roaster - to critique startup ideas from multiple angles, generate a shareable roast meme, and deliver an overall score that makes weak ideas impossible to ignore.",
      tech: ["Multi-Agent Systems", "AI Agents", "OpenAI Codex", "Prompt Engineering", "Generative AI",  "LLMs"],
      github: "https://github.com/soummyaanon/Codexcomunitymeetup",
      live: "https://example.com",
      image: "/projectpic/roast.jpg",
      featured: true,
    },
    {
      title: "Aura Scanner",
      category: "AI / Browser Automation",
      description:
        "Aura Scanner is an AI-powered chatbot that allows users to explore the public digital footprint of a professional using LinkedIn and optionally Twitter data. The system uses browser automation plus RAG to provide accurate, context-aware answers.",
      tech: ["Python", "Flask", "Selenium", "Browser Automation", "LangChain", "Groq API", "FAISS", "Llama 3.3 70B Versatile", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/V-inaya-K/Aura-Scanner",
      live: "Demo video: https://youtu.be/rhfow0AsuP4. Not live on cloud because Aura Scanner uses browser automation due to API restrictions."
    },
    {
      title: "Xecure",
      category: "AI / Security",
      description:
        "Xecure is an AI-driven image verification system that detects manipulated, AI-generated, and fake refund images through advanced visual analysis and risk scoring. It helps businesses prevent fraud by identifying suspicious visual evidence before approval.",
      tech: ["Python", "FastAPI", "MERN Stack", "Tailwind CSS", "Computer Vision", "AI/ML", "Image Processing", "MongoDB", "React"],
      github: "https://github.com/V-inaya-K/Xecure",
      live: "https://example.com"
    },
    {
      title: "Reo",
      category: "AI / Privacy",
      description:
        "Reo is an AI-powered privacy protection platform designed to identify sensitive data exposure and privacy vulnerabilities across digital systems. It provides intelligent recommendations and risk insights to help users protect personal and organizational data.",
      tech: ["Python", "Data Privacy", "AI/ML", "LLMs", "FastAPI", "Security Analytics", "Risk Assessment", "Privacy Engineering"],
      github: "https://github.com/V-inaya-K/Reo-Your-Privacy-Guard",
      live: "https://example.com"
    },
    {
      title: "Case.AI",
      category: "AI / Full Stack",
      description:
        "Case.AI is an intelligent legal and case analysis platform that leverages large language models to summarize documents, extract key insights, and generate actionable recommendations. It simplifies complex case research through AI-powered analysis.",
      tech: ["Generative AI", "NLP", "LLMs", "MERN Stack", "JavaScript", "Python", "Document Processing", "Prompt Engineering"],
      github: "https://github.com/V-inaya-K/Case.Ai",
      live: "https://example.com"
    },
    {
      title: "Vanilla",
      category: "AI / Fraud Detection",
      description:
        "Vanilla is an AI-powered scam detection application that analyzes calls, phishing links, and suspicious messages in real time. The platform helps users identify digital fraud attempts before they become victims.",
      tech: ["Flutter", "Firebase", "NLP", "Machine Learning", "Python", "LLMs", "Fraud Detection", "Mobile Development"],
      github: "https://github.com/V-inaya-K",
      live: "https://example.com"
    },
    {
      title: "Renture",
      category: "Mobile Development",
      description:
        "Renture is a peer-to-peer vehicle rental marketplace that enables users to rent and list bikes, scooters, and cars directly from owners. The application streamlines booking, payments, and vehicle discovery through a mobile-first experience.",
      tech: ["Flutter", "Supabase", "Google Maps API", "Mobile Development", "Authentication", "Geolocation"],
      github: "https://github.com/V-inaya-K//Renture-Vehicle-Rental-Made-Easy",
      live: "https://example.com"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript", "TypeScript", "Dart", "C++", "SQL"]
    },
    {
      category: "AI & Machine Learning",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Reinforcement Learning",
        "NLP",
        "Generative AI",
        "LLMs",
        "Hugging Face",
        "Prompt Engineering",
        "Few-Shot Prompting",
        "Fine-Tuning",
        "Model Evaluation",
        "AI Agents",
        "RAG",
        "Vector Databases",
        "PyTorch",
        "TensorFlow",
        "Scikit-Learn",
        "Jupyter Notebook"
      ]
    },
    {
      category: "Computer Vision",
      items: ["OpenCV", "Image Processing", "Face Recognition", "Object Detection", "Visual Analysis"]
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Framer Motion",
        "Responsive Design",
        "Shadcn UI"
      ]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs", "API Development", "Authentication", "JWT"]
    },
    {
      category: "Mobile Development",
      items: ["Flutter", "Dart", "Firebase", "Supabase", "Google Maps API", "Mobile App Development"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore", "Supabase Database"]
    },
    {
      category: "Cloud & DevOps",
      items: ["Docker", "Git", "GitHub", "GitHub Actions", "CI/CD", "Linux", "Vercel", "Deployment"]
    },
    {
      category: "Automation & AI Tools",
      items: ["n8n", "OpenAI Codex", "Cursor", "Claude Code", "Groq", "Whisper"]
    },
    {
      category: "Tools & Platforms",
      items: ["VS Code", "Android Studio", "Google Colab", "Postman", "MongoDB Atlas"]
    },
    {
      category: "Core Computer Science",
      items: [
        "Data Structures",
        "Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "System Design"
      ]
    }
  ],
  leetcode: {
    rating: 228791,
    problemsSolved: 460,
    contestRating: 1566,
    easy: 158,
    medium: 223,
    hard: 79,
    profileUrl: "https://leetcode.com/u/winky_huh/"
  },
  github: {
    followers: 10,
    repositories: 34,
    contributionSquares: [
      0, 1, 2, 1, 0, 3, 4, 1, 2, 0, 2, 1, 4, 3, 1, 0, 2, 1, 3, 4, 2, 1, 0, 2, 3, 1, 2, 4, 3,
      2, 1, 0, 1, 3, 4, 2, 1, 0, 2, 4, 3, 1, 2, 0, 1, 3, 2, 4, 1, 0, 2, 3, 1, 4, 2, 1
    ],
    recentProjects: ["Design system starter", "AI assistant dashboard", "Portfolio redesign"],
    achievements: ["100-day build streak", "Top 10% hackathon finish", "Open-source contributor"]
  },
  achievements: [
    {
      title: "Best Product Experience",
      issuer: "HackVerse",
      description: "Won recognition for a polished workflow and strong demo execution.",
      year: "2025"
    }
  ],
  certifications: [
    {
      title: "Introduction to Large Language Models",
      issuer: "NPTEL",
      description: "Learning text technology of LLMs from IIT Delhi professors.",
      year: "2024"
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "NPTEL",
      description: "Learning machine learning concepts with math from IIT Madras professors.",
      year: "2024"
    },
    {
      title: "MERN Stack with Docker and AWS",
      issuer: "Simplilearn",
      description: "Learning the basics of Git and Docker.",
      year: "2024"
    }
  ],
  awards: [
    {
      title: "Smart Builder Award",
      issuer: "Community",
      description: "For consistent contributions to product and engineering discussions.",
      year: "2025"
    }
  ],
  hackathons: [
    {
      title: "NASA Space App Challenge Noida",
      issuer: "Top 5",
      description: "Recognized among the top teams for a strong solution and delivery.",
      year: "2025"
    },
    {
      title: "Google Solution Challenge",
      issuer: "Internal Hackathon Winners",
      description: "Won the internal hackathon round with a meaningful solution.",
      year: "2025"
    },
    {
      title: "Smart Delhi Ideathon 2025",
      issuer: "Under Top 30 Teams",
      description: "Placed under the top 30 teams in a competitive ideation challenge.",
      year: "2025"
    },
    {
      title: "Vihan8.0 (DTU)",
      issuer: "Participant",
      description: "Built and presented a hackathon solution in a competitive event.",
      year: "2025"
    },
    {
      title: "HacknChill (ADGIPS)",
      issuer: "Participant",
      description: "Contributed to a hackathon environment focused on practical problem-solving.",
      year: "2025"
    },
    {
      title: "Smart India Hackathon",
      issuer: "Internal Round",
      description: "Participated in the internal round with a focused team solution.",
      year: "2025"
    },
    {
      title: "VesHack (GGSIPU)",
      issuer: "Participant",
      description: "Worked with a hackathon team to build and present a solution.",
      year: "2025"
    }
  ],
  competitiveProgramming: [
    {
      title: "Peak Rank 1.7K",
      issuer: "LeetCode",
      description: "Competitive programming performance with steady contest improvement.",
      year: "2025"
    }
  ]
};
