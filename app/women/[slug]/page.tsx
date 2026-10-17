import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ProductOptions from "@/components/ProductOptions";
import ProductTabs from "@/components/ProductTabs";
import ProductTile from "@/components/ProductTile";
import ShowcaseCta from "@/components/ShowcaseCta";
import TrustRow from "@/components/TrustRow";
import { products, productBySlug, shipping, sizeGuide, wa } from "@/lib/site";
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
    image: [url(p.image)],
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
    <div className="showcase">
      <JsonLd data={[productSchema, crumbs]} />

      {/* ── PRODUCT ───────────────────────────────────────────── */}
      <section className="sc-detail">
        <div className="sc-wrap">
          <p className="sc-pmeta" style={{ marginBottom: 18 }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              Home
            </Link>{" "}
            &nbsp;&gt;&nbsp;
            <Link href="/women/" style={{ textDecoration: "none" }}>
              Women
            </Link>{" "}
            &nbsp;&gt;&nbsp; {p.category} &nbsp;&gt;&nbsp;{" "}
            <span style={{ color: "var(--sc-ink)" }}>{p.name}</span>
          </p>

          <div className="sc-dgrid">
            <div className="sc-dimg">
              {p.tag ? <span className="sc-tag">{p.tag}</span> : null}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(p.detailImage ?? p.image)} alt={p.name} />
            </div>

            <div className="sc-dinfo">
              <div className="sc-pmeta">{p.category}</div>
              <h1>{p.name}</h1>

              <div className="sc-dprice">
                <b>{p.price}</b>
                <span className="sc-pmeta" style={{ marginTop: 0 }}>
                  Inclusive of all taxes
                </span>
              </div>

              {p.rating && p.reviews ? (
                <div className="sc-drate">
                  <span className="sc-stars" aria-hidden="true">
                    ★★★★★
                  </span>
                  <span>
                    {p.rating.toFixed(1)} &nbsp;({p.reviews} Reviews)
                  </span>
                </div>
              ) : null}

              <p className="sc-ddesc">{p.description}</p>

              <div className="sc-qualities">
                <div className="sc-quality">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <circle cx="12" cy="9" r="6" /><circle cx="12" cy="9" r="3" />
                    <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
                  </svg>
                  <span>
                    Premium
                    <br />
                    Fabric
                  </span>
                </div>
                <div className="sc-quality">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <path d="M12 3l2.2 5.5L20 11l-5.8 2.5L12 19l-2.2-5.5L4 11l5.8-2.5z" />
                  </svg>
                  <span>
                    Elegant
                    <br />
                    Design
                  </span>
                </div>
                <div className="sc-quality">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    <path d="M3 8h18v12H3zM9 8V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
                    <path d="M3 13h18" />
                  </svg>
                  <span>
                    Comfortable
                    <br />
                    Fit
                  </span>
                </div>
              </div>

              <ProductOptions
                name={p.name}
                price={p.price}
                sizes={p.sizes}
                colors={p.colors}
              />
            </div>
          </div>

          <TrustRow />

          <ProductTabs
            specs={p.specs}
            highlights={p.highlights}
            sizeGuide={sizeGuide}
            shipping={shipping}
          />
        </div>
      </section>

      {/* ── YOU MAY ALSO LIKE ─────────────────────────────────── */}
      <section>
        <div className="sc-wrap">
          <div className="sc-shead">
            <div className="sc-eye">More to love</div>
            <h2>You May Also Like</h2>
          </div>

          <div className="sc-pgrid" style={{ paddingTop: 0 }}>
            {related.map((r) => (
              <ProductTile p={r} key={r.id} />
            ))}
          </div>
        </div>
      </section>

      <ShowcaseCta
        headline={
          <>
            Want this in another
            <br />
            size or colour?
          </>
        }
        lead="Tell us what you're looking for on WhatsApp — we'll share matching pieces, current availability and prices."
        message={`Hi! I'm interested in the ${p.name}. Please share more details.`}
      />
    </div>
  );
}
