import type { Metadata } from "next";
import { site } from "@/data/site";

export function createMetadata(): Metadata {
  const title = `${site.shortName} — ${site.role}`;
  const description = site.summary;

  return {
    metadataBase: new URL(site.siteUrl),
    title: {
      default: title,
      template: `%s | ${site.shortName}`,
    },
    description,
    keywords: [
      "Freyza Kusuma",
      "Full-Stack Developer",
      "NestJS",
      "React",
      "Next.js",
      "Technical Team Lead",
      "Jakarta",
      "AI Developer",
    ],
    authors: [{ name: site.name, url: site.siteUrl }],
    creator: site.name,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: site.siteUrl,
      siteName: `${site.shortName} Portfolio`,
      title,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${site.name} — ${site.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: site.siteUrl,
    },
  };
}
