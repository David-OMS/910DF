import path from "path";
import type { NextConfig } from "next";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Desktop has another lockfile above this repo; pin Turbopack to 910DF.
  turbopack: {
    root: projectRoot,
  },
  // Keep scaffold agent rule files from regenerating in the repo root.
  agentRules: false,
};

export default nextConfig;
