import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ProductDetail from "@/components/ProductDetail";
import { productImages, products, productBySlug, site } from "@/lib/site";
import { url } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return { title: "Product not found — Shivansh Elegance" };
  return {
    title: `${p.name} — ${p.price} | Shivansh Elegance`,
    description: p.description,
    alternates: { canonical: url(`/women/${p.slug}/`) },
    openGraph: {
      title: `${p.name} — ${p.price}`,
      description: p.description,
      images: [{ url: url(p.image) }],
    },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: productImages(p).map(url),
    sku: p.id,
    category: p.category,
    brand: { "@type": "Brand", name: site.brand },
    offers: {
      "@type": "Offer",
      price: p.price.replace(/[^\d]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: url(`/women/${p.slug}/`),
    },
  };

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
      { "@type": "ListItem", position: 2, name: "Women", item: url("/women/") },
      { "@type": "ListItem", position: 3, name: p.name, item: url(`/women/${p.slug}/`) },
    ],
  };

  return (
    <div className="showcase">
      <JsonLd data={[schema, crumbs]} />
      <ProductDetail p={p} />
    </div>
  );
}
