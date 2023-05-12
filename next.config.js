/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.stickpng.com',
      },
    ]
  }
}

module.exports = nextConfig
