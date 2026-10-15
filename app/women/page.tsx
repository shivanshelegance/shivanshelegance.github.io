import type { Metadata } from "next";
import CategoryGrid from "@/components/CategoryGrid";
import Cta from "@/components/Cta";
import ProductCard from "@/components/ProductCard";
import { categories, products, wa } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import JsonLd from "@/components/JsonLd";
import { pageMeta, url, asset } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Women's Collection — Sarees, Anarkalis, Lehengas, Kurtis | Shivansh Elegance",
  "Shop women's Indian ethnic wear — sarees, anarkalis, lehengas, kurtis and salwar suits. Enquire about any piece and order on WhatsApp.",
  "/women/"
);

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Women's ethnic wear collection",
  url: url("/women/"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        category: p.category,
        image: `https://shivanshelegance.github.io/shivanshelegance${p.image}`,
        offers: { "@type": "Offer", priceCurrency: "INR", price: p.price.replace(/[^0-9]/g, ""), availability: "https://schema.org/InStock" },
      },
    })),
  },
};

const crumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
    { "@type": "ListItem", position: 2, name: "Women", item: url("/women/") },
  ],
};

export default function Women() {
  return (
    <>
      <JsonLd data={[collectionSchema, crumbs]} />
      <section className="hero" style={{ minHeight: "62vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/images/hero-women.jpg")} alt="Women's collection" />
        <div className="wrap hero-in">
          <div className="eyebrow">Trending Collection</div>
          <h1>
            Elegance in <em>Every Thread</em>
          </h1>
          <p>
            Premium quality fabrics, timeless designs and styles that make you feel
            special.
          </p>
          <div style={{ marginTop: 30 }}>
            <a
              className="btn btn-wa"
              href={wa("Hi! I'd like to browse the women's collection.", true)}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              Explore Women&apos;s Collection
            </a>
          </div>
          <div className="sub-cta">Click to view our WhatsApp catalog</div>
        </div>
      </section>

      <CategoryGrid />

      {categories.map((c) => {
        const match = products.filter(
          (p) => p.category.toLowerCase() === c.name.toLowerCase()
        );
        const items = match.length ? match : products.slice(0, 2);
        return (
          <section id={c.id} key={c.id}>
            <div className="wrap">
              <div className="shead rv">
                <div>
                  <div className="eyebrow">Collection</div>
                  <h2 style={{ marginTop: 14 }}>{c.name}</h2>
                  <p>{c.blurb}</p>
                </div>
                <a
                  className="btn btn-wa"
                  href={wa(`Hi! Please share your ${c.name} catalog.`, true)}
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppIcon />
                  View Catalog
                </a>
              </div>
              <div className="prods">
                {items.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section>
        <div className="wrap">
          <div className="shead rv">
            <div>
              <div className="eyebrow">Featured Collection</div>
              <h2 style={{ marginTop: 14 }}>
                Complete the <span className="gold">Look</span>
              </h2>
            </div>
          </div>
          <div className="prods">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
