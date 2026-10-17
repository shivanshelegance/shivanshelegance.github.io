import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Logo } from "@/components/Chrome";
import ShopCard from "@/components/shop/ShopCard";
import ShopOptions from "@/components/shop/ShopOptions";
import ShopTabs from "@/components/shop/ShopTabs";
import { COLOR_HEX } from "@/lib/colors";
import { products, productBySlug, shipping, sizeGuide } from "@/lib/site";
import { asset, pageMeta, url } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) return { title: "Product not found — Shivansh Elegance" };
  return pageMeta(
    `${p.name} — ${p.category} at ${p.price} | Shivansh Elegance`,
    p.description ?? `${p.name} — ${p.category} from Shivansh Elegance, ${p.price}.`,
    `/women/${p.slug}/`
  );
}

const QUALITIES = [
  { t: "Premium\nFabric", d: "M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5z" },
  { t: "Elegant\nDesign", d: "M12 3l2.2 5.5L20 11l-5.8 2.5L12 19l-2.2-5.5L4 11l5.8-2.5z" },
  { t: "Comfortable\nFit", d: "M3 8h18v12H3zM9 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3M3 13h18" },
];

const BENEFITS = [
  {
    t: "Free Shipping",
    s: "(Orders above ₹1,999)",
    d: "M2 6h12v10H2zM14 9h4l4 4v3h-8",
    c: "M6 18a2 2 0 1 0 0-.01M18 18a2 2 0 1 0 0-.01",
  },
  {
    t: "Easy Returns",
    s: "(Within 7 days)",
    d: "M3 12a9 9 0 1 0 3-6.7M3 4v5h5",
  },
  { t: "Cash on Delivery", s: "(Available)", d: "M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5z" },
];

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const p = productBySlug(slug);
  if (!p) notFound();

  // The reference simply shows the next four pieces.
  const related = products.filter((o) => o.id !== p.id).slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    image: [url(p.detailImage ?? p.image)],
    sku: `SE-${p.id}`,
    brand: { "@type": "Brand", name: "Shivansh Elegance" },
    category: `Women > ${p.category}`,
    material: p.specs?.fabric,
    ...(p.reviews && p.rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: p.rating,
            reviewCount: p.reviews,
            bestRating: 5,
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      price: p.price.replace(/[^0-9]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: url(`/women/${p.slug}/`),
      seller: { "@type": "Organization", name: "Shivansh Elegance" },
    },
  };

  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
      { "@type": "ListItem", position: 2, name: "Women", item: url("/women/") },
      { "@type": "ListItem", position: 3, name: p.category, item: url("/women/") },
      { "@type": "ListItem", position: 4, name: p.name, item: url(`/women/${p.slug}/`) },
    ],
  };

  return (
    <div className="se-ref">
      <JsonLd data={[productSchema, crumbs]} />

      <div className="container detail-container">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>&rsaquo;</span>
          <Link href="/women">Women</Link>
          <span>&rsaquo;</span>
          <span>{p.category}</span>
          <span>&rsaquo;</span>
          <strong>{p.name}</strong>
        </div>

        <div className="detail-layout">
          <div className="gallery">
            <div className="main-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(p.detailImage ?? p.image)}
                alt={p.name}
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="detail-info">
            <h1>{p.name}</h1>
            <div className="price-row">
              <span className="detail-price">{p.price}</span>
              <span className="best-seller">Best Seller</span>
            </div>
            <div className="rating">
              ★★★★★ <span>({p.rating?.toFixed(1)}) &nbsp; {p.reviews} Reviews</span>
            </div>
            <p className="description">{p.description}</p>

            <div className="qualities">
              {QUALITIES.map((q) => (
                <div className="quality" key={q.t}>
                  <i aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d={q.d} />
                    </svg>
                  </i>
                  <span>
                    {q.t.split("\n").map((l, i) => (
                      <span key={i}>
                        {i > 0 ? <br /> : null}
                        {l}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <ShopOptions
              name={p.name}
              price={p.price}
              sizes={p.sizes}
              colors={p.colors}
              colorHex={COLOR_HEX}
            />
          </div>
        </div>

        <div className="benefits">
          {BENEFITS.map((b) => (
            <div className="benefit" key={b.t}>
              <i aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d={b.d} />
                  {b.c ? <path d={b.c} /> : null}
                </svg>
              </i>
              <div>
                <strong>{b.t}</strong>
                <span>{b.s}</span>
              </div>
            </div>
          ))}
        </div>

        <ShopTabs
          specs={p.specs}
          highlights={p.highlights}
          sizeGuide={sizeGuide}
          shipping={shipping}
        />

        <section className="recommendations">
          <div className="section-heading">
            <h2>You May Also Like</h2>
            <div className="heading-line" />
          </div>
          <div className="product-grid">
            {related.map((r) => (
              <ShopCard p={r} key={r.id} />
            ))}
          </div>
        </section>
      </div>

      <div className="detail-footer-banner">
        <p>
          Elegance in
          <br />
          every moment
        </p>
        <Logo />
      </div>
    </div>
  );
}
