import type { Metadata } from "next";
import Features from "@/components/Features";
import Quote from "@/components/Quote";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import { pageMeta, url, asset } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Our Story — Shivansh Elegance",
  "Shivansh Elegance is an Indian women's ethnic wear brand built on handpicked fabrics, traditional craftsmanship and timeless design, sold over WhatsApp.",
  "/about/"
);

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: url("/about/"),
  mainEntity: { "@id": "https://shivanshelegance.github.io/shivanshelegance/#organization" },
};

const crumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: url("/") },
    { "@type": "ListItem", position: 2, name: "About", item: url("/about/") },
  ],
};

export default function About() {
  return (
    <>
      <JsonLd data={[aboutSchema, crumbs]} />
      <PageHeader
        eyebrow="Our Story"
        title={<>More Than Just Clothes, <span className="gold">It&apos;s a Feeling</span></>}
        blurb="Handcrafted styles, premium fabrics and timeless designs — chosen by hand, checked by hand, packed with care."
      />
      <section>
        <div className="wrap">
          <div className="story">
            <div className="story-img rv">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/images/hero-about.jpg")} alt="Shivansh Elegance atelier" />
            </div>
            <div className="rv">
              <div className="eyebrow">Our Story</div>
              <h2 style={{ marginTop: 14 }}>What we make</h2>
              <p style={{ marginTop: 18 }}>
                At Shivansh Elegance, we bring you handcrafted styles, premium
                fabrics and timeless designs that make you feel confident, elegant
                and beautiful — every single day.
              </p>
              <p style={{ marginTop: 14 }}>
                Every piece is chosen by hand, checked by hand, and packed with
                care. Style is not just what you wear — it&apos;s how you live.
              </p>
              <div className="pillars">
                <div className="pillar">
                  <div>
                    <b>Traditional Craftsmanship</b>
                    <span>Techniques passed down, finished by hand.</span>
                  </div>
                </div>
                <div className="pillar">
                  <div>
                    <b>Modern Trends</b>
                    <span>Silhouettes that feel current, never dated.</span>
                  </div>
                </div>
                <div className="pillar">
                  <div>
                    <b>Made for Every Occasion</b>
                    <span>From everyday comfort to the big day.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Quote />
      <Cta />
    </>
  );
}
