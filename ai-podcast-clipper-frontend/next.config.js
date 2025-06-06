/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'ai-podcast-clipper.vercel.app'],
    },
  },
  output: 'standalone',
  // Ensure environment variables are available during build
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  // Handle environment variables
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
  // Set build output directory
  distDir: '.next',
  // Set source directory
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  poweredByHeader: false,
};

export default nextConfig;
