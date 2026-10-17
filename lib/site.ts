export const site = {
  brand: "Shivansh Elegance",
  tagline: "Wear Elegance · Live Stylish",
  /** Digits only, country code first. Replace before going live. */
  whatsapp: "919999999999",
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

export const categories: Category[] = [
  { id: "sarees", name: "Sarees", image: "/images/cat-sarees.jpg",
    blurb: "Six yards of grace — silks, chiffons and handloom." },
  { id: "anarkalis", name: "Anarkalis", image: "/images/cat-anarkalis.jpg",
    blurb: "Flowing silhouettes for festive evenings." },
  { id: "suits", name: "Suits & Salwar Sets", image: "/images/cat-suits.jpg",
    blurb: "Everyday elegance, tailored to comfort." },
  { id: "lehengas", name: "Lehengas", image: "/images/cat-lehengas.jpg",
    blurb: "Occasion wear with real craftsmanship." },
  { id: "kurtis", name: "Kurtis", image: "/images/cat-kurtis.jpg",
    blurb: "Easy, breathable, endlessly wearable." },
];

export const products: Product[] = [
  { id: "p1", slug: "embroidered-anarkali-set", name: "Embroidered Anarkali Set",
    category: "Anarkalis", price: "\u20b92,499", image: "/images/p1.jpg", tag: "Bestseller",
    order: 1, bestseller: true, rating: 4.8, reviews: 124,
    description: "Graceful and elegant, this anarkali set features intricate embroidery, premium fabric and a timeless silhouette. Perfect for festive occasions, family gatherings and special celebrations.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Teal", "Wine", "Midnight Blue"],
    specs: { fabric: "Premium Georgette", work: "Thread & zari embroidery",
             setIncludes: "Anarkali, Dupatta", occasion: "Festive / Party / Wedding",
             care: "Dry clean only" },
    highlights: ["Premium quality fabric", "Intricate handcrafted embroidery",
                 "Lightweight and breathable", "Perfect for special occasions"] },

  { id: "p2", slug: "designer-lehenga-choli", name: "Designer Lehenga Choli",
    category: "Lehengas", price: "\u20b95,899", image: "/images/p2.jpg", tag: "Bestseller",
    order: 2, bestseller: true, rating: 4.9, reviews: 86,
    description: "A statement lehenga with a flared skirt, detailed border and a matching choli. Made for weddings and receptions, with enough weight to drape beautifully.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Maroon", "Emerald", "Ivory"],
    specs: { fabric: "Silk blend with can-can", work: "Zari, sequin & thread work",
             setIncludes: "Lehenga, Choli, Dupatta", occasion: "Wedding / Reception",
             care: "Dry clean only" },
    highlights: ["Full flared silhouette", "Hand-finished border work",
                 "Comfortable padded choli", "Made for wedding occasions"] },

  { id: "p3", slug: "straight-salwar-suit", name: "Straight Salwar Suit",
    category: "Suits & Salwar", price: "\u20b91,899", image: "/images/p3.jpg",
    order: 3, rating: 4.6, reviews: 61,
    description: "An easy straight-cut suit in a breathable fabric — the kind you reach for on ordinary days and still feel put together in.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Rose Pink", "Mustard", "Grey"],
    specs: { fabric: "Cotton silk blend", work: "Minimal thread work",
             setIncludes: "Kurta, Salwar, Dupatta", occasion: "Everyday / Office",
             care: "Gentle machine wash" },
    highlights: ["Soft, breathable fabric", "Easy everyday silhouette",
                 "Low-maintenance care", "Comfortable for long days"] },

  { id: "p4", slug: "printed-kurta-pant-set", name: "Printed Kurta & Pant Set",
    category: "Kurtis", price: "\u20b91,599", image: "/images/p4.jpg", tag: "New",
    order: 4, rating: 4.7, reviews: 43,
    description: "A printed kurta with a coordinated pant — relaxed, current and easy to wear from a morning errand to an evening out.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rust Orange", "Indigo", "Olive"],
    specs: { fabric: "Rayon", work: "All-over print",
             setIncludes: "Kurta, Pant", occasion: "Casual / Brunch",
             care: "Gentle machine wash" },
    highlights: ["All-over printed design", "Coordinated set",
                 "Lightweight for summer", "Easy to style up or down"] },

  { id: "p5", slug: "embroidered-lehenga-set", name: "Embroidered Lehenga Set",
    category: "Lehengas", price: "\u20b94,299", image: "/images/p5.jpg", tag: "Bestseller",
    order: 5, bestseller: true, rating: 4.8, reviews: 97,
    description: "Detailed embroidery across a classic lehenga silhouette — occasion wear that photographs beautifully and still moves comfortably.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Wine", "Blush"],
    specs: { fabric: "Velvet / net blend", work: "Heavy thread & sequin embroidery",
             setIncludes: "Lehenga, Blouse, Dupatta", occasion: "Wedding / Festive",
             care: "Dry clean only" },
    highlights: ["Rich embroidered surface", "Classic flared cut",
                 "Soft inner lining", "Ideal for festive evenings"] },

  { id: "p6", slug: "traditional-silk-saree", name: "Traditional Silk Saree",
    category: "Sarees", price: "\u20b93,199", image: "/images/p6.jpg", tag: "Bestseller",
    order: 6, bestseller: true, rating: 4.9, reviews: 152,
    description: "Six yards of handloom-inspired silk with a woven border — the saree you keep for years and lend to no one.",
    sizes: ["Free size (5.5 m)"],
    colors: ["Black & Red", "Peacock Blue", "Temple Gold"],
    specs: { fabric: "Art silk with woven zari border", work: "Woven zari",
             setIncludes: "Saree with unstitched blouse piece", occasion: "Festive / Traditional",
             care: "Dry clean only" },
    highlights: ["Woven zari border", "Rich traditional drape",
                 "Includes blouse piece", "Keeps its sheen for years"] },

  { id: "p7", slug: "georgette-anarkali-suit", name: "Georgette Anarkali Suit",
    category: "Anarkalis", price: "\u20b92,199", image: "/images/p7.jpg",
    order: 7, rating: 4.7, reviews: 58,
    description: "Flowing georgette with a gentle flare and finished neckline — understated enough for day events, dressy enough for evening.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Bottle Green", "Plum", "Charcoal"],
    specs: { fabric: "Georgette", work: "Resham thread work",
             setIncludes: "Anarkali, Dupatta", occasion: "Festive / Party",
             care: "Dry clean only" },
    highlights: ["Flowing georgette drape", "Delicate neckline finish",
                 "Comfortable for long events", "Easy to accessorise"] },

  { id: "p8", slug: "designer-salwar-kameez", name: "Designer Salwar Kameez",
    category: "Suits & Salwar", price: "\u20b92,099", image: "/images/p8.jpg",
    order: 8, rating: 4.6, reviews: 39,
    description: "A designer-cut kameez with a straight salwar — tailored, comfortable and quietly detailed.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Sky Blue", "Coral", "Beige"],
    specs: { fabric: "Chanderi cotton", work: "Subtle thread & mirror accents",
             setIncludes: "Kameez, Salwar, Dupatta", occasion: "Everyday / Festive",
             care: "Gentle machine wash" },
    highlights: ["Tailored straight cut", "Hand-finished details",
                 "Breathable natural fabric", "Versatile day-to-evening"] },
];

/** Look up one product by its URL slug. */
export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** The filter chips on the Women's page, derived from the catalogue. */
export function categoryCounts(): { name: string; count: number }[] {
  const order = ["Sarees", "Anarkalis", "Suits & Salwar", "Lehengas", "Kurtis"];
  return order.map((name) => ({
    name,
    count: products.filter((p) => p.category === name).length,
  }));
}

/** Trust row on the collection and detail pages. */
export const trust = [
  { icon: "truck",   title: "Free Shipping",     blurb: "On orders above \u20b91,999" },
  { icon: "return",  title: "Easy Returns",      blurb: "Within 7 days of delivery" },
  { icon: "shield",  title: "Cash on Delivery",  blurb: "Available across India" },
];

/** Shipping & returns copy shown on the detail-page tabs. */
export const shipping = [
  { label: "Shipping",
    body: "Dispatched within 24\u201348 hours of confirming your order on WhatsApp. Delivery across India typically takes 3\u20137 working days. Free shipping on orders above \u20b91,999, otherwise a flat \u20b99 delivery charge." },
  { label: "Returns & Exchange",
    body: "Easy returns within 7 days of delivery for unused, unwashed pieces with tags intact. Share an unboxing video on WhatsApp and we\u2019ll arrange a pickup and an exchange or refund." },
  { label: "Cash on Delivery",
    body: "Cash on delivery is available on most pin codes. We\u2019ll confirm availability for your address on WhatsApp before dispatch." },
];

/** Size guide table on the detail page — replace with your real measurements. */
export const sizeGuide = [
  { size: "XS", bust: "32\u201333", waist: "26\u201327", hip: "35\u201336" },
  { size: "S",  bust: "34\u201335", waist: "28\u201329", hip: "37\u201338" },
  { size: "M",  bust: "36\u201337", waist: "30\u201331", hip: "39\u201340" },
  { size: "L",  bust: "38\u201340", waist: "32\u201334", hip: "41\u201343" },
  { size: "XL", bust: "41\u201343", waist: "35\u201337", hip: "44\u201346" },
  { size: "XXL",bust: "44\u201346", waist: "38\u201340", hip: "47\u201349" },
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
  priceRange: "₹1,599 – ₹5,899",
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
    a: "Shivansh Elegance sells women's Indian ethnic wear — sarees, anarkalis, lehengas, kurtis and salwar suits. Every piece is handpicked for fabric quality, finish and everyday comfort, with prices from ₹1,599 to ₹5,899.",
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
