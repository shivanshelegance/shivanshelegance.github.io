import { Product, wa } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import { asset } from "@/lib/seo";

export default function ProductCard({ p }: { p: Product }) {
  const msg = `Hi! I'd like to know more about the ${p.name} (${p.price}). Is it available?`;
  return (
    <article className="prod rv">
      <div className="prod-img">
        {p.tag ? <span className="tag">{p.tag}</span> : null}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(p.image)} alt={p.name} loading="lazy" />
      </div>
      <div className="prod-b">
        <div className="meta">{p.category}</div>
        <h3>{p.name}</h3>
        <div className="price">{p.price}</div>
        <a className="btn btn-wa" href={wa(msg)} target="_blank" rel="noopener">
          <WhatsAppIcon />
          Enquire on WhatsApp
        </a>
      </div>
    </article>
  );
}
