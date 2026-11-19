import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build plain HTML/CSS/JS into out/ for Cloudflare Pages (no server needed).
  output: "export",
  // Next's image resizing needs a server; images in public/ are already web-sized.
  images: { unoptimized: true },
  // Pin the project root (there is an unrelated package-lock.json in the home folder).
  turbopack: { root: __dirname },
};

export default nextConfig;
