/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  eslint: {
    dirs: ['src'],
  },
};

export default nextConfig;
