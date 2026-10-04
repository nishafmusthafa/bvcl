import type { NextConfig } from "next";
import { version } from "./package.json";

const nextConfig: NextConfig = {
  // Inlined at build time so the client bundle gets the version, not package.json.
  env: { APP_VERSION: version },
};

export default nextConfig;
