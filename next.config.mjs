/** @type {import('next').NextConfig} */

// Serving from the user-pages repo `shivanshelegance.github.io`, i.e. the root
// domain, so there is no base path. If you ever move the site into a PROJECT repo
// (e.g. shivanshelegance/shivanshelegance, served at /shivanshelegance/), build with
// NEXT_PUBLIC_BASE_PATH="/shivanshelegance" and everything follows automatically.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "out",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: { unoptimized: true },
};

export default nextConfig;
