"use client";

import { useState } from "react";

type Specs = {
  fabric: string;
  work: string;
  setIncludes: string;
  occasion: string;
  care: string;
};

const TABS = ["Product Details", "Size Guide", "Shipping & Returns"] as const;

export default function ProductTabs({
  specs,
  highlights = [],
  sizeGuide,
  shipping,
}: {
  specs?: Specs;
  highlights?: string[];
  sizeGuide: { size: string; bust: string; waist: string }[];
  shipping: { label: string; body: string }[];
}) {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Product Details");

  return (
    <div className="sc-tabs">
      <div className="sc-tablist" role="tablist" aria-label="Product information">
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
            {specs ? (
              <dl className="sc-spec">
                <div>
                  <dt>Fabric</dt>
                  <dd>{specs.fabric}</dd>
                </div>
                <div>
                  <dt>Work</dt>
                  <dd>{specs.work}</dd>
                </div>
                <div>
                  <dt>Set Includes</dt>
                  <dd>{specs.setIncludes}</dd>
                </div>
                <div>
                  <dt>Occasion</dt>
                  <dd>{specs.occasion}</dd>
                </div>
                <div>
                  <dt>Care</dt>
                  <dd>{specs.care}</dd>
                </div>
              </dl>
            ) : null}
            {highlights.length > 0 ? (
              <>
                <h4 style={{ marginTop: 26, font: "500 22px var(--serif)" }}>
                  Why You&apos;ll Love It
                </h4>
                <ul className="sc-bullets">
                  {highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </>
        ) : null}

        {tab === "Size Guide" ? (
          <>
            <table className="sc-table">
              <thead>
                <tr>
                  <th scope="col">Size</th>
                  <th scope="col">Bust</th>
                  <th scope="col">Waist</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((r) => (
                  <tr key={r.size}>
                    <td>{r.size}</td>
                    <td>{r.bust}</td>
                    <td>{r.waist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 14, fontSize: 14 }}>
              Measurements are in inches. For the best fit, compare your measurements with
              the size chart before placing an order.
            </p>
          </>
        ) : null}

        {tab === "Shipping & Returns" ? (
          <div style={{ display: "grid", gap: 18 }}>
            {shipping.map((s) => (
              <div key={s.label}>
                <h4 style={{ font: "500 20px var(--serif)", color: "var(--sc-ink)" }}>
                  {s.label}
                </h4>
                <p style={{ marginTop: 6 }}>{s.body}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
