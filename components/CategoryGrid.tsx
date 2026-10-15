import { categories, wa } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import { asset } from "@/lib/seo";

export default function CategoryGrid() {
  return (
    <section id="categories">
      <div className="wrap">
        <div className="shead rv">
          <div>
            <div className="eyebrow">Shop by Category</div>
            <h2 style={{ marginTop: 14 }}>
              Find your <span className="gold">perfect look</span>
            </h2>
            <p>
              Five collections, each handpicked. Tap any one to open it on WhatsApp.
            </p>
          </div>
        </div>
        <div className="cats">
          {categories.map((c) => (
            <a
              key={c.id}
              className="cat rv"
              href={wa(
                `Hi! I'm interested in your ${c.name} collection. Please share the catalog.`,
                true
              )}
              target="_blank"
              rel="noopener"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(c.image)} alt={c.name} loading="lazy" />
              <div className="cat-t">
                <h3>{c.name}</h3>
                <span>
                  <WhatsAppIcon />
                  View on WhatsApp
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
