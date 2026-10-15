import type { Metadata } from "next";
import Cta from "@/components/Cta";
import { business, wa } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
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
    <>
      <JsonLd data={[contactSchema, crumbs]} />
      <PageHeader
        eyebrow="Get in touch"
        title={<>Let&apos;s find your <span className="gold">perfect outfit</span></>}
        blurb="The fastest way to reach us is WhatsApp — we reply within minutes during business hours."
      />
      <section>
        <div className="wrap">
          <div className="cgrid">
            <div className="feat rv">
              <h3>WhatsApp</h3>
              <p style={{ margin: "10px 0 18px" }}>
                Browse the catalog, ask about sizes, prices, delivery and payment.
              </p>
              <a
                className="btn btn-wa"
                href={wa("Hi Shivansh Elegance! I have a question.")}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon />
                Chat on WhatsApp
              </a>
            </div>
            <div className="feat rv">
              <h3>Ordering</h3>
              <p style={{ margin: "10px 0 18px" }}>
                Share the piece you love, confirm your size and address — we handle
                the rest.
              </p>
              <a
                className="btn btn-wa"
                href={wa("Hi! I'd like to place an order.")}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon />
                Start an order
              </a>
            </div>
            <div className="feat rv">
              <h3>Hours</h3>
              <p style={{ marginTop: 10 }}>
                Monday to Saturday
                <br />
                11:00 AM – 8:00 PM IST
              </p>
            </div>
            <div className="feat rv">
              <h3>Delivery</h3>
              <p style={{ marginTop: 10 }}>
                Across India. Dispatch within 24–48 hours, tracking shared on
                WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
