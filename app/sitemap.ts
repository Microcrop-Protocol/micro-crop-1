import type { MetadataRoute } from "next";
import { listPosts, type PostSummary } from "@/lib/blog";

const SITE_URL = "https://microcrop.app";
const MAX_PAGES = 20;
const PAGE_SIZE = 50;

async function getAllPostsForSitemap(): Promise<PostSummary[]> {
  const all: PostSummary[] = [];
  for (let page = 1; page <= MAX_PAGES; page++) {
    const res = await listPosts({ page, pageSize: PAGE_SIZE });
    all.push(...res.data);
    if (page >= res.pagination.totalPages || res.data.length === 0) break;
  }
  return all;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  let posts: PostSummary[] = [];
  try {
    posts = await getAllPostsForSitemap();
  } catch (err) {
    console.error("Failed to load posts for sitemap", err);
  }

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...postEntries,
  ];
}
