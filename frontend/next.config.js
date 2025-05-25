/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // important for using /app directory
  },
};

module.exports = nextConfig;
