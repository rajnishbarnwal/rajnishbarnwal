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
import { BreadcrumbJsonLd, BlogPostJsonLd } from "@/components/seo/JsonLd";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2 } from "lucide-react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const postUrl = `${siteConfig.url}/blog/${slug}`;

  return {
    title: `${post.frontmatter.title} — Rajnish Barnwal`,
    description: post.frontmatter.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      url: postUrl,
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const { title, description, date, readingTime, tags } = post.frontmatter;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const postUrl = `${siteConfig.url}/blog/${slug}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Writing", item: "/blog" },
          { name: title, item: `/blog/${slug}` },
        ]}
      />
      <BlogPostJsonLd
        title={title}
        description={description}
        date={date}
        url={postUrl}
      />

      <article className="pt-12 pb-20 lg:pt-16 lg:pb-28 bg-white">
        <Container>
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#57534E] hover:text-[#1D4ED8] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </Link>
          </div>

          {/* Article Header */}
          <header className="max-w-[780px] mb-12 pb-10 border-b border-[#E7E5E4]">
            <div className="flex flex-wrap items-center gap-3 text-[14px] text-[#A8A29E] mb-4">
              <span className="flex items-center gap-1.5 text-[#57534E]">
                <Calendar className="h-4 w-4" />
                <time dateTime={date}>{formattedDate}</time>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readingTime}
              </span>
              <span>·</span>
              <span>By {siteConfig.name}</span>
            </div>

            <h1 className="text-[32px] sm:text-[44px] lg:text-[50px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.12] mb-6">
              {title}
            </h1>

            <p className="text-[19px] sm:text-[21px] text-[#57534E] leading-relaxed mb-6 font-normal">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[13px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          {/* Article MDX Body */}
          <div className="max-w-[780px]">
            <Prose>
              <MDXRemote source={post.content} />
            </Prose>
          </div>

          {/* Article Footer & Author Box */}
          <div className="max-w-[780px] mt-16 pt-10 border-t border-[#E7E5E4]">
            <div className="rounded-[8px] border border-[#E7E5E4] bg-[#FAFAF9] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <p className="text-[12px] font-medium uppercase tracking-wider text-[#A8A29E]">
                  Written by
                </p>
                <h3 className="text-[18px] font-semibold text-[#0C0A09]">
                  {siteConfig.name}
                </h3>
                <p className="text-[14px] text-[#57534E]">
                  Manager – IT & Digitalisation at Shubham EPC. Helping mid-sized companies automate operations and adopt systems that stick.
                </p>
              </div>
              <div className="shrink-0">
                <Button asChild size="sm">
                  <Link href="/contact">Get in touch</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Prev / Next Post Navigation */}
          <div className="max-w-[780px] mt-12 pt-8 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col items-start text-left"
                >
                  <span className="text-[12px] font-medium uppercase tracking-wider text-[#A8A29E] flex items-center gap-1 group-hover:text-[#1D4ED8]">
                    <ArrowLeft className="h-3 w-3" /> Newer Article
                  </span>
                  <span className="text-[15px] font-semibold text-[#0C0A09] group-hover:text-[#1D4ED8] transition-colors mt-0.5 line-clamp-1">
                    {prevPost.frontmatter.title}
                  </span>
                </Link>
              ) : <div />}
            </div>

            <div>
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col items-end text-right"
                >
                  <span className="text-[12px] font-medium uppercase tracking-wider text-[#A8A29E] flex items-center gap-1 group-hover:text-[#1D4ED8]">
                    Older Article <ArrowRight className="h-3 w-3" />
                  </span>
                  <span className="text-[15px] font-semibold text-[#0C0A09] group-hover:text-[#1D4ED8] transition-colors mt-0.5 line-clamp-1">
                    {nextPost.frontmatter.title}
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
