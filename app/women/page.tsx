import type { Metadata } from "next";
import ShowcaseCta from "@/components/ShowcaseCta";
import JsonLd from "@/components/JsonLd";
import ProductBrowser from "@/components/ProductBrowser";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { products, trust, wa } from "@/lib/site";
import { asset, pageMeta, url } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Women's Collection — Sarees, Anarkalis, Lehengas, Kurtis | Shivansh Elegance",
  "Shop women's Indian ethnic wear — sarees, anarkalis, lehengas, kurtis and salwar suits. Filter the collection, pick your size and order on WhatsApp.",
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

      {/* ── COLLECTION ─────────────────────────────────────────── */}
      <section>
        <div className="sc-wrap">
          <ProductBrowser />

          <div className="sc-trust">
            {trust.map((t) => (
              <div className="sc-trust-i" key={t.title}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {t.icon === "truck" ? (
                    <>
                      <path d="M2 6h12v10H2zM14 9h4l4 4v3h-8" />
                      <circle cx="6" cy="18" r="2" />
                      <circle cx="18" cy="18" r="2" />
                    </>
                  ) : null}
                  {t.icon === "return" ? (
                    <>
                      <path d="M3 12a9 9 0 1 0 3-6.7" />
                      <path d="M3 4v5h5" />
                    </>
                  ) : null}
                  {t.icon === "shield" ? (
                    <>
                      <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5z" />
                      <path d="m8.5 12 2.5 2.5 4.5-5" />
                    </>
                  ) : null}
                </svg>
                <div>
                  <b>{t.title}</b>
                  <span>{t.blurb}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ShowcaseCta
        headline={
          <>
            Want a Piece You Don&apos;t
            <br />
            See Here?
          </>
        }
        lead="New arrivals land on WhatsApp first. Tell us your size, colour and occasion and we’ll find the piece for you."
        message="Hi! I’d like to see the latest women’s collection."
      />
    </div>
  );
}
