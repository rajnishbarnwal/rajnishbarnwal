import { ImageResponse } from "next/og";
import { getPostBySlug, getAllPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  const title = post?.frontmatter.title || siteConfig.name;
  const description = post?.frontmatter.description || siteConfig.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FFFFFF",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
        }}
      >
        {/* Top Accent Rule & Eyebrow */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              width: "64px",
              height: "6px",
              backgroundColor: "#1D4ED8",
              borderRadius: "3px",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#57534E",
              fontWeight: 600,
            }}
          >
            Article · {siteConfig.name}
          </div>
        </div>

        {/* Middle Article Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "44px",
              fontWeight: 700,
              color: "#0C0A09",
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#57534E",
              lineHeight: 1.4,
              maxWidth: "950px",
            }}
          >
            {description}
          </div>
        </div>

        {/* Bottom Footer Details */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #E7E5E4",
            paddingTop: "32px",
          }}
        >
          <div style={{ display: "flex", fontSize: "22px", fontWeight: 700, color: "#0C0A09" }}>
            {siteConfig.name} · digitalrajnish.com
          </div>
          <div style={{ display: "flex", fontSize: "18px", color: "#1D4ED8", fontWeight: 600 }}>
            Read on digitalrajnish.com &rarr;
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
