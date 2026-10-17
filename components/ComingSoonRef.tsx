import Link from "next/link";
import PageHero from "./PageHero";
import ShopCard from "./shop/ShopCard";
import WhatsAppIcon from "./WhatsAppIcon";
import { products, wa } from "@/lib/site";

/** "Coming soon" page in the reference implementation's visual language. */
export default function ComingSoonRef({
  eyebrow,
  title,
  blurb,
  image,
  alt,
  message,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  message: string;
}) {
  return (
    <div className="se-ref">
      <PageHero eyebrow={eyebrow} title={title} blurb={blurb} image={image} alt={alt} />

      <section className="container content">
        <div className="notice">Coming Soon</div>
        <div className="section-heading" style={{ marginTop: 26 }}>
          <h2>Join the waitlist</h2>
          <div className="heading-line" />
        </div>
        <div className="split">
          <div className="prose">
            <p>
              We are putting the finishing touches to this collection. Send us a message
              on WhatsApp and we will let you know the day it goes live — no spam, just
              the launch.
            </p>
            <p>
              Until then, the women&apos;s collection is available now, with new pieces
              added every week.
            </p>
          </div>
          <div className="panel">
            <h3>What happens next</h3>
            <div className="love-list" style={{ borderLeft: 0, paddingLeft: 0 }}>
              <p>Send us a WhatsApp message</p>
              <p>We save your number for the launch</p>
              <p>You get first pick of the new collection</p>
            </div>
            <a
              className="order-btn"
              href={wa(message)}
              target="_blank"
              rel="noopener"
              style={{ marginTop: 22 }}
            >
              <WhatsAppIcon className="wa-icon" />
              Notify me on WhatsApp
            </a>
          </div>
        </div>

        <div className="section-heading" style={{ marginTop: 52 }}>
          <h2>Explore our women&apos;s collection</h2>
          <div className="heading-line" />
          <Link
            className="card-whatsapp"
            href="/women"
            style={{ width: "auto", padding: "9px 18px", textDecoration: "none" }}
          >
            Shop Women
          </Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((p) => (
            <ShopCard p={p} key={p.id} />
          ))}
        </div>

        <div className="page-cta">
          <div>
            <h2>Rather talk to us?</h2>
            <p>Ask about fabric, sizing, delivery or anything else.</p>
          </div>
          <a
            className="footer-whatsapp"
            href={wa("Hi! I have a question about Shivansh Elegance.")}
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
