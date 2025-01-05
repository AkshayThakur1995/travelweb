import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['ik.imagekit.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
  
    ignoreBuildErrors: true,
  },
};


export default nextConfig;
