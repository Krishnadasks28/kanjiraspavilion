import { BookingSection } from "../components/BookingSection";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

export function BookingPage() {
  return (
    <main className="">
      <MetaTags />
      <PageHero 
        title="Check Availability" 
        subtitle="Start Your Journey with Us" 
        backgroundImage="/images/kanjiras-pavilion-sunset-backwater-wedding-venue.webp" 
      />
      <BookingSection />
    </main>
  );
}
