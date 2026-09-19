import type { NextConfig } from "next";
const nextConfig: NextConfig = { output: "export", allowedDevOrigins: ["terminal.local"], images: { unoptimized: true }, poweredByHeader: false };
export default nextConfig;
