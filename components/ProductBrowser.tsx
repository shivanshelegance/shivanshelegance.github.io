"use client";

import { useMemo, useState } from "react";
import ProductTile from "./ProductTile";
import { products } from "@/lib/site";

const FILTERS = ["All", "Sarees", "Anarkalis", "Suits & Salwar", "Lehengas", "Kurtis"];
type SortKey = "newest" | "bestseller" | "price";

const asNumber = (price: string) => Number(price.replace(/[^\d]/g, "")) || 0;

export default function ProductBrowser() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState<SortKey>("newest");

  const list = useMemo(() => {
    let out = filter === "All" ? [...products] : products.filter((p) => p.category === filter);
    if (sort === "newest") out.sort((a, b) => a.order - b.order);
    else if (sort === "bestseller")
      out.sort((a, b) => Number(!!b.bestseller) - Number(!!a.bestseller) || a.order - b.order);
    else out.sort((a, b) => asNumber(a.price) - asNumber(b.price));
    return out;
  }, [filter, sort]);

  return (
    <>
      <div className="sc-bar">
        <div className="sc-filters" role="group" aria-label="Filter by category">
          {FILTERS.map((f) => (
            <button
              key={f}
              className="sc-chip"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
              <i>
                {f === "All"
                  ? products.length
                  : products.filter((p) => p.category === f).length}
              </i>
            </button>
          ))}
        </div>
        <label className="sc-sort">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            aria-label="Sort products"
          >
            <option value="newest">Newest first</option>
            <option value="bestseller">Best seller</option>
            <option value="price">Price: low to high</option>
          </select>
        </label>
      </div>

      {list.length === 0 ? (
        <p className="sc-empty">Nothing in this collection yet — check back soon.</p>
      ) : (
        <div className="sc-pgrid">
          {list.map((p) => (
            <ProductTile p={p} key={p.id} />
          ))}
        </div>
      )}
    </>
  );
}
