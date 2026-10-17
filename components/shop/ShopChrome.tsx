import Link from "next/link";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { wa } from "@/lib/site";

/**
 * Header, footer and logo for the shop pages, following the reference
 * implementation's markup. Icons are inlined rather than pulled from a CDN.
 */

export function Logo() {
  return (
    <div className="logo">
      <div className="logo-symbol">&#9819;</div>
      <div className="logo-name">SHIVANSH</div>
      <div className="logo-sub">ELEGANCE</div>
      <div className="logo-tag">WEAR ELEGANCE &bull; LIVE STYLISH</div>
    </div>
  );
}

const NAV = [
  { href: "/", label: "Home" },
  { href: "/women", label: "Women", active: true },
  { href: "/men", label: "Men" },
  { href: "/kids", label: "Child" },
];

export function ShopHeader({ active = "/women" }: { active?: string }) {
  return (
    <header>
      <Link href="/" className="logo" aria-label="Shivansh Elegance home">
        <Logo />
      </Link>
      <nav>
        {NAV.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className={active === n.href ? "active" : undefined}
          >
            {n.label}
          </Link>
        ))}
      </nav>
      <a
        className="whatsapp-header"
        href={wa("Hello Shivansh Elegance! I would like to explore your collection.")}
        target="_blank"
        rel="noopener"
      >
        <WhatsAppIcon className="wa-icon" />
        Shop on WhatsApp
      </a>
    </header>
  );
}

const SOCIAL = [
  {
    label: "Instagram",
    d: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm8.4-11.2a1.55 1.55 0 1 1-3.1 0 1.55 1.55 0 0 1 3.1 0z",
  },
  {
    label: "Facebook",
    d: "M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.3-.04-1.3-.13-2.45-.13-2.45 0-4.1 1.5-4.1 4.23v2.2H7.4V13h2.75v8h3.35z",
  },
  {
    label: "YouTube",
    d: "M22.5 7.2a2.7 2.7 0 0 0-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 0 0 1.5 7.2C1 8.9 1 12 1 12s0 3.1.5 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.7.5-4.8.5-4.8s0-3.1-.5-4.8zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z",
  },
];

export function ShopFooter({ detail = false }: { detail?: boolean }) {
  return (
    <footer>
      {detail ? (
        <div className="detail-footer-banner">
          <p>
            Elegance in
            <br />
            every moment
          </p>
          <Logo />
        </div>
      ) : null}

      <div className="footer-main">
        <Logo />
        <div className="footer-social">
          <h4>Stay Connected</h4>
          <p>Follow us for latest styles, offers and more.</p>
          <div className="social-icons">
            {SOCIAL.map((s) => (
              <svg key={s.label} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <title>{s.label}</title>
                <path d={s.d} />
              </svg>
            ))}
          </div>
        </div>
        <a
          className="footer-whatsapp"
          href={wa("Hello Shivansh Elegance! I would like to explore your collection.")}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon className="wa-icon" /> &nbsp; Shop Now on WhatsApp
        </a>
      </div>

      <div className="footer-bottom">
        <Link href="/">Home</Link> | <Link href="/women">Women</Link> |{" "}
        <Link href="/men">Men</Link> | <Link href="/kids">Child</Link> |{" "}
        <Link href="/about">About Us</Link> | <Link href="/contact">Contact Us</Link>
        <br />
        <br />
        &copy; 2026 Shivansh Elegance. All rights reserved.
      </div>
    </footer>
  );
}
