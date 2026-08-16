import React from "react";
import { siteConfig } from "@/lib/site";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company,
    },
    url: siteConfig.url,
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "MIT Academy of Engineering, Pune",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    knowsAbout: [
      "Digital Transformation Consulting",
      "Business Process Automation",
      "n8n Workflow Automation",
      "Executive MIS Dashboards",
      "ERP Evaluation and Integration",
      "Internal Business Software",
      "Practical AI & RAG for SMBs",
    ],
    description: siteConfig.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfessionalServiceJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rajnish Barnwal — Digital Transformation Consulting",
    url: siteConfig.url,
    provider: {
      "@type": "Person",
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Digital Transformation Consulting",
      "Workflow Automation Consulting",
      "MIS and Dashboard Development",
      "ERP Integration Advisory",
      "Practical AI Implementation",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostJsonLd({
  title,
  description,
  date,
  url,
}: {
  title: string;
  description: string;
  date: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: date,
    dateModified: date,
    url: url,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; item: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${siteConfig.url}${item.item}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
