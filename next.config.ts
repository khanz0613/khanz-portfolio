import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  // Split dev/prod build artifacts to avoid intermittent manifest/vendor chunk collisions.
  distDir: isDev ? ".next-dev" : ".next",
  outputFileTracingRoot: process.cwd(),
  experimental: {
    // Work around intermittent Next 15 dev-mode manifest crashes.
    devtoolSegmentExplorer: false,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Reduce corrupted filesystem cache issues during repeated dev restarts.
      config.cache = false;
    }

    return config;
  },
};

export default nextConfig;
