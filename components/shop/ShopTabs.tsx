"use client";

import { useState } from "react";

type Specs = {
  fabric: string;
  work: string;
  setIncludes: string;
  occasion: string;
  care: string;
};

const TABS = ["details", "size", "shipping"] as const;
const LABEL: Record<(typeof TABS)[number], string> = {
  details: "Product Details",
  size: "Size Guide",
  shipping: "Shipping & Returns",
};

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export default function ShopTabs({
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
  const [tab, setTab] = useState<(typeof TABS)[number]>("details");

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Product information">
        {TABS.map((t) => (
          <button
            key={t}
            className={`tab${tab === t ? " active" : ""}`}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
          >
            {LABEL[t]}
          </button>
        ))}
      </div>

      <div
        id="tab-details"
        className={`tab-content${tab === "details" ? " active" : ""}`}
        role="tabpanel"
      >
        <div>
          <h3>Product Details</h3>
          {specs ? (
            <div className="specs">
              <div className="spec-row">
                <strong>&bull; &nbsp; Fabric</strong>
                <span>:</span>
                <span>{specs.fabric}</span>
              </div>
              <div className="spec-row">
                <strong>&bull; &nbsp; Work</strong>
                <span>:</span>
                <span>{specs.work}</span>
              </div>
              <div className="spec-row">
                <strong>&bull; &nbsp; Set Includes</strong>
                <span>:</span>
                <span>{specs.setIncludes}</span>
              </div>
              <div className="spec-row">
                <strong>&bull; &nbsp; Occasion</strong>
                <span>:</span>
                <span>{specs.occasion}</span>
              </div>
              <div className="spec-row">
                <strong>&bull; &nbsp; Care</strong>
                <span>:</span>
                <span>{specs.care}</span>
              </div>
            </div>
          ) : null}
        </div>
        <div className="love-list">
          <h3>Why You&apos;ll Love It</h3>
          {highlights.map((h) => (
            <p key={h}>
              <Check />
              {h}
            </p>
          ))}
        </div>
      </div>

      <div
        id="tab-size"
        className={`tab-content${tab === "size" ? " active" : ""}`}
        role="tabpanel"
      >
        <div>
          <h3>Size Guide</h3>
          <p style={{ lineHeight: 2 }}>
            {sizeGuide.map((r, i) => (
              <span key={r.size}>
                {i > 0 ? <br /> : null}
                {`${r.size} — Bust ${r.bust} | Waist ${r.waist}`}
              </span>
            ))}
          </p>
        </div>
        <div className="love-list">
          <h3>Finding Your Fit</h3>
          <p>
            Measurements are in inches. For the best fit, compare your measurements with
            the size chart before placing an order.
          </p>
        </div>
      </div>

      <div
        id="tab-shipping"
        className={`tab-content${tab === "shipping" ? " active" : ""}`}
        role="tabpanel"
      >
        <div>
          <h3>{shipping[0]?.label}</h3>
          <p style={{ lineHeight: 2 }}>{shipping[0]?.body}</p>
        </div>
        <div className="love-list">
          <h3>{shipping[1]?.label}</h3>
          <p>{shipping[1]?.body}</p>
        </div>
      </div>
    </>
  );
}
