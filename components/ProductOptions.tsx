"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { wa } from "@/lib/site";

/** Swatch fills for the colour names used in the catalogue. */
const SWATCH: Record<string, string> = {
  Teal: "#1F6F6B", Wine: "#6E2639", "Midnight Blue": "#1E2A44",
  Maroon: "#6B1F2E", Emerald: "#1E6B45", Ivory: "#EFE6D2",
  "Rose Pink": "#D98CA0", Mustard: "#C99A2E", Grey: "#8A8A8A",
  "Rust Orange": "#B4602C", Indigo: "#2F3A6B", Olive: "#6B7340",
  Navy: "#1C2A4A", Blush: "#E3B9A8", "Black & Red": "#8E1F2B",
  "Peacock Blue": "#1E5F8C", "Temple Gold": "#B8902F",
  "Bottle Green": "#1F5137", Plum: "#5B2C4A", Charcoal: "#3A3A3A",
  "Sky Blue": "#7FA8C9", Coral: "#E07A62", Beige: "#CBB79B",
};

const swatch = (name: string) =>
  SWATCH[name] ?? `hsl(${(name.charCodeAt(0) * 7) % 360} 32% 55%)`;

export default function ProductOptions({
  name,
  price,
  sizes = [],
  colors = [],
}: {
  name: string;
  price: string;
  sizes?: string[];
  colors?: string[];
}) {
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);

  const message =
    `Hi! I'd like to order the ${name} (${price}).` +
    (size ? ` Size: ${size}.` : "") +
    (color ? ` Colour: ${color}.` : "");

  return (
    <>
      {sizes.length > 0 ? (
        <div className="sc-opt">
          <h4>Select Size</h4>
          <div className="sc-opts">
            {sizes.map((s) => (
              <button
                key={s}
                className="sc-opt-btn"
                aria-pressed={size === s}
                onClick={() => setSize(size === s ? null : s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {colors.length > 0 ? (
        <div className="sc-opt">
          <h4>Select Colour{color ? ` — ${color}` : ""}</h4>
          <div className="sc-opts">
            {colors.map((c) => (
              <button
                key={c}
                className="sc-sw"
                aria-label={c}
                title={c}
                aria-pressed={color === c}
                onClick={() => setColor(color === c ? null : c)}
              >
                <i style={{ background: swatch(c) }} />
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="sc-dcta">
        <a className="sc-btn sc-wa" href={wa(message, true)} target="_blank" rel="noopener">
          <WhatsAppIcon />
          Order on WhatsApp
        </a>
        <p className="sc-note">Fast response · Easy ordering · Secure</p>
      </div>
    </>
  );
}
