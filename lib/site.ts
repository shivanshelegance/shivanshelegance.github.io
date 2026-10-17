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
  { id: "p1", slug: "royal-pink-embroidered-suit", name: "Royal Pink Embroidered Suit",
    category: "Suits", price: "\u20b92,499", image: "/images/royal-pink-suit.jpg",
    detailImage: "/images/royal-pink-suit-detail.jpg", tag: "New",
    order: 1, bestseller: true, rating: 4.8, reviews: 124,
    description: "Graceful and elegant, this royal pink suit features intricate embroidery, premium fabric and a timeless design. Perfect for festive occasions, family gatherings or special celebrations.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Mauve", "Grey", "Charcoal"],
    specs: { fabric: "Premium Georgette", work: "Embroidery",
             setIncludes: "Kurta, Pant, Dupatta", occasion: "Festive / Party / Wedding",
             care: "Dry Clean Only" },
    highlights: ["Premium quality fabric", "Intricate handcrafted embroidery",
                 "Lightweight and breathable", "Perfect for special occasions"] },

  { id: "p2", slug: "olive-green-kurti-set", name: "Olive Green Kurti Set",
    category: "Kurtis", price: "\u20b91,899", image: "/images/olive-green-kurti.jpg", tag: "New",
    order: 2, rating: 4.6, reviews: 61,
    description: "An easy olive kurti set in a breathable cotton blend — the kind of everyday piece that still looks dressed up with the right earrings.",
    sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Olive", "Beige", "Rust"],
    specs: { fabric: "Cotton Blend", work: "Thread work",
             setIncludes: "Kurti, Pant", occasion: "Casual / Office",
             care: "Gentle machine wash" },
    highlights: ["Soft, breathable cotton blend", "Easy everyday silhouette",
                 "Colour that holds through washes", "Pockets on the pant"] },

  { id: "p3", slug: "lavender-chiffon-saree", name: "Lavender Chiffon Saree",
    category: "Sarees", price: "\u20b92,799", image: "/images/lavender-chiffon-saree.jpg",
    order: 3, rating: 4.7, reviews: 88,
    description: "A feather-light chiffon saree in soft lavender that drapes beautifully and photographs even better — made for day events and warm evenings.",
    sizes: ["Free Size"], colors: ["Lavender", "Silver Grey", "Ivory"],
    specs: { fabric: "Chiffon", work: "Embroidered border",
             setIncludes: "Saree, Unstitched blouse piece", occasion: "Festive / Wedding",
             care: "Dry Clean Only" },
    highlights: ["Lightweight drape", "Embroidered border detail",
                 "Blouse piece included", "Ready to wear in minutes"] },

  { id: "p4", slug: "maroon-party-gown", name: "Maroon Party Gown",
    category: "Gowns", price: "\u20b93,499", image: "/images/maroon-party-gown.jpg",
    order: 4, rating: 4.9, reviews: 152,
    description: "A floor-length maroon gown with a flattering flare — the one you reach for when the invitation says evening.",
    sizes: ["XS", "S", "M", "L", "XL"], colors: ["Maroon", "Wine", "Black"],
    specs: { fabric: "Georgette with crepe lining", work: "Sequin & thread work",
             setIncludes: "Gown", occasion: "Party / Reception",
             care: "Dry Clean Only" },
    highlights: ["Floor-length flare", "Soft crepe lining for comfort",
                 "Hand-finished sequin work", "Photographs beautifully"] },

  { id: "p5", slug: "sunshine-yellow-suit", name: "Sunshine Yellow Suit",
    category: "Suits", price: "\u20b92,299", image: "/images/sunshine-yellow-suit.jpg", tag: "New",
    order: 5, rating: 4.5, reviews: 47,
    description: "Bright, happy and made for haldi and mehendi — a sunshine yellow suit in a fabric that moves with you all afternoon.",
    sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Mustard", "Ivory", "Coral"],
    specs: { fabric: "Chanderi cotton", work: "Mirror & thread work",
             setIncludes: "Kurta, Pant, Dupatta", occasion: "Haldi / Mehendi / Festive",
             care: "Dry Clean Only" },
    highlights: ["Sunlit yellow that suits every skin tone", "Mirror work highlights",
                 "Breathable for long day events", "Full three-piece set"] },

  { id: "p6", slug: "teal-blue-sharara-set", name: "Teal Blue Sharara Set",
    category: "Suits", price: "\u20b92,699", image: "/images/teal-blue-sharara.jpg",
    order: 6, rating: 4.7, reviews: 73,
    description: "A teal sharara set with a wide, fluid leg — festive without feeling heavy, and easy to dance in.",
    sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Teal", "Navy", "Ivory"],
    specs: { fabric: "Georgette", work: "Zari & thread embroidery",
             setIncludes: "Kurti, Sharara, Dupatta", occasion: "Festive / Wedding",
             care: "Dry Clean Only" },
    highlights: ["Fluid wide-leg sharara", "Zari embroidery on the kurti",
                 "Light enough to dance in", "Three-piece set"] },

  { id: "p7", slug: "floral-lehenga-set", name: "Floral Lehenga Set",
    category: "Lehengas", price: "\u20b94,499", image: "/images/floral-lehenga-set.jpg", tag: "Popular",
    order: 7, bestseller: true, rating: 4.8, reviews: 97,
    description: "Soft florals on a classic lehenga silhouette — occasion wear that photographs beautifully and still moves comfortably.",
    sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Blush", "Emerald", "Ivory"],
    specs: { fabric: "Silk blend", work: "Floral thread & sequin work",
             setIncludes: "Lehenga, Blouse, Dupatta", occasion: "Wedding / Reception",
             care: "Dry Clean Only" },
    highlights: ["Hand-finished floral embroidery", "Flattering flared silhouette",
                 "Coordinated dupatta", "Occasion-ready in one set"] },

  { id: "p8", slug: "elegant-black-suit", name: "Elegant Black Suit",
    category: "Suits", price: "\u20b92,399", image: "/images/elegant-black-suit.jpg",
    order: 8, rating: 4.6, reviews: 39,
    description: "Understated black with fine embroidery — the piece that works for a dinner, a puja and everything in between.",
    sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Black", "Charcoal", "Ivory"],
    specs: { fabric: "Georgette", work: "Tone-on-tone embroidery",
             setIncludes: "Kurta, Pant, Dupatta", occasion: "Evening / Festive",
             care: "Dry Clean Only" },
    highlights: ["Tone-on-tone embroidery", "Versatile for evening and puja",
                 "Comfortable georgette drape", "Three-piece set"] },
];

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
