import { asset } from "@/lib/seo";
export default function Story() {
  return (
    <section>
      <div className="wrap">
        <div className="story">
          <div className="story-img rv">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/images/hero-about.jpg")} alt="Shivansh Elegance craftsmanship" loading="lazy" />
          </div>
          <div className="rv">
            <div className="eyebrow">Our Story</div>
            <h2 style={{ marginTop: 14 }}>
              More Than Just Clothes,<br />
              <span className="gold">It&apos;s a Feeling</span>
            </h2>
            <p style={{ marginTop: 18 }}>
              At Shivansh Elegance, we bring you handcrafted styles, premium
              fabrics and timeless designs that make you feel confident, elegant
              and beautiful — every single day.
            </p>
            <div className="pillars">
              <div className="pillar">
                <div>
                  <b>Traditional Craftsmanship</b>
                  <span>Techniques passed down, finished by hand.</span>
                </div>
              </div>
              <div className="pillar">
                <div>
                  <b>Modern Trends</b>
                  <span>Silhouettes that feel current, never dated.</span>
                </div>
              </div>
              <div className="pillar">
                <div>
                  <b>Made for Every Occasion</b>
                  <span>From everyday comfort to the big day.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
