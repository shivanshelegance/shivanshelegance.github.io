import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import ShopBrowser from "@/components/shop/ShopBrowser";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { products, wa } from "@/lib/site";
import { asset, pageMeta, url } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Women's Collection — Suits, Sarees, Lehengas, Kurtis & Gowns | Shivansh Elegance",
  "Shop women's Indian ethnic wear — embroidered suits, chiffon sarees, lehengas, kurti sets and party gowns. Filter the collection, pick your size and order on WhatsApp.",
  "/women/"
);

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Women's ethnic wear collection",
  url: url("/women/"),
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        category: p.category,
        image: url(p.image),
        url: url(`/women/${p.slug}/`),
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: p.price.replace(/[^0-9]/g, ""),
          availability: "https://schema.org/InStock",
        },
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

const HERO_FEATURES = [
  { t: "Premium\nQuality Fabrics", d: "Soft, breathable\nand long lasting" },
  { t: "Trendy &\nLatest Designs", d: "Stay stylish\nalways" },
  { t: "Secure Shopping\nvia WhatsApp", d: "Quick, easy\n& safe" },
  { t: "Your Style\nOur Priority", d: "Because you\ndeserve the best" },
];

export default function Women() {
  return (
    <div className="se-ref">
      <JsonLd data={[collectionSchema, crumbs]} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          id="heroImage"
          src={asset("/images/royal-pink-suit.jpg")}
          alt="Royal pink embroidered suit from the Shivansh Elegance women's collection"
        />
        <div className="hero-content">
          <div className="eyebrow">WOMEN&apos;S COLLECTION</div>
          <h1>
            Grace in
            <br />
            Every Thread
          </h1>
          <p>
            Elegant suits, flowy gowns, graceful sarees
            <br />
            and more &mdash; crafted for your every moment.
          </p>
          <div className="hero-features">
            {HERO_FEATURES.map((f) => (
              <div className="hero-feature" key={f.t}>
                <i aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8.5 12.5 2.5 2.5 4.5-5" />
                  </svg>
                </i>
                <span>
                  {f.t.split("\n").map((l, i) => (
                    <span key={i}>
                      {i > 0 ? <br /> : null}
                      {l}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTERS + COLLECTION ────────────────────── */}
      <ShopBrowser />

      {/* ── PROMO ────────────────────────────────────────────── */}
      <section className="container">
        <section className="promo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/royal-pink-suit.jpg")}
            alt="Limited edition styles"
            loading="lazy"
          />
          <div className="promo-content">
            <h2>
              Limited Edition
              <br />
              Styles
            </h2>
            <p>Unique designs. Premium fabrics. Only for you.</p>
            <a
              href={wa("Hello Shivansh Elegance! I would like to explore your collection.")}
              target="_blank"
              rel="noopener"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <WhatsAppIcon className="wa-icon" />
              Shop Now on WhatsApp
            </a>
          </div>
        </section>
      </section>

    </div>
  );
}
