import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 使用自定义域名后不需要 basePath
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
