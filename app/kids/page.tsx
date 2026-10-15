import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Children's Collection — Coming Soon | Shivansh Elegance",
  "Frocks, sets and casuals for the little ones — coming soon. Get notified on WhatsApp.",
  "/kids/"
);

export default function Kids() {
  return (
    <ComingSoon
      eyebrow="Child's Collection"
      headline="Little Styles. Big Smiles."
      blurb="Frocks, sets and casuals for the little ones — coming soon. Ping us and we'll let you know first."
      image="/images/detail.jpg"
      alt="Children's ethnic wear"
      message="Hi! Please notify me when the kids' collection launches."
    />
  );
}
