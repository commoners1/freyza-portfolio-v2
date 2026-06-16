import type { Project } from "./types";

/** Extended copy and gallery images from freyzakusumaportfolio */
export const projectDetails: Record<
  string,
  Pick<Project, "shortDescription" | "description" | "images">
> = {
  "FreyKu.AI": {
    shortDescription: "A platform for AI-powered chatbots.",
    description:
      "FreyKu.AI is a microservices-based SaaS platform for building and deploying AI chatbots. It integrates GPT-4o and LLaMA models with self-learning from web pages, PDFs, and plain text. The stack includes subscription billing, usage analytics, Xendit payments, and embeddable deployment for client sites.",
    images: ["/projects/fkai.jpeg"],
  },
  "NOTCH ERP System": {
    shortDescription: "A unified ERP platform for NOTCH internal management.",
    description:
      "A fully integrated ERP platform that streamlines organizational operations by combining project tracking, human resources, and employee management in one system. Redis caching and query optimization reduced page load times by 45%. Secure attendance uses face recognition with real-time location monitoring via Google Maps API.",
    images: [
      "/projects/erp-1.webp",
      "/projects/erp-2.webp",
      "/projects/erp-3.webp",
      "/projects/erp-4.webp",
    ],
  },
  "NOTCH Web Landing": {
    shortDescription: "Official NOTCH company website and client landing framework.",
    description:
      "A high-performance, SEO-optimized landing page framework for NOTCH Creative Agency, enabling rapid deployment of modern, responsive websites for multiple clients. Built with Next.js and TypeScript, it includes reusable UI components and performance enhancements that improved Lighthouse scores by 35%.",
    images: ["/projects/notch.webp"],
  },
  "Salesforce Middleware": {
    shortDescription: "Middleware to pool Salesforce data for UNICEF Indonesia.",
    description:
      "REST API middleware that synchronizes Salesforce donation data with UNICEF Indonesia's public web platform. Built with NestJS and PostgreSQL (Prisma), BullMQ handles high-volume concurrent requests. Includes telemetry for monitoring, Jest test coverage, and a companion React (Vite) dashboard for sync status and system performance.",
    images: ["/projects/sf-1.webp", "/projects/sf-2.webp", "/projects/sf-3.webp"],
  },
  "UNICEF Indonesia": {
    shortDescription: "Official fundraising website for UNICEF Indonesia.",
    description:
      "Maintenance and improvement of UNICEF Indonesia's official fundraising website for stable, secure donation processing. Work included migrating legacy components, SSL integration, and front-end and back-end performance optimization. Payment flows were enhanced for PCI DSS compliance across Midtrans, Xendit, and DOKU gateways.",
    images: [
      "/projects/unicef-1.webp",
      "/projects/unicef-2.webp",
      "/projects/unicef-3.webp",
    ],
  },
  Indohajj: {
    shortDescription: "Tour and travel website for Hajj and Umrah services.",
    description:
      "A modern tour and travel website for Umrah and Hajj registration with package listings, flight information, hotel options, and visa processing guidance. Built with Laravel 8, it offers clear service descriptions, smooth navigation, and an accessible customer registration flow.",
    images: [
      "/projects/indohajj-1.webp",
      "/projects/indohajj-2.webp",
      "/projects/indohajj-3.webp",
      "/projects/indohajj-4.webp",
    ],
  },
  "HR Parliament System": {
    shortDescription: "HR management system for Vanuatu Parliament.",
    description:
      "A comprehensive HR information system for parliamentary institutions with real-time dashboards, employee demographics, department analytics, and work history charts. Modules cover employee records, leave management, attendance tracking, user roles, and automated reporting.",
    images: [
      "/projects/parliament-1.webp",
      "/projects/parliament-2.webp",
      "/projects/parliament-3.webp",
    ],
  },
  "Suds & Sparkle": {
    shortDescription: "Laundry management system with online payments.",
    description:
      "Full-featured laundry management web system for order processing, payments, and customer interactions. Supports credit/debit cards, virtual accounts, e-wallets, and QRIS via Midtrans. Automates order workflows and improves transparency for administrators and customers.",
    images: [
      "/projects/laundry-1.webp",
      "/projects/laundry-2.webp",
      "/projects/laundry-4.webp",
      "/projects/laundry-5.webp",
      "/projects/laundry-6.webp",
      "/projects/laundry-7.webp",
      "/projects/laundry-8.webp",
    ],
  },
  "John Law Firm": {
    shortDescription: "Professional law firm company website.",
    description:
      "A corporate law firm website with service pages, attorney profiles, and contact sections. Clean responsive multi-page layout delivered as a complete client-facing web presence.",
    images: ["/projects/firm-1.webp", "/projects/firm-2.webp", "/projects/firm-3.webp"],
  },
  "Bel Sekolah App": {
    shortDescription: "School bell scheduling app for Android and iOS.",
    description:
      "Mobile app for automating school bell schedules with custom ringing times, multi-day imports, automatic triggers, custom ringtones, and backup/restore. Built with React Native for school staff who need accurate, hands-free class transitions.",
    images: ["/projects/belsekolah.webp"],
  },
  "Food Market": {
    shortDescription: "Mobile food marketplace app for Android and iOS.",
    description:
      "A mobile food marketplace application with product browsing and a market-style shopping experience. Complete project package with documentation and deliverables for Android and iOS.",
    images: ["/projects/foodapp.jpg"],
  },
};
