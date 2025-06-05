/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "ai-podcast-clipper.vercel.app"],
    },
  },
  output: 'standalone',
  env: {
    NODE_ENV: process.env.NODE_ENV || 'production',
  },
  // Disable static optimization for not-found page
  staticPageGenerationTimeout: 120,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

export default config;
