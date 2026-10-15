"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { GREETING, wa } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import { asset } from "@/lib/seo";

const links = [
  { href: "/", label: "Home" },
  { href: "/women", label: "Women" },
  { href: "/men", label: "Men" },
  { href: "/kids", label: "Child" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const hdr = document.querySelector("header");
    const onScroll = () => {
      if (!hdr) return;
      // On the showcase home the header floats over the hero: transparent at
      // the top, solid once you scroll past it.
      (hdr as HTMLElement).style.background = isHome
        ? window.scrollY > 40
          ? "rgba(18,13,8,.96)"
          : "transparent"
        : window.scrollY > 40
        ? "rgba(18,13,8,.96)"
        : "rgba(18,13,8,.82)";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header className={isHome ? "over-hero" : undefined}>
      <div className="wrap hd">
        <Link className="logo" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo-gold.svg")} alt="Shivansh Elegance" />
        </Link>
        <nav>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "on" : undefined}
            >
              {l.label}
            </Link>
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
          onClick={() => document.body.classList.toggle("nav-open")}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
