/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 添加以下行
  output: 'standalone',
};

export default nextConfig;
