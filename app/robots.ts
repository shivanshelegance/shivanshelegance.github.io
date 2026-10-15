import type { MetadataRoute } from "next";

// required for `output: "export"` (GitHub Pages)
export const dynamic = "force-static";
import { url } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: url("/sitemap.xml"),
    host: url("/"),
  };
}
