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
};

export default config;
