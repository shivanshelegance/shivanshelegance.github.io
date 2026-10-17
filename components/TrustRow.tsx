import { trust } from "@/lib/site";

const PATHS: Record<string, React.ReactNode> = {
  truck: (
    <>
      <path d="M2 6h12v10H2zM14 9h4l4 4v3h-8" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </>
  ),
  return: (
    <>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5v6c0 5 3.4 9.3 8 11 4.6-1.7 8-6 8-11V5z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
};

/** Free shipping / easy returns / cash on delivery — appears on both the
    collection page and the product detail page. */
export default function TrustRow({ className = "" }: { className?: string }) {
  return (
    <div className={`sc-trust ${className}`.trim()}>
      {trust.map((t) => (
        <div className="sc-trust-i" key={t.title}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {PATHS[t.icon]}
          </svg>
          <div>
            <b>{t.title}</b>
            <span>{t.blurb}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
