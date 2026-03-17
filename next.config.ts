import type { NextConfig } from "next";
const lp_space = 5;
const isProd = process.env.NODE_ENV === "production";
const repoName = "my-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
};

export default nextConfig;