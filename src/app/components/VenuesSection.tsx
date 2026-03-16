import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Users, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const venues = [
  {
    id: 1,
    name: "Grand Lawn",
    capacity: 2000,
    tagline: "The Premier Outdoor Wedding Lawn in Kerala",
    description:
      "Large outdoor riverside celebration space perfect for grand weddings and receptions",
    longDescription:
      "The Grand Lawn is Kanjira's Luxeves Pavilion's crown jewel — a sprawling riverside outdoor wedding lawn capable of hosting up to 2,000 guests in grand style. Nestled along the tranquil Kerala backwaters, this open-air wedding venue offers a natural canopy of towering palms and a panoramic waterfront backdrop ideal for large Hindu wedding ceremonies, grand reception events, and multi-day celebrations. As one of Kerala's most expansive destination wedding lawns, the Grand Lawn is the preferred choice for families seeking a breathtaking outdoor setting that blends tropical nature with sophisticated event planning.",
    image: "/images/kanjiras-pavilion-backwater-view-wedding-venue.webp",
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
    name: "Backwater Pavilion",
    capacity: 400,
    tagline: "Elegant Covered Venue for Ceremonies & Receptions",
    description:
      "Covered venue ideal for ceremonies and receptions with elegant architecture",
    longDescription:
      "The Backwater Pavilion is a roof covered, open wedding venue accommodating up to 400 guests, offering the perfect balance between open-air ambiance and weather-protected luxury. With its soaring architectural ceilings, chandelier lighting, and integrated audio-visual systems, this pavilion is one of Kerala's most versatile destination wedding venues. Whether you're hosting a traditional Kerala wedding ceremony, a modern reception dinner, or a themed cocktail event, the Celebration Pavilion delivers an atmosphere of timeless elegance amidst the backwater landscapes of Kerala.",
    image: "/images/kanjiras-pavilion-backwater-wedding-stage.webp",
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
    name: "Intimate Pavilion",
    capacity: 100,
    tagline: "Private Celebrations in a Garden Setting",
    description:
      "Smaller venue perfect for engagement, mehndi, and private celebrations",
    longDescription:
      "The Intimate Pavilion is a charming, private event space accommodating up to 100 guests, designed for close-knit celebrations that require an exclusive and personalized setting. Surrounded by lush landscaped gardens and natural backwater views, this venue is ideal for pre-wedding events such as engagement ceremonies, mehendi celebrations, haldi rituals, and bridal brunches. As Kerala's most sought-after intimate wedding venue, it offers flexible seating arrangements, soft natural lighting, and a serene garden atmosphere that transforms every small celebration into a cherished memory.",
    image: "/images/kanjiras-luxeves-pavilion-mandap-backwater-kerala.webp",
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
];

export function VenuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedVenue, setExpandedVenue] = useState<number | null>(null);

  return (
    <section
      id="venues"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--ivory)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.8 }}
          />

          <motion.h2
            className="text-4xl md:text-5xl text-[var(--green-dark)] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Wedding Venues
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--green-medium)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From grand outdoor wedding lawns to intimate garden pavilions,
            Kanjira's Luxeves Pavilion offers Kerala's finest destination
            wedding venue spaces — each crafted to create extraordinary
            celebrations.
          </motion.p>
        </div>

        {/* Venues — Full-width editorial layout */}
        <div className="space-y-20">
          {venues.map((venue, index) => (
            <motion.article
              key={venue.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className="group"
            >
              <div
                className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-72 sm:h-96 lg:h-auto overflow-hidden ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <ImageWithFallback
                    src={venue.image}
                    alt={`${venue.name} – ${venue.tagline}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Capacity Badge */}
                  <div className="absolute top-4 right-4 bg-[var(--gold)] text-[var(--green-dark)] px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                    <Users size={18} />
                    <span className="text-sm">{venue.capacity} guests</span>
                  </div>
                  {/* Bottom label */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs tracking-widest text-[var(--gold-light)] uppercase">
                      {venue.tagline}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`bg-white p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <h3 className="text-3xl md:text-4xl text-[var(--green-dark)] mb-2">
                    {venue.name}
                  </h3>
                  <p className="text-[var(--gold)] mb-4 tracking-wide text-sm uppercase">
                    Up to {venue.capacity} Guests
                  </p>
                  <p className="text-[var(--green-medium)] leading-relaxed mb-6 text-base">
                    {venue.longDescription}
                  </p>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <p className="text-sm text-[var(--green-dark)] mb-3 tracking-wide uppercase">
                      Ideal For:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {venue.idealFor.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1.5 bg-[var(--gold)]/10 text-[var(--green-dark)] border border-[var(--gold)]/30 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div
                    className="border-t border-[var(--gold)]/20 pt-6"
                    onMouseEnter={() => setExpandedVenue(venue.id)}
                    onMouseLeave={() => setExpandedVenue(null)}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {venue.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start space-x-2 text-sm text-[var(--green-medium)]"
                        >
                          <Check
                            size={16}
                            className="text-[var(--gold)] mt-0.5 flex-shrink-0"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
