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
        // Blog cover/OG/author images uploaded via the backend are served from
        // object storage (S3_PUBLIC_BASE_URL). Must be allowlisted for next/image.
        protocol: "https",
        hostname: "uploads.microcrop.app",
      },
    ],
  },
};

export default nextConfig;
