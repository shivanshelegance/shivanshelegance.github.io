import type { Metadata } from "next";
import ShowcaseCta from "@/components/ShowcaseCta";
import TrustRow from "@/components/TrustRow";
import JsonLd from "@/components/JsonLd";
import ProductBrowser from "@/components/ProductBrowser";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { features, products, wa } from "@/lib/site";
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

const ICONS: Record<string, React.ReactNode> = {
  fabric: (
    <><circle cx="12" cy="9" r="6" /><circle cx="12" cy="9" r="3" /><path d="M8.5 14 7 22l5-3 5 3-1.5-8" /></>
  ),
  sparkle: (
    <><path d="M12 3l2.2 5.5L20 11l-5.8 2.5L12 19l-2.2-5.5L4 11l5.8-2.5z" /><path d="M18 16l.9 2.1L21 19l-2.1.9L18 22l-.9-2.1L15 19l2.1-.9z" /></>
  ),
  shield: (
    <><path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></>
  ),
  heart: (
    <><path d="M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20z" /></>
  ),
};

export default function Women() {
  return (
    <div className="showcase">
      <JsonLd data={[collectionSchema, crumbs]} />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="sc-hero sc-hero-sm">
        <div
          className="sc-hero-img"
          role="img"
          aria-label="Woman in a rose-pink embroidered anarkali from the Shivansh Elegance women's collection"
          style={{ backgroundImage: `url(${asset("/images/hero-women.jpg")})` }}
        />
        <div className="sc-hero-in">
          <div className="sc-hc">
            <div className="sc-eye">Women&apos;s Collection</div>
            <h1>
              <span>Grace in</span>
              <br />
              Every Thread
            </h1>
            <div className="tri">Elegant suits &nbsp;•&nbsp; Flowy gowns &nbsp;•&nbsp; Graceful sarees</div>
            <p className="sc-hero-sub">
              and more &mdash; crafted for your every moment.
            </p>
            <a
              className="sc-btn sc-gold"
              href={wa("Hi! I'd like to browse the women's collection.", true)}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              Explore Women&apos;s Collection &nbsp;→
            </a>
            <div className="sub">Click to view our WhatsApp catalog</div>
          </div>
        </div>
        <p className="sc-crumb">
          <a href="/">Home</a> &nbsp;&gt;&nbsp; <b>Women</b>
        </p>
      </section>

      {/* ── WHY CHOOSE ─────────────────────────────────────────── */}
      <section className="sc-why" style={{ padding: "56px 0" }}>
        <div className="sc-wrap">
          <div className="sc-feat">
            {features.map((f) => (
              <div className="sc-f" key={f.key}>
                <div className="sc-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    {ICONS[f.key]}
                  </svg>
                </div>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTION ─────────────────────────────────────────── */}
      <section>
        <div className="sc-wrap">
          <ProductBrowser />

          <TrustRow />
        </div>
      </section>

      <ShowcaseCta
        headline={
          <>
            Limited Edition
            <br />
            Styles
          </>
        }
        lead="Unique designs. Premium fabrics. Only for you."
        message="Hi! I'd like to see the limited edition styles."
      />

      <ShowcaseCta
        headline="Stay Connected"
        lead="Follow us for the latest styles, offers and more."
        message="Hi! I'd like to stay updated on new arrivals and offers."
      />
    </div>
  );
}
