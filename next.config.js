/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['acdn.sanity.io']
  }
}

module.exports = nextConfig


