import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { GREETING, features, site, wa } from "@/lib/site";
import { pageMeta, url } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Our Story — Shivansh Elegance",
  "Shivansh Elegance is a women's ethnic wear label built on handpicked fabrics, timeless design and a simple way to buy: a WhatsApp conversation.",
  "/about/"
);

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Shivansh Elegance",
  url: url("/about/"),
  mainEntity: { "@type": "Organization", name: site.brand, slogan: site.tagline },
};

const crumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
    { "@type": "ListItem", position: 2, name: "About", item: url("/about/") },
  ],
};

const PILLARS = [
  {
    title: "Handpicked, not bulk-bought",
    body: "Every piece is chosen one at a time for fabric, finish and how it actually falls on the body.",
  },
  {
    title: "Honest photographs",
    body: "What you see is the real garment in real light — no stock images, no surprises on delivery.",
  },
  {
    title: "A conversation, not a checkout",
    body: "Ask about fabric, sizing or styling and a real person answers. Then order in the same chat.",
  },
];

export default function AboutPage() {
  return (
    <div className="showcase">
      <JsonLd data={[schema, crumbs]} />

      <section className="sc-hero sc-hero-sm">
        <div
          className="sc-hero-img"
          role="img"
          aria-label="Shivansh Elegance collection"
          style={{ backgroundImage: "url(/images/products/bandhani-dress-03.jpg)" }}
        />
        <div className="sc-hero-in">
          <div className="sc-hc">
            <div className="sc-eye">Our Story</div>
            <h1>
              <span>More Than Just</span>
              <br />
              Clothes, It&apos;s a Feeling
            </h1>
            <p className="sc-hero-sub">
              Shivansh Elegance began with a simple belief: getting dressed should feel
              good, and buying something beautiful shouldn&apos;t be complicated.
            </p>
          </div>
        </div>
      </section>

      <div className="sc-wrap">
        <div className="sc-bar2">
          <h1 className="sc-collhead">What we stand for</h1>
        </div>
        <div className="sc-trust">
          {PILLARS.map((p) => (
            <div className="sc-trust-i" key={p.title}>
              <div>
                <b>{p.title}</b>
                <span>{p.body}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="sc-bar2" style={{ marginTop: 48 }}>
          <h2 className="sc-collhead">Why customers come back</h2>
        </div>
        <div className="sc-feat">
          {features.map((f) => (
            <div className="sc-f" key={f.key} style={{ textAlign: "left" }}>
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="sc-cta" style={{ marginTop: 56 }}>
        <div className="sc-wrap">
          <div className="sc-cta-grid">
            <div className="lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-gold.svg" alt={site.brand} />
            </div>
            <div>
              <h2>Come say hello</h2>
              <p className="lead">
                Tell us what you&apos;re looking for and we&apos;ll send you pieces that
                suit you — no pressure, no hard sell.
              </p>
            </div>
            <div>
              <a className="sc-btn sc-wa" href={wa(GREETING)} target="_blank" rel="noopener">
                <WhatsAppIcon />
                Chat with us
              </a>
              <div className="sc-proof">
                <span>Fast replies</span>
                <span>Real people</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
