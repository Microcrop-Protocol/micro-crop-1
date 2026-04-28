import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { listPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Insights on Parametric Insurance & Climate Resilience",
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
      <Navbar />
      <main id="main">
        <BlogSection posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
