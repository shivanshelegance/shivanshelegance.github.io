import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import ShopCard from "@/components/shop/ShopCard";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { GREETING, features, products, wa } from "@/lib/site";
import { FULL_URL, asset, pageMeta, url } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Our Story — Shivansh Elegance",
  "Shivansh Elegance is an Indian women's ethnic wear brand built on handpicked fabrics, traditional craftsmanship and timeless design, sold over WhatsApp.",
  "/about/"
);

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: url("/about/"),
  mainEntity: { "@id": `${FULL_URL}/#organization` },
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
  { t: "Traditional Craftsmanship", s: "Techniques passed down, finished by hand." },
  { t: "Modern Trends", s: "Silhouettes that feel current, never dated." },
  { t: "Made for Every Occasion", s: "From everyday comfort to the big day." },
];

export default function About() {
  return (
    <div className="se-ref">
      <JsonLd data={[aboutSchema, crumbs]} />
      <PageHero
        eyebrow="OUR STORY"
        title={
          <>
            More Than Just Clothes,
            <br />
            It&apos;s a Feeling
          </>
        }
        blurb="Handcrafted styles, premium fabrics and timeless designs — chosen by hand, checked by hand, packed with care."
        image="/images/hero-about.jpg"
        alt="Shivansh Elegance atelier"
      />

      <section className="container content">
        <div className="split">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/hero-about.jpg")} alt="Shivansh Elegance atelier" loading="lazy" />
          <div>
            <div className="section-heading">
              <h2>What we make</h2>
              <div className="heading-line" />
            </div>
            <div className="prose">
              <p>
                At Shivansh Elegance, we bring you handcrafted styles, premium fabrics
                and timeless designs that make you feel confident, elegant and beautiful
                — every single day.
              </p>
              <p>
                Every piece is chosen by hand, checked by hand, and packed with care.
                Style is not just what you wear — it&apos;s how you live.
              </p>
            </div>
          </div>
        </div>

        <div className="section-heading" style={{ marginTop: 54 }}>
          <h2>What we stand for</h2>
          <div className="heading-line" />
        </div>
        <div className="panel-grid">
          {PILLARS.map((p) => (
            <div className="panel" key={p.t}>
              <h3>{p.t}</h3>
              <p className="prose">{p.s}</p>
            </div>
          ))}
        </div>

        <div className="section-heading" style={{ marginTop: 54 }}>
          <h2>Why choose us</h2>
          <div className="heading-line" />
        </div>
        <div className="panel-grid">
          {features.map((f) => (
            <div className="panel" key={f.key}>
              <h3>{f.title}</h3>
              <p className="prose">{f.body}</p>
            </div>
          ))}
        </div>

        <div className="section-heading" style={{ marginTop: 54 }}>
          <h2>Popular right now</h2>
          <div className="heading-line" />
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((p) => (
            <ShopCard p={p} key={p.id} />
          ))}
        </div>

        <div className="page-cta">
          <div>
            <h2>Say hello</h2>
            <p>Browse the catalog, ask about sizes — we reply fast.</p>
          </div>
          <a
            className="footer-whatsapp"
            href={wa(GREETING)}
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
