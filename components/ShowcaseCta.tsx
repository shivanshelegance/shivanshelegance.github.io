import WhatsAppIcon from "./WhatsAppIcon";
import { wa } from "@/lib/site";
import { asset } from "@/lib/seo";

/** The showcase-language closing call to action (replaces the old `.cta` block
    so pages wrapped in `.showcase` stay visually consistent). */
export default function ShowcaseCta({
  headline = (
    <>
      Your Next Favourite Outfit
      <br />
      is Just a WhatsApp Away
    </>
  ),
  lead = "Browse our complete collection, get product details, prices and more — all on WhatsApp.",
  message = "Hi! I'd like to shop the Shivansh Elegance collection.",
}: {
  headline?: React.ReactNode;
  lead?: string;
  message?: string;
}) {
  return (
    <section className="sc-cta">
      <div className="sc-wrap sc-cta-grid">
        <div className="lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo-gold.svg")} alt="Shivansh Elegance" />
        </div>
        <div>
          <h2>{headline}</h2>
          <p className="lead">{lead}</p>
        </div>
        <div>
          <a className="sc-btn sc-wa" href={wa(message, true)} target="_blank" rel="noopener">
            <WhatsAppIcon />
            Shop Now on WhatsApp
          </a>
          <div className="sc-proof">
            <span>Fast replies</span>
            <span>Easy ordering</span>
            <span>Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
