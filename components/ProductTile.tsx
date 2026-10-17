import Link from "next/link";
import WhatsAppIcon from "./WhatsAppIcon";
import type { Product } from "@/lib/site";
import { wa } from "@/lib/site";
import { asset } from "@/lib/seo";

/**
 * Product tile for the shop pages.
 * Deliberately free of event handlers so it can be rendered from both the
 * client-side browser and the server-rendered detail page — and it never nests
 * an <a> inside another <a>.
 */
export default function ProductTile({ p, priority = false }: { p: Product; priority?: boolean }) {
  return (
    <article className="sc-pcard">
      <Link className="sc-pimg" href={`/women/${p.slug}`} aria-label={`${p.name} — ${p.price}`}>
        {p.tag ? <span className="sc-tag">{p.tag}</span> : null}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(p.image)}
          alt={p.name}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
        />
      </Link>
      <div className="sc-pmeta">{p.category}</div>
      <h3 className="sc-pname">
        <Link href={`/women/${p.slug}`}>{p.name}</Link>
      </h3>
      <div className="sc-prow">
        <span className="sc-pprice">{p.price}</span>
        {p.rating ? (
          <span className="sc-stars">
            ★ {p.rating.toFixed(1)}
            <span className="sc-sr"> out of 5</span>
          </span>
        ) : null}
      </div>
      <a
        className="sc-btn sc-gold"
        href={wa(`Hi! I'd like to know more about the ${p.name} (${p.price}).`)}
        target="_blank"
        rel="noopener"
      >
        <WhatsAppIcon />
        View on WhatsApp
      </a>
    </article>
  );
}
