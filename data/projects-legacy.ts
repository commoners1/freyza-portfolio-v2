import type { Project } from "./types";

/** Client and personal projects from the freyzafkusuma portfolio */
export const legacyProjects: Project[] = [
  {
    title: "Indohajj",
    category: "Tour & Travel Website",
    organization: "Client Project",
    image: "/projects/indohajj-1.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    accent: "cyan",
    liveUrl: "https://indohajj.com",
    githubUrls: ["https://github.com/08freyza/indohajj"],
    highlights: [
      "Full tour and travel booking website for Hajj and Umrah services",
      "Responsive layout with image carousels and service showcase pages",
      "Built to fulfill client business requirements for online presence",
    ],
  },
  {
    title: "HR Parliament System",
    category: "Human Resource Web System",
    organization: "Computer Network Services Group",
    image: "/projects/parliament-1.png",
    tags: ["PHP", "MySQL", "Bootstrap", "HR Management"],
    accent: "purple",
    liveUrl: "https://parliamenthr.cns.com.vu/",
    githubUrls: ["https://github.com/08freyza/parliamenthr"],
    highlights: [
      "HR management platform for parliamentary staff in Vanuatu",
      "Employee records, attendance, and administrative workflows",
      "Developed during tenure as Senior IT Developer at CNS Group",
    ],
  },
  {
    title: "Suds & Sparkle",
    category: "Laundry Web System",
    organization: "Client Project",
    image: "/projects/laundry-1.png",
    tags: ["PHP", "MySQL", "JavaScript", "Web App"],
    accent: "cyan",
    githubUrls: ["https://github.com/08freyza/sudsnsparkles"],
    highlights: [
      "End-to-end laundry service management web application",
      "Order tracking, customer management, and operational dashboards",
      "Custom-built system tailored to client laundry business needs",
    ],
  },
  {
    title: "John Law Firm",
    category: "Company Website",
    organization: "Client Project",
    image: "/projects/firm-1.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    accent: "purple",
    githubUrls: ["https://github.com/08freyza/johnlawfirm"],
    highlights: [
      "Professional law firm website with service and contact sections",
      "Clean corporate design with responsive multi-page layout",
      "Delivered as a complete client-facing web presence",
    ],
  },
  {
    title: "Bel Sekolah App",
    category: "Android & iOS App",
    organization: "Personal Project",
    image: "/projects/belsekolah.png",
    tags: ["Mobile", "Android", "iOS", "School Bell"],
    accent: "cyan",
    liveUrl:
      "https://drive.google.com/file/d/1fgYNUmIYiMCa40YovntVOUzBuwkRgp9b/view?usp=sharing",
    liveLabel: "APK File",
    extraLinks: [
      {
        label: "Project Data",
        url: "https://drive.google.com/file/d/1TJyYrOJO24SdwDchxcRoIzgYdMVgWcNV/view?usp=drive_link",
      },
    ],
    highlights: [
      "School bell scheduling application for Android and iOS",
      "Automated bell timing system for educational institutions",
      "Distributed with APK release and full project documentation",
    ],
  },
  {
    title: "Food Market",
    category: "Android & iOS App",
    organization: "Personal Project",
    image: "/projects/foodapp.jpg",
    tags: ["Mobile", "Android", "iOS", "Marketplace"],
    accent: "purple",
    liveUrl:
      "https://drive.google.com/file/d/1RPubDLGMIWKKqPDQ7424UEjJ0XhGTBjG/view?usp=sharing",
    liveLabel: "Project Data",
    highlights: [
      "Mobile food marketplace application for Android and iOS",
      "Product browsing and market-style shopping experience",
      "Complete project package with documentation and deliverables",
    ],
  },
];
