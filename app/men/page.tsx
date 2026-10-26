import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Men's Collection — Coming Soon | Shivansh Elegance",
  "The Shivansh Elegance men's range — kurtas, shirts and ethnic wear — is in production. Message us on WhatsApp for first look.",
  "/men/"
);

export default function MenPage() {
  return (
    <ComingSoon
      title="Men"
      eyebrow="Coming Soon"
      blurb="Kurtas, shirts and effortless ethnic wear — the men's range is in production."
      image="/images/products/coord-set-07.jpg"
      alt="Shivansh Elegance men's collection preview"
      notifyText="Hi Shivansh Elegance! Please notify me when the Men's collection launches."
    />
  );
}
