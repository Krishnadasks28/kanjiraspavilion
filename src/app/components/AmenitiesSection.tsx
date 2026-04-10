import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight, ParkingCircle, Home, Trees, Utensils } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const amenities = [
  {
    icon: ParkingCircle,
    badge: "Convenience",
    title: "Ample Guest Parking",
    description: "Our venue provides dedicated, secure parking for over 200 vehicles, ensuring a seamless arrival experience for every guest.",
    image: "/images/kanjiras-pavilion-drone-view-backwater-venue.webp",
  },
  {
    icon: Home,
    badge: "Luxury",
    title: "Premium Bridal Suites",
    description: "Elegant, climate-controlled suites designed for relaxation and preparation, featuring private vanities and luxury amenities.",
    image: "/images/kanjiras-pavilion-luxury-wedding-location-kerala.webp",
  },
  {
    icon: Trees,
    badge: "Nature",
    title: "Landscaped Tropical Gardens",
    description: "Lush, manicured greenery and curated pathways that offer a breathtaking natural backdrop for your photography and ceremonies.",
    image: "/images/kanjiras-luxeves-pavilion-garden.webp",
  },
  {
    icon: Utensils,
    badge: "Service",
    title: "Professional Catering Spaces",
    description: "World-class facilities for external catering teams, designed to maintain the highest standards of food service and hygiene.",
    image: "/images/kanjiras-pavilion-reception-event.webp",
  },
];

export function AmenitiesSection({
  layout = "editorial"
}: {
  layout?: "grid" | "editorial"
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (layout === "grid") {
    return (
      <section
        id="amenities"
        ref={ref}
        className="py-20 md:py-48 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <motion.div
              className="w-16 h-1 bg-accent mx-auto mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8 }}
            />
            <h2 className="text-4xl md:text-5xl text-primary mb-4">
              Premium Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every detail thoughtfully designed for your comfort and convenience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={amenity.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="group bg-secondary p-8 rounded-lg hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-accent/20"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-all duration-300">
                    <Icon className="text-accent group-hover:text-white" size={28} />
                  </div>
                  <h3 className="text-xl text-primary mb-4">{amenity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {amenity.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  // Editorial Layout (Base 11 style)
  return (
    <section
      id="amenities"
      ref={ref}
      className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.div
            className="w-16 h-1 bg-accent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 1 }}
          />
          <h2 className="text-4xl md:text-6xl text-primary mb-8">
            Beyond Ordinary <br />
            <span className="text-accent italic">Experiences</span>
          </h2>
        </div>

        {/* Feature Sections */}
        <div className="space-y-32 md:space-y-48">
          {amenities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6 text-left">
                <span className="text-xs uppercase tracking-[0.25em] text-accent">{item.badge}</span>
                <h3 className="text-3xl md:text-5xl text-primary leading-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}