/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.ibb.co',
      'i.postimg.cc',
      'lh3.googleusercontent.com',
      'graph.facebook.com'
    ],
  },
}

module.exports = nextConfig
