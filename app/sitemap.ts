import type { MetadataRoute } from "next";

// required for `output: "export"` (GitHub Pages)
export const dynamic = "force-static";
import { url } from "@/lib/seo";

const routes = ["/", "/women/", "/men/", "/kids/", "/about/", "/faq/", "/contact/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: url(r),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: r === "/" ? 1 : 0.8,
  }));
}
