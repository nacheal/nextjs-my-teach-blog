import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io']
  },
  transpilePackages: ['next-intl'],
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  }
};

export default nextConfig;
