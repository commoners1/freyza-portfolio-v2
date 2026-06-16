import type { SiteConfig } from "./types";

export const site: SiteConfig = {
  name: "Freyza Fachrurrozi Kusuma",
  shortName: "Freyza",
  title: "Full-Stack Developer & Technical Team Lead",
  role: "Full-Stack Developer & Technical Team Lead",
  tagline: "Secure Web Systems & AI Platforms",
  summary:
    "Full-Stack Developer and Technical Team Lead with 6 years of experience building secure, high-performance web systems and AI-powered platforms. Skilled in NestJS, Node.js, React.js, Laravel, Prisma, and Docker, with expertise in REST API architecture, Salesforce integration, and payment gateway compliance.",
  mobileSummary:
    "6+ years building secure web systems, APIs & AI platforms.",
  email: "freyza.kusuma.1@gmail.com",
  phone: "+62 822 8998 2332",
  location: {
    city: "East Jakarta",
    region: "Jakarta",
    country: "Indonesia",
  },
  social: {
    github: "https://github.com/commoners1",
  },
  resumePath: "/Freyza-Kusuma-Resume.pdf",
  profileImage: "/profile.svg",
  yearsExperience: 6,
  availableForWork: true,
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://freyza-portfolio.vercel.app",
};
