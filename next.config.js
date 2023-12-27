/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com/shadcn.png",
      },
    ],
  },
};

module.exports = nextConfig;
