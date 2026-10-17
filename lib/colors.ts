/**
 * Swatch fills, including the reference implementation's exact values for the
 * four colours on the featured product.
 */
export const COLOR_HEX: Record<string, string> = {
  Pink: "#d77d91",
  Mauve: "#c99ab2",
  Grey: "#a9b1b3",
  Charcoal: "#626062",
  Black: "#1A1A1A",
  Ivory: "#EFE6D2",
  Multi: "#C18169",
  Lavender: "#B47C8B",
  Yellow: "#D8A72B",
  Mustard: "#C9A227",
  Coral: "#E07A62",
  Olive: "#6B7340",
  "Olive Green": "#6B7340",
  Beige: "#CBB79B",
  Rust: "#B4602C",
  Maroon: "#6B1F2E",
  Wine: "#6E2639",
  Teal: "#1F6F6B",
  "Teal Blue": "#1F6F6B",
  Navy: "#1C2A4A",
  Blush: "#E3B9A8",
  Emerald: "#1E6B45",
  Indigo: "#2F3A6B",
  Plum: "#5B2C4A",
};

export const colorHex = (name: string) =>
  COLOR_HEX[name] ?? `hsl(${(name.charCodeAt(0) * 7) % 360} 32% 55%)`;
