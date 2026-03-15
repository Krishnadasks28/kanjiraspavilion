import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/kanjiras-luxeves-pavilion-backwater-resort-stay-thrissur-kerala.webp"
                alt="Kerala Backwaters"
                className="w-full h-full object-cover"
              />
              {/* Decorative Border */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[var(--gold)] rounded-lg -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="w-16 h-1 bg-[var(--gold)] mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <h2 className="text-4xl md:text-5xl text-[var(--green-dark)] mb-6">
              A Paradise for a Perfect Stay
            </h2>

            <p className="text-lg text-[var(--green-medium)] mb-6 leading-relaxed">
              Nestled in the heart of Kerala's enchanting backwaters, Kanjira's
              Luxeves Pavilion offers a peaceful and luxurious riverside
              retreat. Surrounded by lush coconut groves and tranquil waters,
              the property provides the perfect escape for guests seeking
              relaxation, nature, and comfort.
            </p>

            <p className="text-lg text-[var(--green-medium)] mb-6 leading-relaxed">
              Wake up to the gentle sounds of flowing backwaters and enjoy
              serene views that capture the essence of Kerala's tropical beauty.
              Whether you're planning a relaxing getaway, a family stay, or a
              private celebration, our venue blends natural charm with modern
              amenities to create an unforgettable experience.
            </p>

            <p className="text-lg text-[var(--green-medium)] mb-8 leading-relaxed">
              Wake up to the gentle sounds of flowing backwaters and enjoy
              serene views that capture the essence of Kerala's tropical beauty.
              Whether you're planning a relaxing getaway, a family stay, or a
              private celebration, our venue blends natural charm with modern
              amenities to create an unforgettable experience.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "Riverside Venue",
                "Tropical Backwater Views",
                "Boating & Kayaking",
                "Private Retreat Experience",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
                  <span className="text-[var(--green-dark)]">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
