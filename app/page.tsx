import JsonLd from "@/components/JsonLd";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { GREETING, categories, features, products, site, wa } from "@/lib/site";
import { pageMeta, url } from "@/lib/seo";

export const metadata = pageMeta(
  "Shivansh Elegance — Premium Women's Ethnic Wear, Ordered on WhatsApp",
  "Bandhani dresses, three-piece sets and coord sets from Shivansh Elegance. Browse the collection and order on WhatsApp — fast replies, easy ordering, delivery across India.",
  "/"
);

const featured = products.slice(0, 3);

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Shivansh Elegance pieces",
  itemListElement: featured.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      category: p.category,
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
};

const FEAT_ICONS: Record<string, string> = {
  fabric: "M12 9a6 6 0 1 0 0-6 6 6 0 0 0 0 6Zm0 0a3 3 0 1 0 0-3 3 3 0 0 0 0 3Zm-3.5 5L7 22l5-3 5 3-1.5-8",
  sparkle: "M2 6h12v10H2zM14 9h4l4 4v3h-8M6 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  shield: "M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5l-8-3Zm-3.5 10 2.5 2.5 4.5-5",
  heart: "M12 20s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20Z",
};

export default function Home() {
  return (
    <div className="showcase">
      <JsonLd data={itemList} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="sc-hero">
        <div
          className="sc-hero-img"
          role="img"
          aria-label="Three piece set from the Shivansh Elegance collection"
          style={{ backgroundImage: "url(/images/products/three-piece-01.jpg)" }}
        />
        <div className="sc-hero-in">
          <div className="sc-hc">
            <div className="sc-eye">Premium Women&apos;s Wear</div>
            <h1>
              <span>Grace in</span>
              <br />
              Every Thread
            </h1>
            <div className="tri">Trendy &nbsp;•&nbsp; Elegant &nbsp;•&nbsp; Comfortable</div>
            <a className="sc-btn sc-gold" href={wa(GREETING)} target="_blank" rel="noopener">
              <WhatsAppIcon />
              Explore Women&apos;s Collection &nbsp;→
            </a>
            <div className="sub">Click to view our WhatsApp catalog</div>
          </div>
        </div>
        <svg
          className="sc-leaf"
          width="70"
          height="140"
          viewBox="0 0 70 140"
          fill="none"
          stroke="#C6A25C"
          strokeWidth="1.2"
          aria-hidden="true"
        >
          <path d="M20 138C24 100 34 60 60 6" />
          <path d="M28 100c-14-4-22-16-22-30 14 4 22 16 22 30zM36 72c14-2 24-12 26-26-14 2-24 12-26 26zM46 44C34 38 30 26 32 14c12 6 16 18 14 30z" />
        </svg>
      </section>

      {/* ── SHOP BY CATEGORY ─────────────────────────────────────── */}
      <section className="sc-cats">
        <div className="sc-wrap">
          <div className="sc-sh">SHOP BY CATEGORY</div>
          <div className="sc-cgrid">
            {categories.map((c) => (
              <a className="sc-cat" href="/women/" key={c.id}>
                <div
                  className="ph prod"
                  role="img"
                  aria-label={c.name}
                  style={{ backgroundImage: `url(${c.image})` }}
                />
                <div className="t">
                  <h3>{c.name}</h3>
                  <p>{c.blurb}</p>
                  <span className="sc-btn sc-gold">
                    <WhatsAppIcon />
                    View Collection &nbsp;→
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────────── */}
      <section className="sc-why">
        <div className="sc-wrap">
          <div className="sc-why-grid">
            <div>
              <div className="sc-scr">Why Choose</div>
              <h2>Shivansh Elegance?</h2>
              <p className="lead">
                We bring you carefully selected styles, premium fabrics and timeless
                designs — so you always look and feel your best, every day.
              </p>
              <div className="sc-orn">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="#C6A25C" aria-hidden="true">
                  <path d="M2 14C8 12 14 8 20 2M8 11c-3-1-4-4-3-7 3 1 4 4 3 7zM14 7c3 0 5-2 6-5-3 0-5 2-6 5z" />
                </svg>
                <i />
              </div>
            </div>
            <div className="sc-feat">
              {features.map((f) => (
                <div className="sc-f" key={f.key}>
                  <div className="sc-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                      <path d={FEAT_ICONS[f.key]} />
                    </svg>
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED COLLECTION ──────────────────────────────────── */}
      <section className="sc-fc">
        <div
          className="sc-fc-ph"
          aria-hidden="true"
          style={{ backgroundImage: "url(/images/products/coord-set-04.jpg)" }}
        />
        <div className="sc-fc-tx">
          <div className="sc-eye">Featured Collection</div>
          <h2>
            Handpicked Styles
            <br />
            Just for You
          </h2>
          <p>
            Explore our latest collection of elegant and trendy outfits, crafted for
            every occasion.
          </p>
          <a className="sc-btn sc-gold" href="/women/">
            <WhatsAppIcon />
            Browse Women&apos;s Collection &nbsp;→
          </a>
        </div>
        {featured.map((p, i) => (
          <div className={`sc-pol sc-p${i + 1}`} key={p.id}>
            <div
              className="bg"
              role="img"
              aria-label={p.name}
              style={{ backgroundImage: `url(${p.image})` }}
            />
          </div>
        ))}
        <div className="sc-scr2">
          Elegant
          <br />
          Timeless
          <br />
          You
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────────── */}
      <section className="sc-cta">
        <div className="sc-wrap">
          <div className="sc-cta-grid">
            <div className="lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-gold.svg" alt={site.brand} />
            </div>
            <div>
              <h2>
                Your Next Favourite Outfit
                <br />
                is Just a WhatsApp Away
              </h2>
              <p className="lead">
                Browse our complete collection, get product details, prices and more —
                all on WhatsApp.
              </p>
            </div>
            <div>
              <a className="sc-btn sc-wa" href={wa(GREETING)} target="_blank" rel="noopener">
                <WhatsAppIcon />
                Shop Now on WhatsApp
              </a>
              <div className="sc-proof">
                <span>Fast replies</span>
                <span>Easy ordering</span>
                <span>Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sc-quote">
        Style is not just what you wear, it&apos;s how you live.
      </div>
    </div>
  );
}
