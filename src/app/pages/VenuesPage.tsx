import { VenuesSection } from "../components/VenuesSection";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

export function VenuesPage() {
  return (
    <main className="">
      <MetaTags />
      <PageHero
        title="Our Venues"
        subtitle="Extraordinary Spaces for Extraordinary Moments"
        backgroundImage="/images/kanjiras-luxeves-pavilion-destination-wedding-venue-thrissur.webp"
      />
      <VenuesSection />
    </main>
  );
}
