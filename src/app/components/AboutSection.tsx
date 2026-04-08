import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function AboutSection({ 
  showLink = true, 
  title 
}: { 
  showLink?: boolean;
  title?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="pt-16 md:pt-24 pb-32 md:pb-48 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Optional Title for Home Page */}
        {title && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-[var(--gold)] uppercase tracking-[0.4em] text-sm font-bold border-b border-[var(--gold)]/20 pb-4 inline-block">
              {title}
            </h3>
          </motion.div>
        )}

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[var(--gold)] uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            The Essence of Elegance
          </span>

          <h2 className="text-4xl md:text-6xl text-[var(--green-dark)] mb-12 font-serif leading-tight">
            A Venue Where Nature Meets <br />
            <span className="text-[var(--gold)] italic">Grandeur</span>
          </h2>

          <div className="space-y-8 text-xl text-[var(--green-medium)] leading-relaxed mb-16 max-w-3xl mx-auto">
            <p className="font-bold text-[var(--green-dark)] text-2xl">
              Experience the magic of Kerala's serene backwaters as the backdrop
              to your once-in-a-lifetime celebration.
            </p>
            <p>
              Nestled in the heart of Kerala's enchanting backwaters, Kanjira's
              Luxeves Pavilion offers a peaceful and luxurious riverside
              retreat. Surrounded by lush coconut groves and tranquil waters,
              the property provides the perfect escape for guests seeking
              relaxation, nature, and comfort.
            </p>
            <p>
              Whether you're planning a relaxing getaway, a family stay, or a
              grand wedding celebration, our venue blends natural charm with modern
              amenities to create an unforgettable experience that captures the essence of Kerala's tropical beauty.
            </p>
          </div>

          {showLink && (
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center"
            >
              <Link
                to="/about"
                className="inline-flex items-center space-x-4 py-5 px-10 bg-[var(--green-dark)] text-white rounded-full hover:bg-[var(--gold)] transition-colors group shadow-xl"
              >
                <span className="text-sm uppercase tracking-widest font-bold">Discover Our Story</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
