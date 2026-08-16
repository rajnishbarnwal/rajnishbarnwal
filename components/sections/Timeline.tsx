import React from "react";

interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlight?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    role: "Manager – IT & Digitalisation",
    company: "Shubham EPC",
    period: "Feb 2026 – Present",
    description:
      "Leading company-wide digital transformation: workflow automation with n8n, executive MIS reporting, ERP integrations, and building Shubham ONE (internal HRMS).",
    highlight: true,
  },
  {
    role: "Brand Manager",
    company: "Shubham EPC",
    period: "Apr 2025 – Feb 2026",
    description:
      "Spearheaded corporate positioning, digital presence, and cross-functional communication systems before transitioning full-time to lead IT & Digitalisation.",
  },
  {
    role: "Head of Marketing",
    company: "Kamalraj Group",
    period: "Sep 2024 – Apr 2025",
    description:
      "Owned business growth, CRM workflows, digital lead pipelines, and reporting systems across residential and commercial developments.",
  },
  {
    role: "Head of Marketing",
    company: "eduGENZ",
    period: "Jan 2022 – Oct 2024",
    description:
      "Managed go-to-market execution, student acquisition funnels, retention automations, and operational analytics.",
  },
  {
    role: "Founder",
    company: "Opinta Solutions Pvt. Ltd.",
    period: "Oct 2018 – Mar 2022",
    description:
      "Founded and ran an IT & digital agency for four years. Built end-to-end web apps, client automations, and managed client delivery, cash flow, and team operations.",
  },
  {
    role: "Incubatee",
    company: "Centre for Innovation, Incubation and Linkages",
    period: "Jan 2019 – Dec 2021",
    description:
      "Selected for startup incubation, receiving mentorship on scalable venture operations, technology architecture, and product governance.",
  },
  {
    role: "Freelance Developer",
    company: "Freelancer.com",
    period: "Jul 2016 – Sep 2018",
    description:
      "Delivered full-stack web development and custom scripting projects for international clients while completing engineering degree.",
  },
];

export function Timeline() {
  return (
    <div className="relative border-l border-[#E7E5E4] pl-6 sm:pl-8 space-y-10 my-8">
      {timelineData.map((item, idx) => (
        <div key={idx} className="relative group">
          {/* Dot */}
          <div
            className={`absolute -left-[31px] sm:-left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 bg-white transition-colors ${
              item.highlight
                ? "border-[#1D4ED8] bg-[#1D4ED8]"
                : "border-[#A8A29E] group-hover:border-[#1D4ED8]"
            }`}
          />

          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <h3 className="text-[17px] font-semibold text-[#0C0A09]">
              {item.role}{" "}
              <span className="font-normal text-[#57534E]">
                · {item.company}
              </span>
            </h3>
            <span className="text-[13px] font-medium text-[#A8A29E] shrink-0">
              {item.period}
            </span>
          </div>

          <p className="text-[15px] text-[#57534E] leading-relaxed max-w-[65ch]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
