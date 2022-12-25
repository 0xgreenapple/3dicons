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
    minimumCacheTTL: 60
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
