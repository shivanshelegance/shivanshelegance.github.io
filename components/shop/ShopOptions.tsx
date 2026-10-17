"use client";

import { useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { wa } from "@/lib/site";

/**
 * Size and colour pickers plus the order button. Colours are the reference's
 * exact fills; the chosen size and colour are carried into the WhatsApp
 * message, which the reference builds in `orderProduct()`.
 */
export default function ShopOptions({
  name,
  price,
  sizes = [],
  colors = [],
  colorHex,
}: {
  name: string;
  price: string;
  sizes?: string[];
  colors?: string[];
  colorHex?: Record<string, string>;
}) {
  const [size, setSize] = useState("");
  const [color, setColor] = useState(colors[0] ?? "");

  const message =
    `Hello Shivansh Elegance! I would like to order:\n\n` +
    `Product: ${name}\nPrice: ${price}\n` +
    `Size: ${size || "Please help me select"}\nColor: ${color}\n\n` +
    `Please confirm availability and delivery details.`;

  return (
    <>
      <div className="option-label">Select Size</div>
      <div className="size-options">
        {sizes.map((s) => (
          <button
            key={s}
            className={`size-btn${size === s ? " selected" : ""}`}
            onClick={() => setSize(size === s ? "" : s)}
            aria-pressed={size === s}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="option-label">Select Color</div>
      <div className="colors">
        {colors.map((c) => (
          <button
            key={c}
            className={`color-btn${color === c ? " selected" : ""}`}
            style={{ background: colorHex?.[c] ?? "#ccc" }}
            onClick={() => setColor(c)}
            aria-label={c}
            aria-pressed={color === c}
            title={c}
          />
        ))}
      </div>

      <a className="order-btn" href={wa(message)} target="_blank" rel="noopener">
        <WhatsAppIcon className="wa-icon" />
        Order on WhatsApp
        <svg
          className="arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>
      <div className="order-notes">
        <span>◉ Fast response</span>
        <span>Easy ordering</span>
        <span>Secure</span>
      </div>
    </>
  );
}
