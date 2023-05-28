/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'www.radpowerbikes.com',
      },
    ]
  }
}

module.exports = nextConfig
