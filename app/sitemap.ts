import type { MetadataRoute } from "next";

// required for `output: "export"` (GitHub Pages)
export const dynamic = "force-static";
import { url } from "@/lib/seo";
import { products } from "@/lib/site";

const routes = ["/", "/women/", "/men/", "/kids/", "/about/", "/faq/", "/contact/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages = routes.map((r) => ({
    url: url(r),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: r === "/" ? 1 : 0.8,
  }));

  const productPages = products.map((p) => ({
    url: url(`/women/${p.slug}/`),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...pages, ...productPages];
}
