import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PostCard } from "@/components/cards/PostCard";
import { CTABand } from "@/components/sections/CTABand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing — Systems, Automation & Operations",
  description:
    "Essays and practical insights on business process automation, build vs. buy decisions, MIS reporting, and digital adoption for Indian mid-sized companies.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Writing", item: "/blog" },
        ]}
      />

      {/* Header */}
      <section className="pt-16 pb-12 lg:pt-24 lg:pb-16 bg-white">
        <Container>
          <div className="max-w-[780px]">
            <p className="text-[12px] font-semibold uppercase tracking-[0.09em] text-[#1D4ED8] mb-3">
              Writing & Articles
            </p>
            <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-semibold text-[#0C0A09] tracking-[-0.03em] leading-[1.1] mb-6">
              Practical thinking on systems & operations
            </h1>
            <p className="text-[18px] sm:text-[20px] text-[#57534E] leading-relaxed">
              No listicles or vendor hype. Honest reflections from the floor on what makes internal systems actually get used.
            </p>
          </div>
        </Container>
      </section>

      {/* Posts List */}
      <section className="pb-24 lg:pb-32 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                frontmatter={post.frontmatter}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Band */}
      <CTABand />
    </>
  );
}
