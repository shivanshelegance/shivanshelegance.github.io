export const site = {
  brand: "Shivansh Elegance",
  tagline: "Wear Elegance · Live Stylish",
  /** Digits only, country code first. Replace before going live. */
  whatsapp: "919265526609",
  /** Optional WhatsApp Business catalog short link, e.g. https://wa.me/c/xxxxx */
  catalogUrl: null as string | null,
};

/** Build a WhatsApp link with a prefilled message. */
export function wa(message: string, catalog = false): string {
  if (catalog && site.catalogUrl) return site.catalogUrl;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Category = {
  id: string;
  name: string;
  image: string;
  /** Larger shot used as the hero on the detail page. */
  detailImage?: string;
  blurb: string;
};

export type Product = {
  id: string;
  /** URL segment for the detail page, e.g. /women/embroidered-anarkali-set */
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string;
  /** Extra views — front, side, lifestyle, editorial, neckline, fabric macro. */
  gallery?: string[];
  /** Larger shot used as the hero on the detail page. */
  detailImage?: string;
  tag?: string;
  /** Lower = newer. Drives the "Newest first" sort. */
  order: number;
  bestseller?: boolean;
  /** Placeholder social proof — replace with real review data. */
  rating?: number;
  reviews?: number;
  description?: string;
  sizes?: string[];
  colors?: string[];
  specs?: {
    fabric: string;
    work: string;
    setIncludes: string;
    occasion: string;
    care: string;
  };
  highlights?: string[];
};

/* ═══════════════════════════════════════════════════════════════════════
   REAL PRODUCT CATALOGUE
   Photos are your real stock, in public/images/products/.
   ───────────────────────────────────────────────────────────────────────
   Prices supplied by the owner (Oct 2026):
     Bandhani Dress    ₹800   ·  Coord Set  ₹700
     Three Piece Set   ₹600 / ₹650 / ₹1,000 (01 / 02 / 03)
   Edit `price` here and `name` to rename — the rest of the page is
   generated from this block.
   ═══════════════════════════════════════════════════════════════════════ */
const CATALOGUE: {
  slug: string; name: string; price: number;
  family: "bandhani" | "threepiece" | "coord"; tag?: string;
}[] = [
  { slug: "bandhani-dress-01", name: "Bandhani Dress 01", price: 800, family: "bandhani", tag: "New" },
  { slug: "bandhani-dress-02", name: "Bandhani Dress 02", price: 800, family: "bandhani", tag: "New" },
  { slug: "bandhani-dress-03", name: "Bandhani Dress 03", price: 800, family: "bandhani", tag: "New" },
  { slug: "bandhani-dress-04", name: "Bandhani Dress 04", price: 800, family: "bandhani" },
  { slug: "bandhani-dress-05", name: "Bandhani Dress 05", price: 800, family: "bandhani", tag: "Popular" },
  { slug: "bandhani-dress-06", name: "Bandhani Dress 06", price: 800, family: "bandhani" },
  { slug: "bandhani-dress-07", name: "Bandhani Dress 07", price: 800, family: "bandhani" },

  { slug: "three-piece-01", name: "Three Piece Set 01", price: 600, family: "threepiece", tag: "New" },
  { slug: "three-piece-02", name: "Three Piece Set 02", price: 650, family: "threepiece" },
  { slug: "three-piece-03", name: "Three Piece Set 03", price: 1000, family: "threepiece", tag: "Popular" },

  { slug: "coord-set-01", name: "Coord Set 01", price: 700, family: "coord", tag: "New" },
  { slug: "coord-set-02", name: "Coord Set 02", price: 700, family: "coord" },
  { slug: "coord-set-03", name: "Coord Set 03", price: 700, family: "coord" },
  { slug: "coord-set-04", name: "Coord Set 04", price: 700, family: "coord", tag: "Popular" },
  { slug: "coord-set-05", name: "Coord Set 05", price: 700, family: "coord" },
  { slug: "coord-set-06", name: "Coord Set 06", price: 700, family: "coord" },
  { slug: "coord-set-07", name: "Coord Set 07", price: 700, family: "coord" },
  { slug: "coord-set-08", name: "Coord Set 08", price: 700, family: "coord" },
];

/** Family-level copy shared by every piece in that family. */
const FAMILY: Record<
  "bandhani" | "threepiece" | "coord",
  { category: string; blurb: string; setIncludes: string; fabric: string;
    work: string; occasion: string; care: string; highlights: string[] }
> = {
  bandhani: {
    category: "Bandhani Dress", blurb: "Hand-tied bandhani in breathable cotton — colour that lasts and a drape that moves.",
    setIncludes: "Dress", fabric: "Bandhani cotton", work: "Traditional hand tie-dye",
    occasion: "Festive / Casual / Daywear", care: "Gentle machine wash",
    highlights: ["Hand-tied bandhani pattern", "Breathable cotton for all-day wear",
                 "Colour-fast dye", "Easy, relaxed silhouette"],
  },
  threepiece: {
    category: "Three Piece Set", blurb: "A complete coordinated set — kurta, bottom and dupatta, matched and ready to wear.",
    setIncludes: "Kurta, Bottom, Dupatta", fabric: "Cotton blend", work: "Thread & mirror work",
    occasion: "Festive / Family / Office", care: "Dry clean recommended",
    highlights: ["Complete three-piece set", "Coordinated dupatta included",
                 "Comfortable cotton blend", "Ready to wear, no mixing needed"],
  },
  coord: {
    category: "Coord Set", blurb: "Matching top and bottom, cut to work together — effortless dressing that still looks put-together.",
    setIncludes: "Top, Bottom", fabric: "Rayon blend", work: "Printed / solid coordinated",
    occasion: "Casual / Brunch / Travel", care: "Gentle machine wash",
    highlights: ["Perfectly matched two-piece", "Soft rayon blend",
                 "Dressed up or down easily", "Travel-friendly fabric"],
  },
};

/**
 * Extra views per product, in display order.
 * Only products we have additional real photography for appear here —
 * do NOT pad this with repeats of the main shot.
 */
const GALLERY: Record<string, string[]> = {
  "coord-set-03": [
    "/images/products/coord-set-03-front.jpg",
    "/images/products/coord-set-03-side.jpg",
    "/images/products/coord-set-03-lifestyle.jpg",
    "/images/products/coord-set-03-editorial.jpg",
    "/images/products/coord-set-03-neckline.jpg",
    "/images/products/coord-set-03-embroidery.jpg",
  ],
  "coord-set-07": [
    "/images/products/coord-set-07-front.jpg",
    "/images/products/coord-set-07-side.jpg",
    "/images/products/coord-set-07-lifestyle.jpg",
    "/images/products/coord-set-07-editorial.jpg",
    "/images/products/coord-set-07-neckline.jpg",
    "/images/products/coord-set-07-embroidery.jpg",
  ],
  "three-piece-03": [
    "/images/products/three-piece-03-front.jpg",
    "/images/products/three-piece-03-side.jpg",
    "/images/products/three-piece-03-lifestyle.jpg",
    "/images/products/three-piece-03-editorial.jpg",
    "/images/products/three-piece-03-neckline.jpg",
    "/images/products/three-piece-03-embroidery.jpg",
  ],
  "bandhani-dress-04": [
    "/images/products/bandhani-dress-04-front.jpg",
    "/images/products/bandhani-dress-04-side.jpg",
    "/images/products/bandhani-dress-04-lifestyle.jpg",
    "/images/products/bandhani-dress-04-editorial.jpg",
    "/images/products/bandhani-dress-04-neckline.jpg",
    "/images/products/bandhani-dress-04-print.jpg",
  ],
  "coord-set-05": [
    "/images/products/coord-set-05-front.jpg",
    "/images/products/coord-set-05-side.jpg",
    "/images/products/coord-set-05-lifestyle.jpg",
    "/images/products/coord-set-05-editorial.jpg",
    "/images/products/coord-set-05-neckline.jpg",
    "/images/products/coord-set-05-embroidery.jpg",
  ],
  "coord-set-06": [
    "/images/products/coord-set-06-front.jpg",
    "/images/products/coord-set-06-side.jpg",
    "/images/products/coord-set-06-lifestyle.jpg",
    "/images/products/coord-set-06-editorial.jpg",
    "/images/products/coord-set-06-neckline.jpg",
    "/images/products/coord-set-06-embroidery.jpg",
  ],
  "three-piece-01": [
    "/images/products/three-piece-01-front.jpg",
    "/images/products/three-piece-01-side.jpg",
    "/images/products/three-piece-01-lifestyle.jpg",
    "/images/products/three-piece-01-editorial.jpg",
    "/images/products/three-piece-01-neckline.jpg",
    "/images/products/three-piece-01-print.jpg",
  ],
  "three-piece-02": [
    "/images/products/three-piece-02-front.jpg",
    "/images/products/three-piece-02-side.jpg",
    "/images/products/three-piece-02-lifestyle.jpg",
    "/images/products/three-piece-02-editorial.jpg",
    "/images/products/three-piece-02-neckline.jpg",
    "/images/products/three-piece-02-embroidery.jpg",
    "/images/products/three-piece-02-print.jpg",
  ],
  "coord-set-02": [
    "/images/products/coord-set-02-front.jpg",
    "/images/products/coord-set-02-side.jpg",
    "/images/products/coord-set-02-lifestyle.jpg",
    "/images/products/coord-set-02-editorial.jpg",
    "/images/products/coord-set-02-neckline.jpg",
    "/images/products/coord-set-02-embroidery.jpg",
  ],
};

const money = (n: number) => `\u20b9${n.toLocaleString("en-IN")}`;

export const categories: Category[] = (["bandhani", "threepiece", "coord"] as const).map((f) => ({
  id: f, name: FAMILY[f].category, image: `/images/products/${CATALOGUE.find((c) => c.family === f)!.slug}.jpg`,
  blurb: FAMILY[f].blurb,
}));

export const products: Product[] = CATALOGUE.map((c, i) => {
  const fam = FAMILY[c.family];
  return {
    id: `p${i + 1}`,
    slug: c.slug,
    name: c.name,
    category: fam.category,
    price: money(c.price),
    image: `/images/products/${c.slug}.jpg`,
    gallery: GALLERY[c.slug],
    tag: c.tag,
    order: i + 1,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: `${fam.blurb} ${c.name} is photographed exactly as it is — what you see here is the piece you receive.`,
    specs: {
      fabric: fam.fabric, work: fam.work, setIncludes: fam.setIncludes,
      occasion: fam.occasion, care: fam.care,
    },
    highlights: fam.highlights,
  } satisfies Product;
});

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Every real photograph of a product: the catalogue shot first, then extra views. */
export function productImages(p: Product): string[] {
  return [p.image, ...(p.gallery ?? []).filter((g) => g !== p.image)];
}

/** The filter chips on the Women's page, derived from the catalogue. */
export function categoryCounts(): { name: string; count: number }[] {
  const order = FAMILY_ORDER.map((f) => FAMILY[f].category);
  return order.map((name) => ({
    name,
    count: products.filter((p) => p.category === name).length,
  }));
}

const FAMILY_ORDER = ["bandhani", "threepiece", "coord"] as const;

/** Trust row on the collection and detail pages. */
export const trust = [
  { icon: "truck",   title: "Free Shipping",     blurb: "On orders above \u20b91,999" },
  { icon: "return",  title: "Easy Returns",      blurb: "Within 7 days of delivery" },
  { icon: "shield",  title: "Cash on Delivery",  blurb: "Available across India" },
];

/** Shipping & returns copy shown on the detail-page tabs. */
export const shipping = [
  { label: "Shipping Information",
    body: "Free shipping on orders above \u20b91,999. Orders are typically processed in 1\u20132 business days. Delivery times depend on your location." },
  { label: "Returns & Exchanges",
    body: "Contact our support team within 7 days of delivery for eligible returns or exchanges." },
];

/** Size guide table on the detail page — replace with your real measurements. */
export const sizeGuide = [
  { size: "S",   bust: '36"', waist: '30"' },
  { size: "M",   bust: '38"', waist: '32"' },
  { size: "L",   bust: '40"', waist: '34"' },
  { size: "XL",  bust: '42"', waist: '36"' },
  { size: "XXL", bust: '44"', waist: '38"' },
];

export const features = [
  { key: "fabric", title: "Premium Quality Fabrics",
    body: "Soft, breathable and long lasting — chosen by hand." },
  { key: "sparkle", title: "Trendy & Latest Designs",
    body: "Stay stylish always, season after season." },
  { key: "shield", title: "Secure Shopping via WhatsApp",
    body: "Quick, easy and safe — order in a chat." },
  { key: "heart", title: "Your Style, Our Priority",
    body: "Because you deserve the very best." },
] as const;

export const GREETING = "Hi! I would like to see the Shivansh Elegance catalog.";

/** Business facts used by the FAQ and structured data. REPLACE with your real policy. */
export const business = {
  priceRange: "₹600 – ₹1,000",
  delivery: "Pan-India, dispatched in 24–48 hours, typically delivered in 3–7 business days.",
  payments: "UPI, debit and credit cards, and net banking. A payment link is shared on WhatsApp.",
  returns: "7-day exchange on unworn items with tags intact. Message us on WhatsApp to start one.",
  sizes: "XS to XXL, plus made-to-measure on request. A size chart is sent on WhatsApp.",
  hours: "Monday to Saturday, 11:00 AM – 8:00 PM IST",
};

export type Faq = { q: string; a: string };

/** Answer-first copy: each answer opens with the direct answer, then detail. */
export const faqs: Faq[] = [
  {
    q: "What does Shivansh Elegance sell?",
    a: "Shivansh Elegance sells women's Indian and Indo-western wear — bandhani dresses, three-piece sets and coord sets. Every piece is handpicked for fabric quality, finish and everyday comfort.",
  },
  {
    q: "How do I order from Shivansh Elegance?",
    a: "Ordering happens on WhatsApp. Tap any “Shop on WhatsApp” button, browse the catalog we send, then confirm the piece, your size and your address in the chat. There is no card payment on the website and no account to create.",
  },
  {
    q: "Does Shivansh Elegance deliver across India?",
    a: "Yes. We deliver pan-India. Orders are dispatched within 24–48 hours and typically arrive in 3–7 business days, with tracking shared on WhatsApp.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept UPI, debit and credit cards, and net banking. A secure payment link is shared with you on WhatsApp after you confirm your order.",
  },
  {
    q: "How do I choose the right size?",
    a: "Sizes run XS to XXL and made-to-measure is available on request. Send us your measurements on WhatsApp and we will confirm the right size before dispatch, along with a size chart.",
  },
  {
    q: "What is the return and exchange policy?",
    a: "We offer a 7-day exchange on unworn items with tags intact. Message us on WhatsApp with your order details and we will arrange the exchange.",
  },
  {
    q: "Do you ship internationally?",
    a: "Not yet — Shivansh Elegance currently ships only within India.",
  },
  {
    q: "Is Shivansh Elegance a physical store?",
    a: "Shivansh Elegance sells online and takes orders over WhatsApp, which lets you see real product photos, ask about fabric and get sizing help before you buy.",
  },
];
