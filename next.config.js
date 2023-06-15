/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  alias: {
    '@': path.resolve(__dirname)
  },
  images: {
    domains: ['links.papareact.com']
  },
  experimental: {
    appDir: true
  }
}

module.exports = {
  ...nextConfig,
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET
  }
}
