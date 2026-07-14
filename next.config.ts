import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { 
        protocol: "https", 
        hostname: "images.unsplash.com" 
      },
    ],
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;