import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { GREETING, business, site, wa } from "@/lib/site";
import { pageMeta, url } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Contact — Shivansh Elegance",
  "Order and ask questions on WhatsApp. Sizing help, fabric queries, delivery across India and exchanges — a real person replies.",
  "/contact/"
);

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Shivansh Elegance",
  url: url("/contact/"),
  mainEntity: {
    "@type": "Organization",
    name: site.brand,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
  },
};

const crumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
    { "@type": "ListItem", position: 2, name: "Contact", item: url("/contact/") },
  ],
};

const WAYS = [
  { label: "Order on WhatsApp", body: "Browse the catalog, confirm your size and address — all in one chat." },
  { label: "Sizing help", body: "Send your measurements and we'll confirm the right size before dispatch." },
  { label: "Fabric & care", body: "Ask about the fabric, the work and how to care for it before you buy." },
];

export default function ContactPage() {
  return (
    <div className="showcase">
      <JsonLd data={[schema, crumbs]} />

      <section className="sc-hero sc-hero-sm">
        <div
          className="sc-hero-img"
          role="img"
          aria-label="Shivansh Elegance collection"
          style={{ backgroundImage: "url(/images/products/three-piece-02.jpg)" }}
        />
        <div className="sc-hero-in">
          <div className="sc-hc">
            <div className="sc-eye">Contact</div>
            <h1>
              <span>Let&apos;s find your</span>
              <br />
              perfect outfit
            </h1>
            <p className="sc-hero-sub">
              The quickest way to reach us is WhatsApp. Send a message and a real
              person will help you pick, size and order.
            </p>
            <a className="sc-btn sc-gold" href={wa(GREETING)} target="_blank" rel="noopener">
              <WhatsAppIcon />
              Start a conversation
            </a>
            <div className="sub">We usually reply within the hour.</div>
          </div>
        </div>
      </section>

      <div className="sc-wrap">
        <div className="sc-bar2">
          <h1 className="sc-collhead">How to reach us</h1>
        </div>
        <div className="sc-trust">
          {WAYS.map((w) => (
            <div className="sc-trust-i" key={w.label}>
              <div>
                <b>{w.label}</b>
                <span>{w.body}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="sc-bar2" style={{ marginTop: 48 }}>
          <h2 className="sc-collhead">Good to know</h2>
        </div>
        <dl className="sc-spec">
          <div><dt>Hours</dt><dd style={{ fontSize: 15, fontWeight: 400 }}>{business.hours}</dd></div>
          <div><dt>Delivery</dt><dd style={{ fontSize: 15, fontWeight: 400 }}>{business.delivery}</dd></div>
          <div><dt>Payments</dt><dd style={{ fontSize: 15, fontWeight: 400 }}>{business.payments}</dd></div>
          <div><dt>Returns</dt><dd style={{ fontSize: 15, fontWeight: 400 }}>{business.returns}</dd></div>
        </dl>
      </div>

      <section className="sc-cta" style={{ marginTop: 56 }}>
        <div className="sc-wrap">
          <div className="sc-cta-grid">
            <div className="lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-gold.svg" alt={site.brand} />
            </div>
            <div>
              <h2>Send us a message</h2>
              <p className="lead">
                One tap opens WhatsApp with a message ready to go — just hit send.
              </p>
            </div>
            <div>
              <a className="sc-btn sc-wa" href={wa(GREETING)} target="_blank" rel="noopener">
                <WhatsAppIcon />
                Chat with us
              </a>
              <div className="sc-proof">
                <span>Fast replies</span>
                <span>Easy ordering</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
