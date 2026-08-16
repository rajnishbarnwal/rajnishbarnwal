# digitalrajnish.com — Personal Consulting Website

Production-ready personal consulting website for **Rajnish Barnwal** (Manager – IT & Digitalisation at Shubham EPC). Built with Next.js 15+ (App Router), TypeScript, Tailwind CSS v4, and MDX.

Targeted at founders, managing directors, and COOs of mid-sized Indian companies (₹50Cr–₹500Cr) seeking practical business process automation, MIS reporting, and digital transformation systems their teams will actually adopt.

---

## Tech Stack

- **Framework:** Next.js 15+ (App Router, strict TypeScript)
- **Styling:** Tailwind CSS v4 + custom CSS variable design tokens
- **Typography:** Inter (via `next/font/google`)
- **Content Pipeline:** `gray-matter` + `next-mdx-remote/rsc` (no heavy CMS)
- **Forms & Actions:** `react-hook-form` + `zod` + Next.js Server Actions
- **Email Delivery:** Resend
- **Scheduling:** `@calcom/embed-react` (with fallback placeholder)
- **Analytics:** `@vercel/analytics` + `@vercel/speed-insights`
- **Icons:** `lucide-react`
- **Hosting Target:** Vercel (`digitalrajnish.com`)

---

## Getting Started

### 1. Prerequisites
- Node.js 18+ (Node 20+ or 22+ recommended)
- npm or pnpm

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Configure the environment variables:
| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Resend API key for sending contact form submissions | `re_...` (optional for local dev) |
| `RESEND_FROM_EMAIL` | Verified sending address in Resend (e.g. `hello@digitalrajnish.com`) | `Rajnish Website <onboarding@resend.dev>` |
| `CONTACT_EMAIL` | Destination mailbox where enquiries are delivered | `officialrajnishmail@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL of the website | `https://digitalrajnish.com` |
| `NEXT_PUBLIC_CAL_USERNAME` | Cal.com handle for inline calendar scheduling embed | e.g. `rajnishbarnwal/30min` |

*Note: In production, `RESEND_FROM_EMAIL` must be an address on a domain verified in Resend before going live.*

### 4. Adding a Headshot Photo
To display a real headshot image:
1. Add your photo to `public/` (for example `public/rajnish.jpg`).
2. In `app/page.tsx`, pass the path to the component: `<PhotoPlaceholder src="/rajnish.jpg" />`.
If no `src` is passed or the image is missing, a clean initials "RB" monogram is automatically rendered without making broken network requests.

### 5. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Building for Production
```bash
npm run build
npm run start
```

---

## How to Add Content

All long-form content lives in markdown files with frontmatter. You never need to touch React code to publish new articles or case studies.

### Adding a New Blog Post

Create a new `.mdx` file in `content/blog/<your-slug>.mdx`:

```mdx
---
title: "Your Article Title"
description: "A one or two sentence summary for search engines and social cards."
date: "2026-04-01"
tags: ["Workflow Automation", "Operations", "MIS"]
readingTime: "5 min read"
draft: false
---

Your article content in markdown...

## Subheading

Body paragraphs...
```

- If `draft: true` is set, the post is hidden in production builds and visible only in local development.
- Slug is determined automatically by the filename.

### Adding a Case Study

Create a new `.mdx` file in `content/work/<your-slug>.mdx`:

```mdx
---
title: "Cutting manual coordination out of daily operations"
client: "Shubham EPC"
role: "Manager – IT & Digitalisation"
period: "2026"
summary: "Summary of the engagement and outcomes..."
tags: ["n8n", "Workflow Automation", "Operations"]
order: 5
---

## Context
Background on the company and operational setting...

## The Problem
What was broken or causing friction...

## What I Did
Concrete actions, architectural decisions, and rollout steps...

## Outcome
Measurable and qualitative results achieved...

## Stack & Tools
- Tools used...
```

- Case studies are ordered on the work index by the `order` number (lowest first).

---

## Design System & Tokens

Light-mode only design with generous whitespace and restrained blue accenting:

```css
--background:        #FFFFFF
--surface:           #FAFAF9   /* subtle section banding */
--foreground:        #0C0A09   /* headings, near-black */
--muted-foreground:  #57534E   /* body text */
--subtle:            #A8A29E   /* labels, meta, captions */
--border:            #E7E5E4
--accent:            #1D4ED8   /* single accent — links, buttons, active states */
--accent-hover:      #1E40AF
--accent-subtle:     #EFF6FF   /* accent tint backgrounds */
```

- **Container:** Max width 1120px with 24px (mobile) / 40px (desktop) padding.
- **Section Spacing:** Generous vertical rhythm (80px–128px).
- **Prose:** Max width `68ch` with 17px / 1.75 line-height.

---

## SEO & Privacy Features

1. **Structured Data (JSON-LD):** Auto-generated `Person`, `ProfessionalService`, `BlogPosting`, and `BreadcrumbList` schemas.
2. **Dynamic OpenGraph Images:** Generated on edge via `next/og` for the root and each blog article.
3. **Dynamic Sitemap & Robots:** Automatically enumerates all static routes and MDX entries at build time.
4. **Privacy Strictness:** Zero personal phone numbers or street addresses in any source file, metadata, or schema markup. Location is defined strictly as "Pune, Maharashtra, India".

---

## Deployment to Vercel

1. Push code to your GitHub repository (`github.com/digitalrajnish/...`).
2. Import the repository in [Vercel](https://vercel.com).
3. Set the environment variables in Vercel Project Settings:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (set to `https://digitalrajnish.com`)
   - `NEXT_PUBLIC_CAL_USERNAME`
4. Deploy. Vercel Analytics and Speed Insights will track automatically.
