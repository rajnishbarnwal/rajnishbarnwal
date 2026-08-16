import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

const caseStudySchema = z.object({
  title: z.string(),
  client: z.string(),
  role: z.string(),
  period: z.string(),
  summary: z.string(),
  tags: z.array(z.string()),
  order: z.number().default(99),
});

export type CaseStudyFrontmatter = z.infer<typeof caseStudySchema>;

export interface CaseStudy {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string;
}

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  readingTime: z.string(),
  draft: z.boolean().optional().default(false),
});

export type PostFrontmatter = z.infer<typeof postSchema>;

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

const WORK_DIR = path.join(process.cwd(), "content", "work");
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (!fs.existsSync(WORK_DIR)) {
    return [];
  }

  const files = fs.readdirSync(WORK_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const studies = files.map((file) => {
    const slug = file.replace(/\.(mdx|md)$/, "");
    const filePath = path.join(WORK_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    const parsed = caseStudySchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(`Invalid frontmatter in case study ${file}: ${JSON.stringify(parsed.error.format())}`);
    }

    return {
      slug,
      frontmatter: parsed.data,
      content,
    };
  });

  return studies.sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99));
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const studies = await getAllCaseStudies();
  return studies.find((s) => s.slug === slug) || null;
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      const parsed = postSchema.safeParse(data);
      if (!parsed.success) {
        throw new Error(`Invalid frontmatter in blog post ${file}: ${JSON.stringify(parsed.error.format())}`);
      }

      return {
        slug,
        frontmatter: parsed.data,
        content,
      };
    })
    .filter((post) => {
      if (process.env.NODE_ENV === "production" && post.frontmatter.draft) {
        return false;
      }
      return true;
    });

  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}
