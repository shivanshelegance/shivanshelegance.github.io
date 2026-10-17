"use client";

import { useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import { wa } from "@/lib/site";

/** Swatch fills for the colour names used in the catalogue. */
const SWATCH: Record<string, string> = {
  // Exact fills from the reference source's colour buttons
  Pink: "#d77d91",
  Mauve: "#c99ab2",
  Grey: "#a9b1b3",
  Charcoal: "#626062",
  Black: "#1A1A1A",
  Ivory: "#EFE6D2",
  Multi: "#C18169",
  Lavender: "#B47C8B",
  Mustard: "#C9A227",
  Coral: "#E07A62",
  Olive: "#6B7340",
  Beige: "#CBB79B",
  Rust: "#B4602C",
  Maroon: "#6B1F2E",
  Wine: "#6E2639",
  Teal: "#1F6F6B",
  Navy: "#1C2A4A",
  Blush: "#E3B9A8",
  Emerald: "#1E6B45",
  Indigo: "#2F3A6B",
  Plum: "#5B2C4A",
  "Sky Blue": "#7FA8C9",
  "Midnight Blue": "#1E2A44",
  "Peacock Blue": "#1E5F8C",
  "Bottle Green": "#1F5137",
  "Temple Gold": "#B8902F",
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
