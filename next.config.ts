import type { NextConfig } from "next";

// GitHub Pages serves a project repo at https://<user>.github.io/<repo>/,
// so the deploy workflow passes that sub-path in PAGES_BASE_PATH.
// Leave it empty locally or when using a custom domain.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
