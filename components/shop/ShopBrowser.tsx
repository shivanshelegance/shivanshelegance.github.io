"use client";

import { useMemo, useState } from "react";
import ShopCard from "./ShopCard";
import { products } from "@/lib/site";

/** Category glyphs, taken from the reference implementation. */
const CATEGORIES = [
  { name: "All", glyph: "❀" },
  { name: "Suits", glyph: "♙" },
  { name: "Kurtis", glyph: "♙" },
  { name: "Sarees", glyph: "♧" },
  { name: "Gowns", glyph: "♙" },
  { name: "Lehengas", glyph: "♙" },
];

type SortKey = "default" | "low" | "high" | "name";
const asNumber = (price: string) => Number(price.replace(/[^\d]/g, "")) || 0;

export default function ShopBrowser() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<SortKey>("default");

  const list = useMemo(() => {
    let out = products.filter((p) => category === "All" || p.category === category);
    if (sort === "low") out = [...out].sort((a, b) => asNumber(a.price) - asNumber(b.price));
    else if (sort === "high") out = [...out].sort((a, b) => asNumber(b.price) - asNumber(a.price));
    else if (sort === "name") out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    return out;
  }, [category, sort]);

  return (
    <>
      <div className="categories">
        {CATEGORIES.map((c) => (
          <button
            key={c.name}
            className={`category${category === c.name ? " active" : ""}`}
            onClick={() => setCategory(c.name)}
            aria-pressed={category === c.name}
          >
            <div className="category-icon" aria-hidden="true">
              {c.glyph}
            </div>
            <span>{c.name}</span>
          </button>
        ))}
      </div>

      <section className="container">
        <div className="section-heading">
          <h2>Our Women&apos;s Collection</h2>
          <div className="heading-line" />
          <label className="sort">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              aria-label="Sort products"
            >
              <option value="default">Newest First</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </label>
        </div>

        <div className="product-grid">
          {list.length ? (
            list.map((p, i) => <ShopCard p={p} key={p.id} eager={i < 4} />)
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </section>
    </>
  );
}
