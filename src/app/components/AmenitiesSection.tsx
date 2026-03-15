import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  ParkingCircle,
  Home,
  Sparkles,
  UtensilsCrossed,
  Trees,
  Users,
  Music,
  Wifi,
} from "lucide-react";

const amenities = [
  {
    icon: ParkingCircle,
    title: "Ample Guest Parking",
    description: "Spacious parking area for 200+ vehicles",
    detail: "Our venue provides dedicated parking for over 200 vehicles, ensuring smooth arrival and departure for all your wedding guests. Valet parking attendants are on standby for large events, making the experience seamless and stress-free from the very first moment of arrival.",
  },
  {
    icon: Home,
    title: "Premium Washrooms",
    description: "Luxurious, well-maintained restroom facilities",
    detail: "Kanjira's Luxeves Pavilion features premium washroom facilities fitted with high-end fixtures and ambient lighting. Our dedicated housekeeping team maintains these spaces throughout your event, ensuring pristine comfort for every guest.",
  },
  {
    icon: Sparkles,
    title: "Bridal Suite & Rooms",
    description: "Elegant private suite for bridal preparations",
    detail: "Our exclusive bridal suite is a beautifully appointed private space where the bride and her entourage can prepare in luxury. Equipped with vanity mirrors, climate control, and tasteful décor, it provides the perfect sanctuary before the ceremony begins.",
  },
  {
    icon: Trees,
    title: "Landscaped Gardens",
    description: "Beautifully manicured gardens and tropical greenery",
    detail: "Our award-winning landscaped gardens form the tropical heart of the venue, featuring native Kerala flora, curated water features, and winding pathways perfect for wedding photo sessions. The gardens provide a lush, natural backdrop that accentuates the backwater wedding destination experience.",
  },

];

export function AmenitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredAmenity, setHoveredAmenity] = useState<string | null>(null);

  return (
    <section
      id="amenities"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
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
            Premium Amenities
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--green-medium)] max-w-3xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Every detail thoughtfully designed for your comfort and convenience
          </motion.p>
        </div>

        {/* SEO Intro Text */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <p className="text-[var(--green-medium)] leading-relaxed text-base">
            As a premier destination wedding venue in Kerala, Kanjira's Luxeves Pavilion provides a full suite of world-class facilities — from spacious guest parking and luxurious bridal preparation rooms to professional catering spaces, beautifully landscaped gardens, and premium washrooms. Every amenity is crafted to ensure that your wedding event is seamless, beautiful, and memorable for every guest.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            const isHovered = hoveredAmenity === amenity.title;
            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredAmenity(amenity.title)}
                onMouseLeave={() => setHoveredAmenity(null)}
              >
                <div className="bg-[var(--ivory)] p-6 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--gold)] transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon
                      className="text-[var(--gold)] group-hover:text-white transition-colors duration-300"
                      size={32}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg text-[var(--green-dark)] mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-[var(--green-medium)] text-sm leading-relaxed mb-3 flex-1">
                    {amenity.description}
                  </p>

                  {/* Expanded detail on hover */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isHovered ? "auto" : 0,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs text-[var(--green-medium)]/80 leading-relaxed border-t border-[var(--gold)]/20 pt-3 mt-2">
                      {amenity.detail}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}