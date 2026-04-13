export interface Venue {
  id: number;
  slug: string;
  name: string;
  capacity: number;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  idealFor: string[];
  features: string[];
}

export const venues: Venue[] = [
  {
    id: 1,
    slug: "grand-lawn",
    name: "Venue 1",
    capacity: 2000,
    tagline: "The Premier Outdoor Wedding Lawn in Kerala",
    description:
      "Large outdoor riverside celebration space perfect for grand weddings and receptions",
    longDescription:
      "A grand open venue accommodating up to 2,000 guests, ideal for majestic weddings and large-scale celebrations. Set against a picturesque natural backdrop, it offers an elegant setting for unforgettable moments. Designed for versatility and seamless flow, it effortlessly adapts to both traditional ceremonies and contemporary events.",
    image:
      "/images/venue1/kanjiras-luxeves-pavilion-backwater-event-destination.webp",
    gallery: [
      "/images/venue1/kanjiras-luxeves-pavilion-backwater-event-destination.webp",
      "/images/venue1/backwater-wedding-kerala-kanjiras-luxeves-pavilion.webp",
    ],
    idealFor: [
      "Grand Evening Weddings",
      "Reception Events",
      "DJ Parties",
      "Corporate Galas",
    ],
    features: [
      "Riverside location with stunning views",
      "Spacious lawn for 1000+ guests",
      "Perfect for outdoor ceremonies",
    ],
  },
  {
    id: 2,
    slug: "backwater-pavilion",
    name: "Venue 2",
    capacity: 400,
    tagline: "Elegant Covered Venue for Ceremonies & Receptions",
    description:
      "An elegant glass house venue for up to 400 guests, offering stunning views and a contemporary ambience.",
    longDescription:
      "An elegant glass house venue for up to 400 guests, offering stunning views and a contemporary ambience. Surrounded by natural light and scenic backwater vistas, it creates a refined setting for both daytime and evening events. Designed with modern aesthetics and comfort in mind, it delivers an intimate yet sophisticated celebration experience.",
    image: "/images/venue2/kanjiras-luxeves-pavilion-wedding-venue2-area.webp",
    gallery: [
      "/images/venue2/kanjiras-luxeves-pavilion-venue2.webp",
      "/images/venue2/kanjiras-pavilion-backwater-wedding-stage.webp",
      "/images/venue2/luxury-backwater-wedding-venue-kerala.webp",
      "/images/venue2/kanjiras-pavilion-reception-event.webp",
    ],
    idealFor: [
      "Wedding Ceremonies",
      "Reception Dinners",
      "Cocktail Events",
      "Naming Ceremonies",
    ],
    features: [
      "Climate-controlled comfort",
      "Elegant chandelier lighting",
      "Integrated audio-visual systems",
      "Weather-protected venue",
    ],
  },
  {
    id: 3,
    slug: "intimate-pavilion",
    name: "Venue 3",
    capacity: 100,
    tagline: "Private Celebrations in a Garden Setting",
    description:
      "An intimate venue for up to 100 guests, perfect for private celebrations.",
    longDescription:
      "An intimate venue designed for up to 100 guests, ideal for close-knit ceremonies and private gatherings. The space offers a warm, refined ambiance that enhances every moment. Perfect for those seeking a personal and elegant celebration experience.",
    image: "/images/venue3/kanjiras-luxeves-pavilion-mandapam-kerala.webp",
    gallery: [
      "/images/venue3/kanjiras-luxeves-pavilion-venue3-bride.webp",
      "/images/venue3/kanjiras-luxeves-pavilion-garden.webp",
      "/images/venue3/kanjiras-luxeves-pavilion-ear-piercing.webp",
      "/images/venue3/kanjiras-luxeves-pavilion-venue3-backdrop.webp",
    ],
    idealFor: [
      "Birthday Parties",
      "Mehendi Ceremonies",
      "Haldi Functions",
      "Bridal Brunches",
    ],
    features: [
      "Cozy and intimate setting",
      "Garden views and natural light",
      "Flexible seating arrangements",
      "Ideal for pre-wedding events",
    ],
  },
  {
    id: 4,
    slug: "luxeves-resort",
    name: "Resort",
    capacity: 6,
    tagline: "Luxury Backwater Stay & Boutique Events",
    description:
      "Luxury stay amidst nature, where comfort meets serene surroundings.",
    longDescription:
      "Enhance your celebration with our premium riverside villa, featuring two beautifully designed bedrooms, where you can wake up to calming water views and enjoy moments of peace amidst natural elegance.",
    image: "/images/resort/kanjiras-pavilion-resort-stay.jpeg",
    gallery: [
      "/images/resort/kanjiras-luxeves-pavilion-backwater-resort-stay-thrissur-kerala.webp",
      "/images/resort/kanjiras-pavilion-resort-stay.jpeg",
      "/images/resort/Kanjiras-luxeves-pavilion-resort-window.jpg",
      "/images/resort/kanjiras-luxeves-luxury-resort.jpeg",
    ],
    idealFor: [
      "Wedding Guest Accommodation",
      "Family Stay-overs",
      "Private Family Dinners",
      "Honeymoon Suites",
    ],
    features: [
      "Backwater-facing luxury rooms",
      "Direct access to wedding venues",
      "Traditional Kerala architecture",
      "Exclusive guest services",
    ],
  },
];
