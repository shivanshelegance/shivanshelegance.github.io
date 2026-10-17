import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ShopCard from "@/components/shop/ShopCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { GREETING, features, products, wa } from "@/lib/site";
import { asset, pageMeta, url } from "@/lib/seo";

export const metadata = pageMeta(
  "Shivansh Elegance — Premium Women's Ethnic Wear, Ordered on WhatsApp",
  "Sarees, suits, lehengas, kurtis and gowns from Shivansh Elegance. Browse the collection and order on WhatsApp — fast replies, easy ordering, delivery across India.",
  "/"
);

const featured = [products[0], products[1], products[3], products[6]].filter(Boolean);

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
        url: url(`/women/${p.slug}/`),
      },
    },
  })),
};

const CATEGORIES = [
  { name: "Suits", img: "/images/cat-suits.jpg" },
  { name: "Sarees", img: "/images/cat-sarees.jpg" },
  { name: "Lehengas", img: "/images/cat-lehengas.jpg" },
  { name: "Kurtis", img: "/images/cat-kurtis.jpg" },
  { name: "Anarkalis", img: "/images/cat-anarkalis.jpg" },
];

export default function Home() {
  return (
    <div className="se-ref">
      <JsonLd data={itemList} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <PageHero
        eyebrow="SHIVANSH ELEGANCE"
        title={
          <>
            Ethnic Wear,
            <br />
            Beautifully Curated
          </>
        }
        blurb="Sarees, suits, lehengas and gowns — handpicked for every occasion. Browse the collection, then order in a single WhatsApp message."
        image="/images/hero-home.jpg"
        alt="Shivansh Elegance ethnic wear collection"
      />

      <section className="container content">
        {/* ── SHOP BY CATEGORY ───────────────────────────────── */}
        <div className="section-heading">
          <h2>Shop by Category</h2>
          <div className="heading-line" />
        </div>
        <div className="cat-grid">
          {CATEGORIES.map((c) => (
            <Link className="cat-card" href="/women" key={c.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(c.img)} alt={`${c.name} collection`} loading="lazy" />
              <span>{c.name}</span>
            </Link>
          ))}
        </div>

        {/* ── FEATURED ───────────────────────────────────────── */}
        <div className="section-heading" style={{ marginTop: 54 }}>
          <h2>Featured Collection</h2>
          <div className="heading-line" />
          <Link
            className="card-whatsapp"
            href="/women"
            style={{ width: "auto", padding: "9px 18px" }}
          >
            View all
          </Link>
        </div>
        <div className="product-grid">
          {featured.map((p) => (
            <ShopCard p={p} key={p.id} />
          ))}
        </div>

        {/* ── WHY CHOOSE ─────────────────────────────────────── */}
        <div className="section-heading" style={{ marginTop: 54 }}>
          <h2>Why Shivansh Elegance</h2>
          <div className="heading-line" />
        </div>
        <div className="panel-grid four">
          {features.map((f) => (
            <div className="panel" key={f.key}>
              <h3>{f.title}</h3>
              <p className="prose">{f.body}</p>
            </div>
          ))}
        </div>

        {/* ── PROMO ──────────────────────────────────────────── */}
        <section className="promo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/detail.jpg")} alt="Shivansh Elegance collection" loading="lazy" />
          <div className="promo-content">
            <h2>
              Your next favourite outfit
              <br />
              is a WhatsApp away
            </h2>
            <p>Browse the catalog, get product details and prices — all on WhatsApp.</p>
            <a
              href={wa(GREETING)}
              target="_blank"
              rel="noopener"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <WhatsAppIcon className="wa-icon" />
              Shop Now on WhatsApp
            </a>
          </div>
        </section>

        <div className="quote-band">
          <p>
            Style is not just what you wear,
            <br />
            it&apos;s how you live.
          </p>
        </div>
      </section>
    </div>
  );
}
