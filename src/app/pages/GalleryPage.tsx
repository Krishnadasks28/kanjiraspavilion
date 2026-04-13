import { GallerySection } from "../components/GallerySection";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

export function GalleryPage() {
  return (
    <main className="">
      <MetaTags />
      <PageHero
        title="Visual Gallery"
        subtitle="A Glimpse into Extraordinary Celebrations"
        backgroundImage="/images/kanjiras-luxeves-pavilion-wedding-decoration.webp"
      />
      <GallerySection />
    </main>
  );
}
