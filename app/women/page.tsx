import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ShopGrid from "@/components/ShopGrid";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { products, site, wa } from "@/lib/site";
import { pageMeta, url } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Women's Collection — Shivansh Elegance",
  "Bandhani dresses, three-piece sets and coord sets. Browse the Shivansh Elegance women's collection and order each piece on WhatsApp.",
  "/women/"
);

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Women's Collection — Shivansh Elegance",
  url: url("/women/"),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        image: url(p.image),
        brand: { "@type": "Brand", name: site.brand },
        offers: {
          "@type": "Offer",
          price: p.price.replace(/[^\d]/g, ""),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: url(`/women/${p.slug}/`),
        },
      },
    })),
  },
};

export default function WomenPage() {
  return (
    <div className="showcase">
      <JsonLd data={schema} />

      <section className="sc-hero sc-hero-sm">
        <div
          className="sc-hero-img"
          role="img"
          aria-label="Bandhani dress from the Shivansh Elegance collection"
          style={{ backgroundImage: "url(/images/products/bandhani-dress-05.jpg)" }}
        />
        <div className="sc-hero-in">
          <div className="sc-hc">
            <div className="sc-eye">Trending Collection</div>
            <h1>
              <span>Elegance in</span>
              <br />
              Every Thread
            </h1>
            <p className="sc-hero-sub">
              Premium quality fabrics, timeless designs and styles that make you feel
              special.
            </p>
            <a
              className="sc-btn sc-gold"
              href={wa(`Hi ${site.brand}! I'd like to browse the women's collection.`)}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              Explore Women&apos;s Collection
            </a>
            <div className="sub">Click to view our WhatsApp catalog</div>
          </div>
        </div>
      </section>

      <div className="sc-wrap">
        <div className="sc-bar2">
          <h1 className="sc-collhead">Our Women&apos;s Collection</h1>
          <span className="sc-pmeta">{products.length} pieces</span>
        </div>
        <ShopGrid />
      </div>
    </div>
  );
}
