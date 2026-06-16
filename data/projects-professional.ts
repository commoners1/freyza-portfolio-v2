import type { Project } from "./types";

export const professionalProjects: Project[] = [
  {
    title: "FreyKu.AI",
    category: "AI SaaS Platform",
    organization: "Personal Project",
    image: "/projects/fkai.jpeg",
    tags: ["NestJS", "React", "FastAPI", "Qdrant", "OpenAI", "Docker"],
    accent: "purple",
    githubUrls: ["https://github.com/commoners1/freyku-ai-chatbot"],
    highlights: [
      "Microservices architecture with GPT-4o and LLaMA integrations",
      "Subscription billing, usage analytics, and Xendit payments",
      "Self-learning from web, PDF, and text with embeddable deployment",
    ],
  },
  {
    title: "NOTCH ERP System",
    category: "Enterprise Platform",
    organization: "NOTCH Creative Agency",
    image: "/projects/erp-1.webp",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Redis", "Prisma"],
    accent: "cyan",
    githubUrls: ["https://github.com/commoners1/notch-erp"],
    highlights: [
      "Centralized ERP for project tracking, HR, and employee management",
      "Redis caching and query optimization cut page load time by 45%",
      "AI face recognition attendance with Google Maps location tracking",
    ],
  },
  {
    title: "UNICEF Indonesia",
    category: "Fundraising Platform",
    organization: "NOTCH Creative Agency",
    image: "/projects/unicef-1.webp",
    tags: ["PHP", "MySQL", "Midtrans", "Xendit", "DOKU"],
    accent: "cyan",
    liveUrl: "https://supportunicefindonesia.org",
    githubUrls: ["https://github.com/commoners1/d-uncf-rdv"],
    highlights: [
      "Migration, SSL integration, and performance optimization",
      "PCI DSS-compliant payment flows across three gateways",
      "Reduced transaction failures on Indonesia's official fundraising site",
    ],
  },
  {
    title: "Salesforce Middleware",
    category: "API Integration",
    organization: "UNICEF Indonesia · NOTCH",
    image: "/projects/sf-1.webp",
    tags: ["NestJS", "BullMQ", "Redis", "Prisma", "Jest"],
    accent: "purple",
    githubUrls: [
      "https://github.com/commoners1/unicef-sf-middleware",
      "https://github.com/commoners1/unicef-sf-dashboard",
    ],
    highlights: [
      "REST middleware syncing Salesforce donations with UNICEF's platform",
      "BullMQ queues for reliable concurrent request handling",
      "Telemetry and Jest tests for monitoring and code coverage",
    ],
  },
  {
    title: "NOTCH Web Landing",
    category: "Client Framework",
    organization: "NOTCH Creative Agency",
    image: "/projects/notch.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    accent: "cyan",
    liveUrl: "https://notch.id",
    highlights: [
      "Responsive, SEO-friendly landing page framework for client sites",
      "Reusable component library across multiple deployments",
      "Improved Lighthouse performance score by 35%",
    ],
  },
];
