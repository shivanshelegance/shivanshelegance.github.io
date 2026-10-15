import type { Metadata } from "next";

export const SITE_URL = "https://shivanshelegance.github.io";
// Empty for the user-pages repo `shivanshelegance.github.io` (served at the
// root domain). Set NEXT_PUBLIC_BASE_PATH="/repo-name" only if you later move
// the site into a project repo.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const FULL_URL = `${SITE_URL}${BASE}`;

export const ORG = {
  name: "Shivansh Elegance",
  description:
    "Shivansh Elegance is an Indian women's ethnic wear brand selling sarees, anarkalis, lehengas, kurtis and salwar suits, with ordering over WhatsApp and delivery across India.",
  areaServed: "IN",
};

/** Absolute URL for a route, respecting the GitHub Pages base path. */
export function url(path = "/"): string {
  const p = path === "/" ? "" : path.replace(/\/$/, "");
  return `${FULL_URL}${p}`;
}

/** Prefix a public asset path with the GitHub Pages base path. */
export function asset(path: string): string {
  return `${BASE}${path}`;
}

export function pageMeta(
  title: string,
  description: string,
  path: string
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: url(path) },
    openGraph: {
      title,
      description,
      url: url(path),
      siteName: ORG.name,
      locale: "en_IN",
      type: "website",
      images: [{ url: url("/og-image.png"), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [url("/og-image.png")],
    },
  };
}
