import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tailwindcss.com",
      },
      {
        protocol: "https",
        hostname: "app.microcrop.app",
      },
      {
        // Blog cover/OG/author images are served from object storage
        // (S3_PUBLIC_BASE_URL). Custom domain (future) once microcrop.app is on
        // Cloudflare; R2 Public Dev URL (pub-<hash>.r2.dev) in the meantime.
        protocol: "https",
        hostname: "uploads.microcrop.app",
      },
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
    ],
  },
};

export default nextConfig;
