import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Child's Collection — Coming Soon | Shivansh Elegance",
  "The Shivansh Elegance child's range — ethnic wear, frocks and sets — is in production. Message us on WhatsApp for first look.",
  "/kids/"
);

export default function KidsPage() {
  return (
    <ComingSoon
      title="Child"
      eyebrow="Coming Soon"
      blurb="Ethnic wear, frocks and playful sets — the child's range is in production."
      image="/images/products/bandhani-dress-02.jpg"
      alt="Shivansh Elegance child's collection preview"
      notifyText="Hi Shivansh Elegance! Please notify me when the Child's collection launches."
    />
  );
}
