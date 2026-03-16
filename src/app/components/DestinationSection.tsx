import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Waves, Palmtree, MapPin, TentTree } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const experiences = [
  {
    icon: Waves,
    title: "Serene Backwaters",
    description: "Experience the tranquil beauty of Kerala's iconic waterways",
  },
  {
    icon: Palmtree,
    title: "Tropical Paradise",
    description: "Surrounded by lush coconut groves and tropical landscapes",
  },
  {
    icon: TentTree,
    title: "Peaceful Riverside Stay",
    description: "Relax beside the calm waters and enjoy nature’s quiet charm",
  },
  {
    icon: MapPin,
    title: "Perfect Location",
    description: "Easily accessible yet secluded for your special day",
  },
];

export function DestinationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Full-width Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758182032661-5c176311ff28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwdHJlZXMlMjB0cm9waWNhbCUyMHJpdmVyc2lkZXxlbnwxfHx8fDE3NzM0MTUzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kerala backwaters"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--green-dark)]/90 via-[var(--green-dark)]/80 to-[var(--green-dark)]/70" />
      </div>

      {/* Content */}
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="w-16 h-1 bg-[var(--gold)] mb-6"
                initial={{ width: 0 }}
                animate={isInView ? { width: 64 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              <h2 className="text-4xl md:text-5xl text-white mb-6">
                The Destination Experience
              </h2>

              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                More than just a venue, Kanjira's Luxeves Pavilion offers an
                immersive destination experience in the heart of Kerala's
                natural beauty. Your guests will be transported to a world where
                traditional charm meets modern luxury.
              </p>

              <p className="text-lg text-white/90 mb-12 leading-relaxed">
                From the gentle lapping of backwater waves to the rustling of
                coconut palms, every moment here is infused with the magic of
                nature, creating memories that last a lifetime.
              </p>

              {/* Experience Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {experiences.map((exp, index) => {
                  const Icon = exp.icon;
                  return (
                    <motion.div
                      key={exp.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-[var(--gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[var(--gold)]" size={24} />
                      </div>
                      <div>
                        <h3 className="text-white mb-1">{exp.title}</h3>
                        <p className="text-white/80 text-sm">
                          {exp.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 rounded-lg overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="/images/BackwaterWeddingDestination.webp"
                      alt="Backwater sunset"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-64 rounded-lg overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="/images/kanjiras-luxeves-pavilion-garden.webp"
                      alt="Kerala backwaters"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-64 rounded-lg overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="/images/kanjiras-pavilion-resort-stay.jpeg"
                      alt="Palm trees"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-48 rounded-lg overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="/images/kanjiras-pavilion-reception-event.webp"
                      alt="Tropical decoration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Gold Border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[var(--gold)] rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
