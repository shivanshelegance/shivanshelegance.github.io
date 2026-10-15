import { features } from "@/lib/site";
import Icon from "./Icon";

export default function Features() {
  return (
    <section>
      <div className="wrap">
        <div className="shead rv">
          <div>
            <div className="eyebrow">Why Shivansh Elegance</div>
            <h2 style={{ marginTop: 14 }}>
              Thought through, <span className="gold">stitch by stitch</span>
            </h2>
          </div>
        </div>
        <div className="feats">
          {features.map((f) => (
            <div className="feat rv" key={f.key}>
              <Icon name={f.key} />
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
