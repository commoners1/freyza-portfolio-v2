export type SkillIcon =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "ai"
  | "tools";

export type Accent = "cyan" | "purple";

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  role: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: {
    city: string;
    region: string;
    country: string;
  };
  social: {
    github: string;
    linkedin?: string;
  };
  resumePath: string;
  profileImage?: string;
  yearsExperience: number;
  availableForWork: boolean;
  siteUrl: string;
  mobileSummary?: string;
}

export interface Project {
  title: string;
  category: string;
  organization: string;
  image: string;
  images?: string[];
  shortDescription?: string;
  description?: string;
  tags: string[];
  accent: Accent;
  liveUrl?: string;
  liveLabel?: string;
  githubUrls?: string[];
  extraLinks?: { label: string; url: string }[];
  highlights: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
  accent: Accent;
}

export interface SkillCategory {
  name: string;
  icon: SkillIcon;
  items: string[];
}

export interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  details: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}
