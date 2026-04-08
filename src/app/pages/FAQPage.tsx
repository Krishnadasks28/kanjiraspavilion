import { FAQSection } from "../components/FAQSection";
import { MetaTags } from "../components/MetaTags";
import { PageHero } from "../components/PageHero";

export function FAQPage() {
  return (
    <main className="">
      <MetaTags />
      <PageHero 
        title="Common Questions" 
        subtitle="Everything You Need to Know" 
        backgroundImage="/images/kanjiras-pavilion-evening-wedding-decoration.webp" 
      />
      <FAQSection />
    </main>
  );
}
