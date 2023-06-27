/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "3dicons.sgp1.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/v1/**",
      },
    ],
    minimumCacheTTL: 60,
  },

  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig
