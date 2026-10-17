import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { business, wa } from "@/lib/site";
import { pageMeta, url } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Contact — Order Shivansh Elegance on WhatsApp",
  "Contact Shivansh Elegance on WhatsApp for orders, sizing help and delivery questions. Monday to Saturday, 11:00 AM – 8:00 PM IST.",
  "/contact/"
);

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: url("/contact/"),
  mainEntity: {
    "@type": "Organization",
    name: "Shivansh Elegance",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English", "Hindi"],
      hoursAvailable: business.hours,
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

export default function Contact() {
  return (
    <div className="se-ref">
      <JsonLd data={[contactSchema, crumbs]} />
      <PageHero
        eyebrow="GET IN TOUCH"
        title={
          <>
            Let&apos;s find your
            <br />
            perfect outfit
          </>
        }
        blurb="The fastest way to reach us is WhatsApp — we reply within minutes during business hours."
        image="/images/detail.jpg"
        alt="Contact Shivansh Elegance"
      />

      <section className="container content">
        <div className="panel-grid">
          <div className="panel">
            <h3>WhatsApp</h3>
            <p className="prose" style={{ marginBottom: 18 }}>
              Browse the catalog, ask about sizes, prices, delivery and payment.
            </p>
            <a className="card-whatsapp" href={wa("Hi Shivansh Elegance! I have a question.")} target="_blank" rel="noopener">
              <WhatsAppIcon className="wa-icon" />
              Chat on WhatsApp
            </a>
          </div>
          <div className="panel">
            <h3>Ordering</h3>
            <p className="prose" style={{ marginBottom: 18 }}>
              Share the piece you love, confirm your size and address — we handle the rest.
            </p>
            <a className="card-whatsapp" href={wa("Hi! I'd like to place an order.")} target="_blank" rel="noopener">
              <WhatsAppIcon className="wa-icon" />
              Start an order
            </a>
          </div>
          <div className="panel">
            <h3>Hours</h3>
            <p className="prose">
              Monday to Saturday
              <br />
              {business.hours.replace("Monday to Saturday, ", "")}
            </p>
          </div>
        </div>

        <div className="section-heading" style={{ marginTop: 54 }}>
          <h2>Good to know</h2>
          <div className="heading-line" />
        </div>
        <div className="split">
          <div className="panel">
            <h3>Delivery</h3>
            <p className="prose">{business.delivery}</p>
          </div>
          <div className="panel">
            <h3>Payments &amp; returns</h3>
            <p className="prose">{business.payments}</p>
            <p className="prose" style={{ marginTop: 14 }}>{business.returns}</p>
          </div>
        </div>

        <div className="page-cta">
          <div>
            <h2>Prefer to just ask?</h2>
            <p>{business.hours}</p>
          </div>
          <a
            className="footer-whatsapp"
            href={wa("Hi Shivansh Elegance! I have a question.")}
            target="_blank"
            rel="noopener"
            style={{ padding: "14px 26px", fontSize: 13 }}
          >
            <WhatsAppIcon className="wa-icon" /> &nbsp; Chat with us
          </a>
        </div>
      </section>
    </div>
  );
}
