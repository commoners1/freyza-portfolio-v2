import { site } from "@/data/site";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    telephone: site.phone,
    url: site.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    sameAs: [site.social.github, site.social.linkedin].filter(Boolean),
    knowsAbout: [
      "Full-Stack Development",
      "NestJS",
      "React",
      "Next.js",
      "Artificial Intelligence",
      "Payment Gateway Integration",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
