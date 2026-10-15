import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { products, wa } from "@/lib/site";
import { asset, pageMeta, url } from "@/lib/seo";

export const metadata = pageMeta(
  "Shivansh Elegance — Premium Women's Ethnic Wear, Ordered on WhatsApp",
  "Sarees, anarkalis, lehengas, kurtis and salwar suits from Shivansh Elegance. Browse the collection and order on WhatsApp — fast replies, easy ordering, delivery across India.",
  "/"
);

/* The three pieces shown in the polaroid stack — kept in sync with the
   ItemList schema below so the structured data describes what is on screen. */
const featured = [products[0], products[1], products[3]].filter(Boolean);
const POL_POS = [
  { cls: "sc-p1", bg: "722.9% auto", pos: "50.68% 37.58%" },
  { cls: "sc-p2", bg: "722.9% auto", pos: "72.73% 37.58%" },
  { cls: "sc-p3", bg: "722.9% auto", pos: "94.78% 37.58%" },
];

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
      brand: { "@type": "Brand", name: "Shivansh Elegance" },
      offers: {
        "@type": "Offer",
        price: p.price.replace(/[^\d]/g, ""),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: url("/women"),
      },
    },
  })),
};

const WHY = [
  {
    t: "Premium\nQuality Fabrics",
    d: "Soft, breathable\nand long lasting",
    p: (
      <>
        <circle cx="12" cy="9" r="6" />
        <circle cx="12" cy="9" r="3" />
        <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
      </>
    ),
  },
  {
    t: "Trendy &\nLatest Designs",
    d: "Stay stylish\nalways",
    p: (
      <>
        <path d="M2 6h12v10H2zM14 9h4l4 4v3h-8" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
  },
  {
    t: "Secure Shopping\nvia WhatsApp",
    d: "Quick, easy\n& safe",
    p: (
      <>
        <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </>
    ),
  },
  {
    t: "Your Style\nOur Priority",
    d: "Because you\ndeserve the best",
    p: (
      <path d="M12 20s-8-4.6-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20z" />
    ),
  },
];

const CATS = [
  { href: "/women", name: "Women", copy: "Suits • Kurtis • Gowns • Sets",
    size: "454.5% auto", pos: "72.65% 4.38%", top: false, soon: false },
  { href: "/men", name: "Men", copy: "Kurtas • Shirts • Ethnic Wear • Casuals",
    size: "638.3% auto", pos: "50.2% 35.41%", top: true, soon: true },
  { href: "/kids", name: "Child", copy: "Ethnic Wear • Frocks • Sets • Casuals",
    size: "638.3% auto", pos: "86.56% 35.41%", top: true, soon: true },
];

export default function Home() {
  return (
    <div className="showcase">
      <JsonLd data={itemList} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="sc-hero">
        <div
          className="sc-hero-img"
          role="img"
          aria-label="Woman in a rose-pink embroidered anarkali with dupatta from Shivansh Elegance"
          style={{
            backgroundImage: `url(${asset("/images/showcase-hero.webp")})`,
          }}
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
            <a
              className="sc-btn sc-gold"
              href={wa("Hi! I'd like to explore the women's collection.", true)}
              target="_blank"
              rel="noopener"
            >
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

      {/* ── SHOP BY CATEGORY ─────────────────────────────────── */}
      <section className="sc-cats">
        <div className="sc-wrap">
          <h2 className="sc-sh">Shop by Category</h2>
          <div className="sc-cgrid">
            {CATS.map((c, i) => (
              <Link
                key={c.href}
                href={c.href}
                className={`sc-cat${i === 0 ? " big" : ""}`}
              >
                <div
                  className={`ph${c.top ? " top" : ""}`}
                  role="img"
                  aria-label={`${c.name} — ${c.copy}`}
                  style={{
                    backgroundImage: `url(${asset("/images/showcase-cats.webp")})`,
                    backgroundSize: c.size,
                    backgroundPosition: c.pos,
                  }}
                />
                <div className="t">
                  <h3>{c.name}</h3>
                  <p>{c.copy}</p>
                  <span className={`sc-btn ${c.soon ? "sc-soon" : "sc-gold"}`}>
                    <WhatsAppIcon />
                    {c.soon ? "Coming Soon" : "View Collection →"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────── */}
      <section className="sc-why">
        <div className="sc-wrap sc-why-grid">
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
            {WHY.map((f) => (
              <div className="sc-f" key={f.t}>
                <div className="sc-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                    {f.p}
                  </svg>
                </div>
                <h4>{f.t.split("\n").map((l, i) => (<span key={i}>{l}{i === 0 ? <br /> : null}</span>))}</h4>
                <p>{f.d.split("\n").map((l, i) => (<span key={i}>{l}{i === 0 ? <br /> : null}</span>))}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COLLECTION ──────────────────────────────── */}
      <section className="sc-fc">
        <div
          className="sc-fc-ph"
          aria-hidden="true"
          style={{ backgroundImage: `url(${asset("/images/showcase-cats.webp")})` }}
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
          <Link className="sc-btn sc-gold" href="/women">
            Browse Women&apos;s Collection &nbsp;→
          </Link>
        </div>
        {featured.map((p, i) => (
          <div className={`sc-pol ${POL_POS[i].cls}`} key={p.id}>
            <div
              className="bg"
              role="img"
              aria-label={p.name}
              style={{
                backgroundImage: `url(${asset("/images/showcase-rack.webp")})`,
                backgroundSize: POL_POS[i].bg,
                backgroundPosition: POL_POS[i].pos,
              }}
            />
          </div>
        ))}
        <div className="sc-scr2" aria-hidden="true">
          Elegant
          <br />
          Timeless
          <br />
          You
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────── */}
      <section className="sc-cta">
        <div className="sc-wrap sc-cta-grid">
          <div className="lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo-gold.svg")} alt="Shivansh Elegance" />
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
            <a
              className="sc-btn sc-wa"
              href={wa("Hi! I'd like to shop the Shivansh Elegance collection.", true)}
              target="_blank"
              rel="noopener"
            >
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
      </section>

      <p className="sc-quote">
        <i aria-hidden="true" />
        Style is not just what you wear, it&apos;s how you live.
      </p>
    </div>
  );
}
