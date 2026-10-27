"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { GREETING, products, site, wa } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/women/", label: "Women" },
  { href: "/men/", label: "Men" },
  { href: "/kids/", label: "Child" },
  { href: "/about/", label: "About" },
];

export function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

/** Header floats over the hero on pages that opt in (`overHero`). */
export function ShowcaseHeader({ overHero = false }: { overHero?: boolean }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header className={overHero ? "over-hero" : undefined}>
      <div className="wrap hd">
        <a className="logo" href="/" aria-label={`${site.brand} home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-gold.svg" alt={site.brand} />
        </a>

        <nav>
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={isActive(pathname, n.href) ? "on" : undefined}
              aria-current={isActive(pathname, n.href) ? "page" : undefined}
            >
              {n.label}
            </a>
          ))}
          <a
            className="btn btn-wa"
            href={wa(GREETING)}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon />
            Shop on WhatsApp
          </a>
        </nav>

        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

/** Footer from the Women artboard: logo + blurb, quick links, shop, WhatsApp. */
export function ShowcaseFooter() {
  const families = Array.from(new Set(products.map((p) => p.category)));
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="f-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-gold.svg" alt={site.brand} />
            <p style={{ maxWidth: 280, fontSize: 14 }}>
              Handcrafted styles, premium fabrics and timeless designs —
              delivered to your door, ordered on WhatsApp.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label === "About" ? "Our Story" : n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Shop</h4>
            <ul>
              {families.map((f) => (
                <li key={f}>
                  <a href="/women/">{f}</a>
                </li>
              ))}
              <li>
                <a href="/faq/">FAQ</a>
              </li>
              <li>
                <a href="/contact/">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Order on WhatsApp</h4>
            <p style={{ fontSize: 14, marginBottom: 16 }}>
              Browse the full catalog, ask about sizes, prices and delivery — we
              reply fast.
            </p>
            <a className="btn btn-wa" href={wa(GREETING)} target="_blank" rel="noopener">
              <WhatsAppIcon />
              Chat with us
            </a>
          </div>
        </div>

        <div className="fbot">
          <span>© {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
