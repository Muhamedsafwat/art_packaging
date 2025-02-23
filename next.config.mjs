/** @type {import('next').NextConfig} */
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig = {
  images: {
    domains: ["medex-eg.com"], // Add the external domain here
  },
  experimental: {
    reactCompiler: false,
  },
};

export default withPayload(nextConfig);
