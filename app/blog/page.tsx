import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/seo/JsonLd";
import { listPosts } from "@/lib/blog";
import type { Metadata } from "next";

const SITE_URL = "https://microcrop.app";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
  ],
};

export const metadata: Metadata = {
  title: { absolute: "MicroCrop Blog — Parametric Insurance Insights" },
  description:
    "Insights on parametric insurance, climate resilience, and agricultural technology from markets around the world.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "MicroCrop Blog",
    description:
      "Insights on parametric insurance, climate resilience, and agricultural technology from markets around the world.",
    url: "https://microcrop.app/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  let posts: Awaited<ReturnType<typeof listPosts>>["data"] = [];
  try {
    const res = await listPosts({ pageSize: 50 });
    posts = res.data;
  } catch (err) {
    console.error("Failed to load blog posts", err);
  }

  return (
    <div className="font-poppins">
      <JsonLd data={breadcrumbJsonLd} />
      <Navbar />
      <main id="main">
        <BlogSection posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
