import { wa } from "@/lib/site";
import Icon from "./Icon";
import WhatsAppIcon from "./WhatsAppIcon";
import { asset } from "@/lib/seo";

export default function Cta() {
  return (
    <section>
      <div className="wrap">
        <div className="cta rv">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/images/detail.jpg")} alt="" aria-hidden="true" />
          <div className="eyebrow">Order on WhatsApp</div>
          <h2 style={{ margin: "16px 0 14px" }}>
            Your Next Favourite Outfit<br />
            is Just a <span className="gold">WhatsApp</span> Away
          </h2>
          <p style={{ maxWidth: 520, margin: "0 auto" }}>
            Browse our complete collection, get product details, prices and more —
            all on WhatsApp.
          </p>
          <div style={{ marginTop: 30 }}>
            <a
              className="btn btn-wa"
              href={wa(
                "Hi! I'd like to browse the full Shivansh Elegance collection.",
                true
              )}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              Shop Now on WhatsApp
            </a>
          </div>
          <div className="trust">
            <span><Icon name="check" />Fast replies</span>
            <span><Icon name="check" />Easy ordering</span>
            <span><Icon name="check" />Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
