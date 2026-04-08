import { AmenitiesSection } from "../components/AmenitiesSection";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

export function AmenitiesPage() {
  return (
    <main className="">
      <MetaTags />
      <PageHero 
        title="Premium Amenities" 
        subtitle="Thoughtful Details for Your Comfort" 
        backgroundImage="/images/kanjiras-luxeves-pavilion-wedding-reception-area.webp" 
      />
      <AmenitiesSection />
    </main>
  );
}
