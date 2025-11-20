import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bucket.acusdev.com",
      },
    ],
  },
};

export default nextConfig;
