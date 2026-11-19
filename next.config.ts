import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root (there is an unrelated package-lock.json in the home folder).
  turbopack: { root: __dirname },
};

export default nextConfig;
