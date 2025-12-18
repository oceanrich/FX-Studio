import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/FX-Studio',
  assetPrefix: '/FX-Studio/',
};

export default nextConfig;
