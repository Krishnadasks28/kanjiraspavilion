import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { venues } from "../data/venues";
import { Link } from "react-router";

export function VenuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="venues"
      ref={ref}
      className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-[var(--ivory)]"
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
            Our Wedding Venues & Services
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--green-medium)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From grand outdoor wedding lawns to intimate garden pavilions and luxury resort stays,
            Kanjira's Luxeves Pavilion offers Kerala's finest destination
            wedding spaces.
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
                className={`grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 bg-white ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <Link
                  to={`/venues/${venue.slug}`}
                  className={`relative h-72 sm:h-96 lg:h-auto overflow-hidden block ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <ImageWithFallback
                    src={venue.image}
                    alt={`${venue.name} – ${venue.tagline}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Capacity Badge */}
                  <div className="absolute top-4 right-4 bg-[var(--gold)] text-[var(--green-dark)] px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg z-10">
                    <Users size={18} />
                    <span className="text-sm font-medium">{venue.capacity} guests</span>
                  </div>
                  {/* Overlay for hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="bg-white/90 text-[var(--green-dark)] px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Venue Details
                     </span>
                  </div>
                </Link>

                {/* Content */}
                <div
                  className={`p-8 lg:p-12 flex flex-col justify-center ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <span className="text-xs tracking-widest text-[var(--gold)] uppercase font-bold mb-3 block">
                      {venue.tagline}
                  </span>
                  <h3 className="text-3xl md:text-4xl text-[var(--green-dark)] mb-4">
                    {venue.name}
                  </h3>
                  <p className="text-[var(--green-medium)] leading-relaxed mb-8 text-base">
                    {venue.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                      {venue.idealFor.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="text-[10px] px-2 py-1 bg-[var(--ivory)] text-[var(--green-dark)] border border-[var(--gold)]/20 rounded-md uppercase tracking-wider"
                        >
                          {item}
                        </span>
                      ))}
                  </div>

                  <Link
                    to={`/venues/${venue.slug}`}
                    className="inline-flex items-center text-[var(--gold)] font-bold tracking-widest uppercase text-sm group/btn"
                  >
                    Explore Venue 
                    <ArrowRight size={18} className="ml-2 transform group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
