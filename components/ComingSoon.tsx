import WhatsAppIcon from "@/components/WhatsAppIcon";
import { products, site, wa } from "@/lib/site";

/** Coming-soon page for a collection that isn't stocked yet. */
export default function ComingSoon({
  title,
  eyebrow,
  blurb,
  image,
  alt,
  notifyText,
}: {
  title: string;
  eyebrow: string;
  blurb: string;
  image: string;
  alt: string;
  notifyText: string;
}) {
  const teasers = products.slice(0, 4);
  return (
    <div className="showcase">
      <section className="sc-hero sc-hero-sm">
        <div
          className="sc-hero-img"
          role="img"
          aria-label={alt}
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="sc-hero-in">
          <div className="sc-hc">
            <div className="sc-eye">{eyebrow}</div>
            <h1>
              <span>{title}</span>
            </h1>
            <p className="sc-hero-sub">{blurb}</p>
            <a className="sc-btn sc-gold" href={wa(notifyText)} target="_blank" rel="noopener">
              <WhatsAppIcon />
              Notify me on WhatsApp
            </a>
            <div className="sub">We&apos;ll message you the moment it launches.</div>
          </div>
        </div>
      </section>

      <div className="sc-wrap">
        <div className="sc-bar2">
          <h1 className="sc-collhead">Coming Soon</h1>
          <span className="sc-chip" style={{ pointerEvents: "none" }}>In production</span>
        </div>

        <p className="sc-ddesc" style={{ maxWidth: 640 }}>
          We&apos;re putting the finishing touches to our {title.toLowerCase()} range. In
          the meantime, our women&apos;s collection is ready to order right now.
        </p>

        <div className="sc-pgrid">
          {teasers.map((p) => (
            <div className="sc-pcard" key={p.id}>
              <a href={`/women/${p.slug}/`} className="sc-pimg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} loading="lazy" />
              </a>
              <div className="sc-pmeta">{p.category}</div>
              <a href={`/women/${p.slug}/`} className="sc-pname">{p.name}</a>
              <div className="sc-prow">
                <span className="sc-pprice">{p.price}</span>
              </div>
              <a
                className="sc-btn sc-gold"
                href={wa(`Hi ${site.brand}! I'd like to order the ${p.name} (${p.price}).`)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon />
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>

        <section className="sc-cta" style={{ marginTop: 56 }}>
          <div className="sc-wrap">
            <div className="sc-cta-grid">
              <div className="lg" style={{ borderRight: 0, paddingRight: 0, textAlign: "center" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo-gold.svg" alt={site.brand} />
              </div>
              <div>
                <h2>
                  Want first look at the
                  <br />
                  {title} range?
                </h2>
                <p className="lead">
                  Message us on WhatsApp and we&apos;ll send you new arrivals before
                  anyone else.
                </p>
              </div>
              <div>
                <a className="sc-btn sc-wa" href={wa(notifyText)} target="_blank" rel="noopener">
                  <WhatsAppIcon />
                  Notify me on WhatsApp
                </a>
                <div className="sc-proof">
                  <span>Fast replies</span>
                  <span>No spam</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
