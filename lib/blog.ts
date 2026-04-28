const BASE = process.env.API_BASE_URL ?? "https://app.microcrop.app";

export type CoverImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type Author = {
  name: string;
  role: string;
  avatarUrl: string;
};

export type Category = {
  slug: string;
  name: string;
};

export type Tag = {
  slug: string;
  name: string;
};

export type PostSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: CoverImage | null;
  category: Category | null;
  tags: Tag[];
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
};

export type Post = PostSummary & {
  body: string;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
    ogImageUrl?: string;
  };
};

export type Pagination = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};

export type PostsResponse = {
  data: PostSummary[];
  pagination: Pagination;
};

export type CategoriesResponse = {
  data: (Category & { postCount: number })[];
};

export type PostRedirect = { __redirectTo: string };

type ListParams = {
  page?: number;
  pageSize?: number;
  category?: string;
  tag?: string;
};

export async function listPosts(params: ListParams = {}): Promise<PostsResponse> {
  const qs = new URLSearchParams(
    Object.entries(params)
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => [k, String(v)])
  );
  const url = qs.toString() ? `${BASE}/api/posts?${qs}` : `${BASE}/api/posts`;
  const res = await fetch(url, {
    next: { revalidate: 60, tags: ["posts"] },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }
  return res.json();
}

export async function getPost(slug: string): Promise<Post | PostRedirect | null> {
  const res = await fetch(`${BASE}/api/posts/${encodeURIComponent(slug)}`, {
    next: { revalidate: 60, tags: [`post:${slug}`] },
    redirect: "manual",
  });
  if (res.status === 404) return null;
  if (res.status === 301) {
    const body = (await res.json()) as { error?: { redirectTo?: string } };
    const redirectTo = body.error?.redirectTo;
    if (!redirectTo) throw new Error("301 from API without redirectTo");
    return { __redirectTo: redirectTo };
  }
  if (!res.ok) {
    throw new Error(`Failed to fetch post ${slug}: ${res.status}`);
  }
  return res.json();
}

export async function listCategories(): Promise<CategoriesResponse> {
  const res = await fetch(`${BASE}/api/categories`, {
    next: { revalidate: 300, tags: ["categories"] },
  });
  if (!res.ok) return { data: [] };
  return res.json();
}

export function isRedirect(
  value: Post | PostRedirect | null
): value is PostRedirect {
  return value !== null && "__redirectTo" in value;
}
