export const siteConfig = {
  name: "Rajnish Barnwal",
  title: "Rajnish Barnwal — Digital Transformation Consultant",
  role: "Manager, IT & Digitalisation",
  company: "Shubham EPC",
  location: "Pune, Maharashtra, India",
  tagline: "I help mid-sized companies replace manual work with systems their teams actually use.",
  description:
    "Digital transformation consultant in Pune, India. Helping mid-sized manufacturing, EPC, construction, and SMB companies eliminate manual bottlenecks with workflow automation (n8n), practical AI, MIS dashboards, and systems integration.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digitalrajnish.com",
  email: process.env.CONTACT_EMAIL || "officialrajnishmail@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/rajnishbarnwal",
    github: "https://github.com/digitalrajnish",
  },
  calUsername: process.env.NEXT_PUBLIC_CAL_USERNAME || "",
  nav: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Work", href: "/work" },
    { title: "Writing", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ],
  credentials: [
    "Manager – IT & Digitalisation, Shubham EPC",
    "9 years in marketing & growth",
    "Former founder, Opinta Solutions",
    "B.Tech — MIT Academy of Engineering, Pune",
  ],
  statsFacts: [
    "Based in Pune, works with clients across India",
    "Available for project-based and advisory work",
    "Typical first engagement: 2–6 weeks",
    "Languages: English, Hindi, Marathi",
  ],
  tools: [
    "n8n",
    "Python",
    "Next.js",
    "LLM APIs & RAG",
    "Postgres / MySQL",
    "Power BI & Looker Studio",
    "ERP Systems",
    "REST APIs & Webhooks",
    "Google Workspace & M365",
  ],
  languages: ["English", "Hindi", "Marathi"],
};

export type SiteConfig = typeof siteConfig;
