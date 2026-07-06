import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostBody from "@/components/PostBody";
import { getPost, isRedirect, listPosts, type Post } from "@/lib/blog";

const SITE_URL = "https://microcrop.app";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Serialize JSON-LD so it cannot break out of the surrounding <script> tag.
// JSON.stringify does not escape "</script>", "<!--", U+2028/U+2029, etc.,
// which would otherwise allow stored-XSS via post fields (title/excerpt/author).
const jsonLdSafe = (data: unknown) =>
  JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const all: { slug: string }[] = [];
    for (let page = 1; page <= 20; page++) {
      const res = await listPosts({ page, pageSize: 50 });
      for (const post of res.data) all.push({ slug: post.slug });
      if (page >= res.pagination.totalPages || res.data.length === 0) break;
    }
    return all;
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = await getPost(slug).catch(() => null);
  if (!result || isRedirect(result)) return {};

  const post = result;
  const title = post.seo?.metaTitle ?? post.title;
  const description = post.seo?.metaDescription ?? post.excerpt;
  const ogImage = post.seo?.ogImageUrl ?? post.coverImage?.url;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

function PostJsonLd({ post }: { post: Post }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage?.url ? [post.coverImage.url] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: [
      {
        "@type": "Person",
        name: post.author.name,
        jobTitle: post.author.role,
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "MicroCrop",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/img/micro-crop-background.jpg`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdSafe(data) }}
    />
  );
}

function BreadcrumbJsonLd({ post }: { post: Post }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdSafe(data) }}
    />
  );
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const result = await getPost(slug);

  if (!result) notFound();
  if (isRedirect(result)) redirect(`/blog/${result.__redirectTo}`);

  const post = result;

  return (
    <div className="font-poppins">
      <Navbar />
      <main id="main" className="bg-white">
        <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-8">
          <PostJsonLd post={post} />
          <BreadcrumbJsonLd post={post} />

          <Link
            href="/blog"
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            ← Back to blog
          </Link>

          <header className="mt-8">
            {post.category ? (
              <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                {post.category.name}
              </span>
            ) : null}
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600 text-pretty">
              {post.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-x-4">
              {post.author.avatarUrl ? (
                <Image
                  src={post.author.avatarUrl}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full bg-gray-100 object-cover"
                />
              ) : (
                <div className="h-12 w-12 rounded-full bg-gray-100" />
              )}
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">{post.author.name}</p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
              <span className="ml-auto flex items-center gap-x-3 text-sm text-gray-500">
                <time dateTime={post.publishedAt}>
                  {dateFormatter.format(new Date(post.publishedAt))}
                </time>
                <span aria-hidden="true">·</span>
                <span>{post.readingTimeMinutes} min read</span>
              </span>
            </div>
          </header>

          {post.coverImage ? (
            <div className="relative mt-12">
              <Image
                src={post.coverImage.url}
                alt={post.coverImage.alt}
                width={post.coverImage.width || 1600}
                height={post.coverImage.height || 900}
                sizes="(max-width: 768px) 100vw, 768px"
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
          ) : null}

          <div className="mt-12">
            <PostBody markdown={post.body} />
          </div>

          {post.tags.length > 0 ? (
            <div className="mt-16 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          ) : null}
        </article>
      </main>
      <Footer />
    </div>
  );
}
