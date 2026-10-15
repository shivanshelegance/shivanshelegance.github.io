import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { business, site } from "@/lib/site";
import { FULL_URL, ORG, url } from "@/lib/seo";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(FULL_URL),
  title: {
    default: "Shivansh Elegance — Premium Women's Ethnic Wear, Ordered on WhatsApp",
    template: "%s | Shivansh Elegance",
  },
  description: ORG.description,
  keywords: [
    "Shivansh Elegance",
    "women's ethnic wear India",
    "sarees online",
    "anarkali suits",
    "lehenga choli",
    "kurtis and salwar suits",
    "order ethnic wear on WhatsApp",
  ],
  authors: [{ name: site.brand }],
  alternates: { canonical: url("/") },
  openGraph: {
    type: "website",
    siteName: site.brand,
    locale: "en_IN",
    url: url("/"),
    title: "Shivansh Elegance — Premium Women's Ethnic Wear",
    description: ORG.description,
    images: [{ url: url("/og-image.png"), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Elegance — Premium Women's Ethnic Wear",
    description: ORG.description,
    images: [url("/og-image.png")],
  },
  robots: { index: true, follow: true },
  category: "shopping",
};

export const viewport: Viewport = {
  themeColor: "#120D08",
  width: "device-width",
  initialScale: 1,
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  "@id": `${FULL_URL}/#organization`,
  name: ORG.name,
  description: ORG.description,
  url: FULL_URL,
  slogan: site.tagline,
  areaServed: { "@type": "Country", name: "India" },
  openingHours: business.hours,
  paymentAccepted: "UPI, Credit Card, Debit Card, Net Banking",
  priceRange: business.priceRange,
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: "Women's Indian ethnic wear",
      category: "Sarees, Anarkalis, Lehengas, Kurtis, Salwar Suits",
    },
  },
  potentialAction: {
    "@type": "ContactAction",
    name: "Order on WhatsApp",
    target: `https://wa.me/${site.whatsapp}`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${FULL_URL}/#website`,
  url: FULL_URL,
  name: ORG.name,
  description: ORG.description,
  inLanguage: "en-IN",
  publisher: { "@id": `${FULL_URL}/#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={[orgSchema, websiteSchema]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
