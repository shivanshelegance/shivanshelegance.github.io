/** @type {import('next').NextConfig} */

// GitHub Pages serves a PROJECT repo (shivanshelegance/shivanshelegance) from
// https://shivanshelegance.github.io/shivanshelegance/, so assets need that prefix.
// If you instead create the user-pages repo `shivanshelegance.github.io`, build with
// NEXT_PUBLIC_BASE_PATH="" and the site serves from the root domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/shivanshelegance";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  distDir: "out",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: { unoptimized: true },
};

export default nextConfig;
