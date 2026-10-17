import type { Metadata } from "next";
import ComingSoonRef from "@/components/ComingSoonRef";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Kids' Collection — Coming Soon | Shivansh Elegance",
  "Festive and everyday ethnic wear for children — coming soon. Get notified on WhatsApp.",
  "/kids/"
);

export default function Kids() {
  return (
    <ComingSoonRef
      eyebrow="KIDS' COLLECTION"
      title="Little ones, lovely styles."
      blurb="Soft fabrics and cheerful colours for festive days and everyday wear — coming soon. Leave your number and we'll message you the day we launch."
      image="/images/hero-women.jpg"
      alt="Children's ethnic wear"
      message="Hi! Please notify me when the kids' collection launches."
    />
  );
}
