import Link from "next/link";
import { GREETING, site, wa } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import WhatsAppBar from "./WhatsAppBar";
import Reveal from "./Reveal";
import { asset } from "@/lib/seo";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="fgrid">
            <div className="f-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset("/logo-gold.svg")} alt="Shivansh Elegance" />
              <p style={{ maxWidth: 280, fontSize: 14 }}>
                Handcrafted styles, premium fabrics and timeless designs — delivered
                to your door, ordered on WhatsApp.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/women">Women</Link></li>
                <li><Link href="/men">Men</Link></li>
                <li><Link href="/kids">Child</Link></li>
                <li><Link href="/about">Our Story</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4>Shop</h4>
              <ul>
                <li><Link href="/women#sarees">Sarees</Link></li>
                <li><Link href="/women#anarkalis">Anarkalis</Link></li>
                <li><Link href="/women#suits">Suits &amp; Salwar</Link></li>
                <li><Link href="/women#lehengas">Lehengas</Link></li>
                <li><Link href="/women#kurtis">Kurtis</Link></li>
                <li><Link href="/contact">Contact &amp; Orders</Link></li>
              </ul>
            </div>
            <div>
              <h4>Order on WhatsApp</h4>
              <p style={{ fontSize: 14, marginBottom: 16 }}>
                Browse the full catalog, ask about sizes, prices and delivery —
                we reply fast.
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
      <WhatsAppBar />
      <Reveal />
    </>
  );
}
