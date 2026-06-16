import type { SkillCategory } from "./types";

export const skills: SkillCategory[] = [
  {
    name: "Front-end",
    icon: "frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Figma",
    ],
  },
  {
    name: "Back-end",
    icon: "backend",
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Laravel",
      "PHP",
      "Prisma ORM",
    ],
  },
  {
    name: "Database",
    icon: "database",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Redis",
      "Query Optimization",
    ],
  },
  {
    name: "DevOps & Server",
    icon: "devops",
    items: [
      "Docker",
      "CI/CD",
      "Nginx",
      "Apache",
      "Git / GitHub",
      "WHM/cPanel",
    ],
  },
  {
    name: "AI & Data Science",
    icon: "ai",
    items: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "NLP",
      "YOLOv8",
      "OpenAI APIs",
    ],
  },
  {
    name: "Tools & Platforms",
    icon: "tools",
    items: [
      "Salesforce",
      "Midtrans / Xendit / DOKU",
      "JIRA",
      "Postman",
      "BullMQ",
      "Apidog",
    ],
  },
];
