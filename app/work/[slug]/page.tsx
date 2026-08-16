import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/mdx/Prose";
import { CTABand } from "@/components/sections/CTABand";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/content";
import { ArrowLeft, ArrowRight, Calendar, User, Building2 } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.frontmatter.title} — Case Study`,
    description: study.frontmatter.summary,
    openGraph: {
      title: `${study.frontmatter.title} — Case Study`,
      description: study.frontmatter.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const allStudies = await getAllCaseStudies();
  const currentIndex = allStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null;

  const { title, client, role, period, summary, tags } = study.frontmatter;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Work", item: "/work" },
          { name: title, item: `/work/${slug}` },
        ]}
      />

      <article className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white">
        <Container>
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#57534E] hover:text-[#1D4ED8] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all case studies
            </Link>
          </div>

          {/* Header */}
          <header className="max-w-[780px] mb-12 pb-10 border-b border-[#E7E5E4]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.09em] text-[#1D4ED8] mb-3">
              Case Study · {client}
            </p>
            <h1 className="text-[32px] sm:text-[42px] lg:text-[48px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.12] mb-6">
              {title}
            </h1>
            <p className="text-[18px] text-[#57534E] leading-relaxed mb-8">
              {summary}
            </p>

            {/* Meta details bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E7E5E4] text-[14px]">
              <div className="flex items-center gap-2 text-[#57534E]">
                <Building2 className="h-4 w-4 text-[#A8A29E]" />
                <span>
                  <strong className="text-[#0C0A09]">Client:</strong> {client}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#57534E]">
                <User className="h-4 w-4 text-[#A8A29E]" />
                <span>
                  <strong className="text-[#0C0A09]">Role:</strong> {role}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#57534E]">
                <Calendar className="h-4 w-4 text-[#A8A29E]" />
                <span>
                  <strong className="text-[#0C0A09]">Period:</strong> {period}
                </span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[13px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* MDX Body */}
          <div className="max-w-[780px]">
            <Prose>
              <MDXRemote source={study.content} />
            </Prose>
          </div>

          {/* Prev / Next Case Study Navigation */}
          <div className="max-w-[780px] mt-16 pt-10 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              {prevStudy ? (
                <Link
                  href={`/work/${prevStudy.slug}`}
                  className="group flex flex-col items-start text-left"
                >
                  <span className="text-[12px] font-medium uppercase tracking-wider text-[#A8A29E] flex items-center gap-1 group-hover:text-[#1D4ED8]">
                    <ArrowLeft className="h-3 w-3" /> Previous Case Study
                  </span>
                  <span className="text-[15px] font-semibold text-[#0C0A09] group-hover:text-[#1D4ED8] transition-colors mt-0.5 line-clamp-1">
                    {prevStudy.frontmatter.title}
                  </span>
                </Link>
              ) : <div />}
            </div>

            <div>
              {nextStudy ? (
                <Link
                  href={`/work/${nextStudy.slug}`}
                  className="group flex flex-col items-end text-right"
                >
                  <span className="text-[12px] font-medium uppercase tracking-wider text-[#A8A29E] flex items-center gap-1 group-hover:text-[#1D4ED8]">
                    Next Case Study <ArrowRight className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] font-semibold text-[#0C0A09] group-hover:text-[#1D4ED8] transition-colors mt-0.5 line-clamp-1">
                    {nextStudy.frontmatter.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </Container>
      </article>

      {/* CTA Band */}
      <CTABand />
    </>
  );
}
