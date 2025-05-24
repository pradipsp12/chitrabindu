/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['scontent.fccu3-1.fna.fbcdn.net'], 
  },
};

module.exports = nextConfig;
