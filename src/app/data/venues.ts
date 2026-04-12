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
      "The Grand Lawn is Kanjira's Luxeves Pavilion's crown jewel — a sprawling riverside outdoor wedding lawn capable of hosting up to 2,000 guests in grand style. Nestled along the tranquil Kerala backwaters, this open-air wedding venue offers a natural canopy of towering palms and a panoramic waterfront backdrop ideal for large Hindu wedding ceremonies, grand reception events, and multi-day celebrations. As one of Kerala's most expansive destination wedding lawns, the Grand Lawn is the preferred choice for families seeking a breathtaking outdoor setting that blends tropical nature with sophisticated event planning.",
    image: "/images/kanjiras-pavilion-backwater-view-wedding-venue.webp",
    gallery: [
      "/images/kanjiras-pavilion-backwater-view-wedding-venue.webp",
      "/images/kanjiras-luxeves-pavilion-outdoor-wedding-venue.webp",
      "/images/kanjiras-luxeves-pavilion-wedding-lawn-thrissur.webp",
      "/images/kanjiras-pavilion-drone-view-backwater-venue.webp",
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
      "Natural canopy of palm trees",
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
      "Covered venue ideal for ceremonies and receptions with elegant architecture",
    longDescription:
      "The Backwater Pavilion is a roof covered, open wedding venue accommodating up to 400 guests, offering the perfect balance between open-air ambiance and weather-protected luxury. With its soaring architectural ceilings, chandelier lighting, and integrated audio-visual systems, this pavilion is one of Kerala's most versatile destination wedding venues. Whether you're hosting a traditional Kerala wedding ceremony, a modern reception dinner, or a themed cocktail event, the Celebration Pavilion delivers an atmosphere of timeless elegance amidst the backwater landscapes of Kerala.",
    image: "/images/kanjiras-pavilion-backwater-wedding-stage.webp",
    gallery: [
      "/images/kanjiras-pavilion-backwater-wedding-stage.webp",
      "/images/backwater-wedding-pavilion-kerala-kanjiras.webp",
      "/images/luxury-backwater-wedding-venue-kerala-kanjiras.webp",
      "/images/kanjiras-pavilion-reception-event.webp",
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
      "Smaller venue perfect for engagement, mehndi, and private celebrations",
    longDescription:
      "The Intimate Pavilion is a charming, private event space accommodating up to 100 guests, designed for close-knit celebrations that require an exclusive and personalized setting. Surrounded by lush landscaped gardens and natural backwater views, this venue is ideal for pre-wedding events such as engagement ceremonies, mehendi celebrations, haldi rituals, and bridal brunches. As Kerala's most sought-after intimate wedding venue, it offers flexible seating arrangements, soft natural lighting, and a serene garden atmosphere that transforms every small celebration into a cherished memory.",
    image: "/images/kanjiras-luxeves-pavilion-mandap-backwater-kerala.webp",
    gallery: [
      "/images/kanjiras-pavilion-drone-view-backwater-venue.webp",
      "/images/kanjiras-luxeves-pavilion-garden.webp",
      "/images/kanjiras-luxeves-pavilion-ear-piercing.webp",
      "/images/kanjiras-pavilion-wedding-ceremony-backwater-view.webp",
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
    name: "Luxeves Resort",
    capacity: 50,
    tagline: "Luxury Backwater Stay & Boutique Events",
    description:
      "Premium resort accommodations for wedding guests and intimate gatherings",
    longDescription:
      "Luxeves Resort offers a selection of premium backwater-facing rooms and suites, providing the ultimate luxury stay experience for wedding families and guests. Perfectly integrated into the pavilion complex, the resort combines traditional Kerala architecture with modern luxury. It serves as an ideal base for multi-day destination weddings, allowing families to stay together in a serene, private environment. The resort also features exclusive lounge areas and mini-event spaces perfect for close-knit family dinners and pre-wedding gatherings.",
    image: "/images/kanjiras-pavilion-resort-stay.jpeg",
    gallery: [
      "/images/kanjiras-pavilion-resort-stay.jpeg",
      "/images/kanjiras-luxeves-pavilion-backwater-resort-stay-thrissur-kerala.webp",
      "/images/kanjiras-pavilion-luxury-wedding-location-kerala.webp",
      "/images/BackwaterWeddingDestination.webp",
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
