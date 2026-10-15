import { GREETING, wa } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";

/** Sticky mobile-only order bar. */
export default function WhatsAppBar() {
  return (
    <div className="wabar">
      <a className="btn btn-wa" href={wa(GREETING)} target="_blank" rel="noopener">
        <WhatsAppIcon />
        Shop on WhatsApp
      </a>
    </div>
  );
}
