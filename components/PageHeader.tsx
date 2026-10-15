/** Compact page header that guarantees one h1 per page. */
export default function PageHeader({
  eyebrow,
  title,
  blurb,
}: {
  eyebrow: string;
  title: React.ReactNode;
  blurb?: string;
}) {
  return (
    <section style={{ paddingTop: 72, paddingBottom: 12 }}>
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1 style={{ marginTop: 14, fontSize: "clamp(36px,5.2vw,62px)" }}>{title}</h1>
        {blurb ? <p style={{ marginTop: 16, maxWidth: 620 }}>{blurb}</p> : null}
      </div>
    </section>
  );
}
