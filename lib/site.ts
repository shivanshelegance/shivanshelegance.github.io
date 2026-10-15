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
  name: string;
  category: string;
  price: string;
  image: string;
  tag?: string;
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
  { id: "p1", name: "Embroidered Anarkali Set", category: "Anarkalis",
    price: "₹2,499", image: "/images/p1.jpg", tag: "New" },
  { id: "p2", name: "Designer Lehenga Choli", category: "Lehengas",
    price: "₹5,899", image: "/images/p2.jpg", tag: "Bestseller" },
  { id: "p3", name: "Straight Salwar Suit", category: "Suits & Salwar",
    price: "₹1,899", image: "/images/p3.jpg" },
  { id: "p4", name: "Printed Kurta & Pant Set", category: "Anarkalis",
    price: "₹1,599", image: "/images/p4.jpg", tag: "New" },
  { id: "p5", name: "Embroidered Lehenga Set", category: "Lehengas",
    price: "₹4,299", image: "/images/p5.jpg" },
  { id: "p6", name: "Traditional Silk Saree", category: "Sarees",
    price: "₹3,199", image: "/images/p6.jpg", tag: "Bestseller" },
  { id: "p7", name: "Georgette Anarkali Suit", category: "Anarkalis",
    price: "₹2,199", image: "/images/p7.jpg" },
  { id: "p8", name: "Designer Salwar Kameez", category: "Suits & Salwar",
    price: "₹2,099", image: "/images/p8.jpg" },
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
