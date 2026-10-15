import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Cta from "@/components/Cta";
import PageHeader from "@/components/PageHeader";
import { faqs, site, wa } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const metadata: Metadata = pageMeta(
  "FAQ — Shivansh Elegance",
  "Answers about ordering on WhatsApp, delivery across India, sizing, payments, exchanges and pricing at Shivansh Elegance.",
  "/faq/"
);

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHeader
        eyebrow="Questions"
        title={<>Frequently asked <span className="gold">questions</span></>}
        blurb="Ordering, delivery, sizing, payments and exchanges — answered. Still stuck? Ask us on WhatsApp and a real person replies."
      />
      <section>
        <div className="wrap">
          <div style={{ maxWidth: 820 }}>
            {faqs.map((f) => (
              <div className="feat rv" key={f.q} style={{ marginBottom: 16 }}>
                <h2 style={{ fontSize: "clamp(19px,2.2vw,24px)" }}>{f.q}</h2>
                <p style={{ marginTop: 10 }}>{f.a}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 26 }}>
            <a
              className="btn btn-wa"
              href={wa(`Hi ${site.brand}! I have a question about my order.`)}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              Ask us on WhatsApp
            </a>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
