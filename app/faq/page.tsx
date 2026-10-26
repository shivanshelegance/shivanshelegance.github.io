import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { business, faqs, site, wa } from "@/lib/site";
import { pageMeta, url } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "FAQ — Shivansh Elegance",
  "Answers about ordering on WhatsApp, delivery across India, sizing, payments and exchanges at Shivansh Elegance.",
  "/faq/"
);

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const crumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
    { "@type": "ListItem", position: 2, name: "FAQ", item: url("/faq/") },
  ],
};

const GOOD_TO_KNOW = [
  { label: "Delivery", body: business.delivery },
  { label: "Payments", body: business.payments },
  { label: "Returns", body: business.returns },
  { label: "Hours", body: business.hours },
];

export default function FaqPage() {
  return (
    <div className="showcase">
      <JsonLd data={[schema, crumbs]} />

      <section className="sc-hero sc-hero-sm">
        <div
          className="sc-hero-img"
          role="img"
          aria-label="Shivansh Elegance collection"
          style={{ backgroundImage: "url(/images/products/coord-set-01.jpg)" }}
        />
        <div className="sc-hero-in">
          <div className="sc-hc">
            <div className="sc-eye">Questions</div>
            <h1>
              <span>Frequently asked</span>
              <br />
              questions
            </h1>
            <p className="sc-hero-sub">
              Ordering, delivery, sizing, payments and exchanges — answered. Still
              stuck? Ask us on WhatsApp and a real person replies.
            </p>
          </div>
        </div>
      </section>

      <div className="sc-wrap">
        <div className="sc-bar2">
          <h1 className="sc-collhead">Everything you might want to know</h1>
        </div>
        <div className="sc-faq">
          {faqs.map((f) => (
            <details className="sc-faq-i" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>

        <div className="sc-bar2" style={{ marginTop: 48 }}>
          <h2 className="sc-collhead">Good to know</h2>
        </div>
        <dl className="sc-spec">
          {GOOD_TO_KNOW.map((g) => (
            <div key={g.label}>
              <dt>{g.label}</dt>
              <dd style={{ fontSize: 15, fontWeight: 400 }}>{g.body}</dd>
            </div>
          ))}
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
              <h2>Still have a question?</h2>
              <p className="lead">
                Message us on WhatsApp and a real person will reply — usually within
                the hour.
              </p>
            </div>
            <div>
              <a
                className="sc-btn sc-wa"
                href={wa(`Hi ${site.brand}! I have a question about my order.`)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon />
                Ask us on WhatsApp
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
