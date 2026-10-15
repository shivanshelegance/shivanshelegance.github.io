import CategoryGrid from "@/components/CategoryGrid";
import Features from "@/components/Features";
import Story from "@/components/Story";
import Quote from "@/components/Quote";
import Cta from "@/components/Cta";
import ProductCard from "@/components/ProductCard";
import { products, wa } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import JsonLd from "@/components/JsonLd";
import { asset, pageMeta, url } from "@/lib/seo";

export const metadata = pageMeta(
  "Shivansh Elegance — Premium Women's Ethnic Wear, Ordered on WhatsApp",
  "Handpicked sarees, anarkalis, lehengas, kurtis and salwar suits. Browse the catalog and order on WhatsApp with fast replies, easy ordering and pan-India delivery.",
  "/"
);

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Shivansh Elegance collection",
  itemListElement: products.slice(0, 4).map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      category: p.category,
      image: url(p.image),
      offers: { "@type": "Offer", priceCurrency: "INR", price: p.price.replace(/[^0-9]/g, ""), availability: "https://schema.org/InStock" },
    },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={itemList} />
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/images/hero-home.jpg")} alt="Shivansh Elegance ethnic wear" />
        <div className="wrap hero-in">
          <div className="eyebrow">Premium Women&apos;s Wear</div>
          <h1>
            Grace in <em>Every Thread</em>
          </h1>
          <p>
            Trendy · Elegant · Comfortable — handpicked ethnic wear for the woman
            who wears her confidence well.
          </p>
          <div className="chips">
            <span className="chip">Timeless designs</span>
            <span className="chip">Premium fabrics</span>
            <span className="chip">Effortless style</span>
          </div>
          <div style={{ marginTop: 34 }}>
            <a
              className="btn btn-wa"
              href={wa("Hi! I'd like to explore the women's collection.", true)}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon />
              Explore Women&apos;s Collection
            </a>
          </div>
          <div className="sub-cta">Click to view our WhatsApp catalog</div>
        </div>
      </section>

      <CategoryGrid />
      <Features />

      <section>
        <div className="wrap">
          <div className="shead rv">
            <div>
              <div className="eyebrow">Featured Collection</div>
              <h2 style={{ marginTop: 14 }}>
                Handpicked Styles <span className="gold">Just for You</span>
              </h2>
              <p>
                Explore our latest collection of elegant and trendy outfits, crafted
                for every occasion. Tap any piece to enquire on WhatsApp.
              </p>
            </div>
            <a className="btn btn-ghost" href="/women">
              Browse Women&apos;s Collection →
            </a>
          </div>
          <div className="prods">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      <Story />
      <Quote />
      <Cta />
    </>
  );
}
