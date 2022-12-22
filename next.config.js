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
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080],
    minimumCacheTTL: 60,
  },

  experimental: {
    appDir: true,
  },
  webpack5: true,
  webpack: config => {
    config.resolve.fallback = { fs: false }
    return config
  },
}

module.exports = nextConfig
