import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import type { Product } from "@/lib/site";
import { wa } from "@/lib/site";
import { asset } from "@/lib/seo";

/** Product card in the reference implementation's markup. */
export default function ShopCard({ p, eager = false }: { p: Product; eager?: boolean }) {
  return (
    <article className="product-card">
      <Link className="product-image" href={`/women/${p.slug}`} aria-label={p.name}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(p.image)}
          alt={p.name}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
        />
        {p.tag ? <span className="badge">{p.tag}</span> : null}
      </Link>
      <div className="product-info">
        <h3 className="product-title">
          <Link href={`/women/${p.slug}`}>{p.name}</Link>
        </h3>
        <div className="product-price">{p.price}</div>
        <a
          className="card-whatsapp"
          href={wa(
            `Hello Shivansh Elegance! I am interested in:\n\nProduct: ${p.name}\nPrice: ${p.price}\n\nPlease share more details.`
          )}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon className="wa-icon" />
          View on WhatsApp
        </a>
      </div>
    </article>
  );
}
