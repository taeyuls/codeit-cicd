import { withSentryConfig } from "@sentry/nextjs";
import { withSpeedInsights } from "@vercel/speed-insights/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 기타 설정
};

const sentryOptions = {
  org: "7ac79342789c",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

// Sentry와 Speed Insights 통합 적용
const configWithSentry = withSentryConfig(nextConfig, sentryOptions);

export default withSpeedInsights(configWithSentry);
