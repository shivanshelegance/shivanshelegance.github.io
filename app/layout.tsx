import type { Metadata, Viewport } from "next";
import { ShowcaseFooter, ShowcaseHeader } from "@/components/ShowcaseChrome";
import JsonLd from "@/components/JsonLd";
import { business, site } from "@/lib/site";
import { FULL_URL, ORG, url } from "@/lib/seo";
import "./fonts.css";
import "./globals.css";
import "./showcase.css";

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
    <html lang="en-IN">
      <head>
        {/* Fonts are self-hosted in fonts.css (Cormorant Garamond, Jost,
            Pinyon Script). Deliberately not next/font/google, which fetches
            at build time and broke the Actions build. */}
      </head>
      <body>
        <JsonLd data={[orgSchema, websiteSchema]} />
        <ShowcaseHeader overHero />
        <main>{children}</main>
        <ShowcaseFooter />
      </body>
    </html>
  );
}
