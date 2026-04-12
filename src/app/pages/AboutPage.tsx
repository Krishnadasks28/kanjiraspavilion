import { AboutSection } from "../components/AboutSection";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";
import { StatsSection } from "../components/StatsSection";
import { DestinationSection } from "../components/DestinationSection";
import { LocationSection } from "../components/LocationSection";

export function AboutPage() {
  return (
    <main className="">
      <MetaTags />
      <PageHero
        title="Our Story"
        subtitle="Heritage, Elegance & Nature"
        backgroundImage="/images/kanjiras-pavilion-luxury-wedding-location-kerala.webp"
      />
      <AboutSection showLink={false} />
      <StatsSection />
      <DestinationSection />
    </main>
  );
}
