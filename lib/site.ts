export const siteConfig = {
  name: "Rajnish Barnwal",
  title: "Rajnish Barnwal — Digital Transformation Consultant",
  role: "Systems & Automation Consultant",
  company: "Independent Advisory & Consulting",
  location: "Pune, India (Serving Global & Indian Clients)",
  tagline: "I build internal systems and workflow automations that save businesses 100s of hours.",
  description:
    "Business systems and automation consultant. Helping fast-growing companies and mid-market enterprises eliminate operational chaos with custom workflow automation (n8n), executive MIS dashboards, AI workflows, and bespoke internal tools.",
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
    "Enterprise Systems & Automation Consultant",
    "Proven Enterprise Track Record (Shubham EPC)",
    "Former Founder, Opinta Solutions",
    "B.Tech — MIT Academy of Engineering, Pune",
  ],
  statsFacts: [
    "Available worldwide for remote & advisory consulting",
    "Fixed-scope milestone sprints with 100% IP handover",
    "Typical first project: 2–4 weeks",
    "Timezone compatible with US, UK, Middle East & India",
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
