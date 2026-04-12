import { AboutSection } from "../components/AboutSection";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";
import { StatsSection } from "../components/StatsSection";
import { DestinationSection } from "../components/DestinationSection";

export function AboutPage() {
  return (
    <main className="">
      <MetaTags />
      <PageHero
        title="Our Story"
        subtitle="Heritage, Elegance & Nature"
        backgroundImage="/images/kanjiras-pavilion-luxury-wedding-location-kerala.webp"
      />
      <AboutSection
        showLink={false}
        content={
          <div className="space-y-4">
            <p>
              Born from a vision to create a distinctive event destination in
              the heart of Kerala, Kanjira’s Luxeves Pavilion brings together
              natural beauty and refined architectural elegance. Designed to
              honor tradition while embracing modern luxury, it offers a serene
              riverside setting where every celebration feels elevated and
              timeless.
            </p>

            <p>
              Nestled along the serene Canoly Canal, just minutes away from the
              sacred Thriprayar Sree Rama Temple, and only a 30-minute drive
              from Guruvayoor Temple, this destination brings together nature,
              spirituality, and refined luxury in one breathtaking location.
              With versatile spaces including expansive lawns, a stunning glass
              house, and intimate indoor halls, it creates the perfect backdrop
              for celebrations of every scale.
            </p>
          </div>
        }
      />
      <StatsSection />
      <DestinationSection />
    </main>
  );
}
