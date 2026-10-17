import type { Metadata } from "next";
import ComingSoonRef from "@/components/ComingSoonRef";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Men's Collection — Coming Soon | Shivansh Elegance",
  "Kurtas, shirts, ethnic wear and casuals for men — coming soon. Get notified on WhatsApp.",
  "/men/"
);

export default function Men() {
  return (
    <ComingSoonRef
      eyebrow="MEN'S COLLECTION"
      title="Classic. Confident. You."
      blurb="Kurtas, shirts, ethnic wear and casuals for men are on the way. Leave your number and we'll message you the day we launch."
      image="/images/men.jpg"
      alt="Men's ethnic wear"
      message="Hi! Please notify me when the men's collection launches."
    />
  );
}
