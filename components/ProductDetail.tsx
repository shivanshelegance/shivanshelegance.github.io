"use client";

import { useState } from "react";
import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  type Product,
  productImages,
  products,
  shipping,
  site,
  sizeGuide,
  wa,
} from "@/lib/site";

const TABS = ["Product Details", "Size Guide", "Shipping & Returns"] as const;

export default function ProductDetail({ p }: { p: Product }) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Product Details");
  const [size, setSize] = useState<string>(p.sizes?.[1] ?? "");

  const shots = productImages(p);
  const [active, setActive] = useState(0);
  const current = shots[Math.min(active, shots.length - 1)];

  const related = products.filter((x) => x.slug !== p.slug).slice(0, 4);

  const msg = `Hi ${site.brand}! I'd like to order the ${p.name} (${p.price})${
    size ? ` — Size: ${size}` : ""
  }.`;

  return (
    <div className="sc-wrap">
      <div className="sc-detail">
        <div className="sc-dgrid">
          <div className="sc-gal">
            <div className="sc-dimg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={current} alt={`${p.name} — view ${active + 1} of ${shots.length}`} />
            </div>

            {shots.length > 1 ? (
              <div className="sc-thumbs" role="tablist" aria-label={`${p.name} photo gallery`}>
                {shots.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className="sc-thumb"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Show photo ${i + 1} of ${shots.length}`}
                    onClick={() => setActive(i)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div className="sc-dinfo">
            <div className="sc-pmeta">{p.category}</div>
            <h1>{p.name}</h1>
            <div className="sc-dprice">
              <b>{p.price}</b>
              {p.tag ? <span className="sc-tag" style={{ position: "static" }}>{p.tag}</span> : null}
            </div>
            <p className="sc-ddesc">{p.description}</p>

            {p.sizes?.length ? (
              <div className="sc-opt">
                <h4>Size</h4>
                <div className="sc-opts">
                  {p.sizes.map((s) => (
                    <button
                      key={s}
                      className="sc-opt-btn"
                      aria-pressed={size === s}
                      onClick={() => setSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="sc-dcta">
              <a className="sc-btn sc-wa" href={wa(msg)} target="_blank" rel="noopener">
                <WhatsAppIcon />
                Order on WhatsApp
              </a>
              <span className="sc-note">
                We&apos;ll confirm size, price and delivery with you in the chat.
              </span>
            </div>
          </div>
        </div>

        <div className="sc-tabs">
          <div className="sc-tablist" role="tablist">
            {TABS.map((t) => (
              <button
                key={t}
                className="sc-tab"
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="sc-panel" role="tabpanel">
            {tab === "Product Details" ? (
              <>
                <dl className="sc-spec">
                  {p.specs
                    ? Object.entries({
                        Fabric: p.specs.fabric,
                        Work: p.specs.work,
                        "Set Includes": p.specs.setIncludes,
                        Occasion: p.specs.occasion,
                        Care: p.specs.care,
                      }).map(([k, v]) => (
                        <div key={k}>
                          <dt>{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))
                    : null}
                </dl>
                {p.highlights?.length ? (
                  <ul className="sc-bullets">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}
              </>
            ) : null}

            {tab === "Size Guide" ? (
              <table className="sc-table">
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Bust</th>
                    <th>Waist</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeGuide.map((s) => (
                    <tr key={s.size}>
                      <td>{s.size}</td>
                      <td>{s.bust}</td>
                      <td>{s.waist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}

            {tab === "Shipping & Returns" ? (
              <>
                {shipping.map((s) => (
                  <p key={s.label} style={{ marginBottom: 14 }}>
                    <b>{s.label}:</b> {s.body}
                  </p>
                ))}
              </>
            ) : null}
          </div>
        </div>

        {related.length ? (
          <>
            <div className="sc-bar2" style={{ marginTop: 48 }}>
              <h2 className="sc-collhead">You may also like</h2>
            </div>
            <div className="sc-pgrid">
              {related.map((r) => (
                <div className="sc-pcard" key={r.id}>
                  <Link href={`/women/${r.slug}`} className="sc-pimg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.image} alt={r.name} loading="lazy" />
                  </Link>
                  <div className="sc-pmeta">{r.category}</div>
                  <Link href={`/women/${r.slug}`} className="sc-pname">{r.name}</Link>
                  <div className="sc-prow">
                    <span className="sc-pprice">{r.price}</span>
                  </div>
                  <a
                    className="sc-btn sc-gold"
                    href={wa(`Hi ${site.brand}! I'd like to order the ${r.name} (${r.price}).`)}
                    target="_blank"
                    rel="noopener"
                  >
                    <WhatsAppIcon />
                    Order on WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
