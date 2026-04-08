import { LocationSection } from "../components/LocationSection";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

export function LocationPage() {
  return (
    <main className="">
      <MetaTags />
      <PageHero 
        title="Our Location" 
        subtitle="In the Heart of Thrissur's Backwaters" 
        backgroundImage="/images/thrissur-backwater-destination-wedding-venue.webp" 
      />
      <LocationSection />
    </main>
  );
}
