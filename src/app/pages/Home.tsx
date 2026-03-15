import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { VenuesSection } from "../components/VenuesSection";
import { AmenitiesSection } from "../components/AmenitiesSection";
import { GallerySection } from "../components/GallerySection";
import { DestinationSection } from "../components/DestinationSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import { BookingSection } from "../components/BookingSection";
import { LocationSection } from "../components/LocationSection";
import { MetaTags } from "../components/MetaTags";

export function Home() {
  return (
    <main className="overflow-hidden">
      <MetaTags />
      <HeroSection />
      <AboutSection />
      <VenuesSection />
      <AmenitiesSection />
      <GallerySection />
      <DestinationSection />
      <TestimonialsSection />
      <FAQSection />
      <BookingSection />
      <LocationSection />
    </main>
  );
}
