import Link from "next/link";
import { wa } from "@/lib/site";
import { products } from "@/lib/site";
import Icon from "./Icon";
import ProductCard from "./ProductCard";
import WhatsAppIcon from "./WhatsAppIcon";
import { asset } from "@/lib/seo";

type Props = {
  eyebrow: string;
  headline: string;
  blurb: string;
  image: string;
  alt: string;
  message: string;
};

export default function ComingSoon({
  eyebrow, headline, blurb, image, alt, message,
}: Props) {
  return (
    <>
      <section className="soon">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(image)}
          alt={alt}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", filter: "saturate(.6) brightness(.42)",
          }}
        />
        <div className="wrap soon-in" style={{ position: "relative", zIndex: 2 }}>
          <div className="badge">Coming Soon</div>
          <div className="eyebrow">{eyebrow}</div>
          <h1 style={{ marginTop: 16 }}>{headline}</h1>
          <p style={{ margin: "20px auto 0", maxWidth: 460 }}>{blurb}</p>
          <div style={{ marginTop: 32 }}>
            <a className="btn btn-wa" href={wa(message)} target="_blank" rel="noopener">
              <WhatsAppIcon />
              Notify me on WhatsApp
            </a>
          </div>
          <div className="sub-cta">We&apos;ll message you the moment it drops</div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="shead rv">
            <div>
              <div className="eyebrow">In the meantime</div>
              <h2 style={{ marginTop: 14 }}>
                Explore our <span className="gold">women&apos;s collection</span>
              </h2>
              <p>Live now — browse the full catalog on WhatsApp.</p>
            </div>
            <Link className="btn btn-gold" href="/women">Shop Women</Link>
          </div>
          <div className="prods">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="feats">
            <div className="feat rv">
              <Icon name="fabric" />
              <h3>Fast replies</h3>
              <p>Questions answered on WhatsApp within minutes.</p>
            </div>
            <div className="feat rv">
              <Icon name="shield" />
              <h3>Easy ordering</h3>
              <p>Share the piece, confirm the size — we handle the rest.</p>
            </div>
            <div className="feat rv">
              <Icon name="sparkle" />
              <h3>Secure payment</h3>
              <p>Pay by UPI or card, confirmation sent on WhatsApp.</p>
            </div>
            <div className="feat rv">
              <Icon name="heart" />
              <h3>Pan-India delivery</h3>
              <p>Dispatched in 24–48 hours with tracking.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
