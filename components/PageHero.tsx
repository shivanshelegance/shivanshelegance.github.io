import { asset } from "@/lib/seo";

/** Hero band for the routes the reference does not define. */
export default function PageHero({
  eyebrow,
  title,
  blurb,
  image,
  alt,
}: {
  eyebrow: string;
  title: React.ReactNode;
  blurb?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="page-hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(image)} alt={alt} fetchPriority="high" />
      <div className="hero-content">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {blurb ? <p>{blurb}</p> : null}
      </div>
    </section>
  );
}
