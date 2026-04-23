import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/y-te-tai-nha",
        destination: "/co-so-y-te/y-te-tai-nha",
      },
      {
        source: "/xet-nghiem",
        destination: "/co-so-y-te/xet-nghiem",
      },
      {
        source: "/tiem-chung",
        destination: "/co-so-y-te/tiem-chung",
      },
      {
        source: "/phong-mach",
        destination: "/co-so-y-te/phong-mach",
      },
      {
        source: "/phong-kham",
        destination: "/co-so-y-te/phong-kham",
      },
      {
        source: "/benh-vien-tu",
        destination: "/co-so-y-te/benh-vien-tu",
      },
      {
        source: "/benh-vien-cong",
        destination: "/co-so-y-te/benh-vien-cong",
      },
    ];
  },
};

export default nextConfig;