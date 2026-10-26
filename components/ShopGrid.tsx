"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { type Product, categoryCounts, products, site, trust, wa } from "@/lib/site";

const SORTS = [
  { id: "new", label: "Newest first" },
  { id: "low", label: "Price: low to high" },
  { id: "high", label: "Price: high to low" },
] as const;

const TRUST_ICON: Record<string, string> = {
  truck: "M2 7h11v9H2zM13 10h4l4 4v2h-8M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  ret: "M3 10h11a5 5 0 0 1 0 10H8M3 10l4-4M3 10l4 4",
  shield: "M12 3 5 6v5c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z",
};

const priceOf = (p: Product) => Number(p.price.replace(/[^\d]/g, ""));

export default function ShopGrid() {
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]["id"]>("new");

  const chips = useMemo(
    () => [
      { name: "All", count: products.length },
      ...categoryCounts(),
    ],
    []
  );

  const list = useMemo(() => {
    let out = cat === "All" ? [...products] : products.filter((p) => p.category === cat);
    if (sort === "low") out.sort((a, b) => priceOf(a) - priceOf(b));
    else if (sort === "high") out.sort((a, b) => priceOf(b) - priceOf(a));
    else out.sort((a, b) => a.order - b.order);
    return out;
  }, [cat, sort]);

  return (
    <>
      <div className="sc-bar">
        <div className="sc-filters">
          {chips.map((c) => (
            <button
              key={c.name}
              className="sc-chip"
              aria-pressed={cat === c.name}
              onClick={() => setCat(c.name)}
            >
              {c.name}
              <i>{c.count}</i>
            </button>
          ))}
        </div>
        <div className="sc-sort">
          <label htmlFor="sort" className="sc-sr">Sort by</label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as (typeof SORTS)[number]["id"])}
          >
            {SORTS.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="sc-empty">Nothing in this category yet — message us on WhatsApp to see the full catalog.</p>
      ) : (
        <div className="sc-pgrid">
          {list.map((p) => (
            <div className="sc-pcard" key={p.id}>
              <Link href={`/women/${p.slug}`} className="sc-pimg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} loading="lazy" />
                {p.tag ? <span className="sc-tag">{p.tag}</span> : null}
              </Link>
              <div className="sc-pmeta">{p.category}</div>
              <Link href={`/women/${p.slug}`} className="sc-pname">{p.name}</Link>
              <div className="sc-prow">
                <span className="sc-pprice">{p.price}</span>
              </div>
              <a
                className="sc-btn sc-gold"
                href={wa(`Hi ${site.brand}! I'd like to order the ${p.name} (${p.price}).`)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon />
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>
      )}

      <div className="sc-trust">
        {trust.map((t) => (
          <div className="sc-trust-i" key={t.title}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d={TRUST_ICON[t.icon] ?? TRUST_ICON.shield} />
            </svg>
            <div>
              <b>{t.title}</b>
              <span>{t.blurb}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
