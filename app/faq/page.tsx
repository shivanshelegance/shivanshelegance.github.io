import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { faqs, site, wa } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "FAQ — Shivansh Elegance",
  "Answers about ordering on WhatsApp, delivery across India, sizing, payments, exchanges and pricing at Shivansh Elegance.",
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

export default function FaqPage() {
  return (
    <div className="se-ref">
      <JsonLd data={schema} />
      <PageHero
        eyebrow="QUESTIONS"
        title={
          <>
            Frequently asked
            <br />
            questions
          </>
        }
        blurb="Ordering, delivery, sizing, payments and exchanges — answered. Still stuck? Ask us on WhatsApp and a real person replies."
        image="/images/showcase-cats.webp"
        alt="Shivansh Elegance collection"
      />

      <section className="container content">
        <div style={{ maxWidth: 860 }}>
          {faqs.map((f) => (
            <div className="faq-item" key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>

        <div className="page-cta">
          <div>
            <h2>Still have a question?</h2>
            <p>Message us on WhatsApp and a real person will reply.</p>
          </div>
          <a
            className="footer-whatsapp"
            href={wa(`Hi ${site.brand}! I have a question about my order.`)}
            target="_blank"
            rel="noopener"
            style={{ padding: "14px 26px", fontSize: 13 }}
          >
            <WhatsAppIcon className="wa-icon" /> &nbsp; Ask us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
