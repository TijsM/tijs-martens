/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    POSTHOG_ID: process.env.POSTHOG_ID,
    POSTHOG_API_HOST: process.env.POSTHOG_API_HOST,
  },
};

module.exports = nextConfig;
