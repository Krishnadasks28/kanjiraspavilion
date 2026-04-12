import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function AboutSection({
  showLink = true,
  title,
  content,
}: {
  showLink?: boolean;
  title?: string;
  content?: React.ReactNode;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-1 lg:gap-20">
        {/* Left Column: Headings */}
        <div className="md:w-5/12 flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-10"
          >
            <h3 className="text-accent uppercase tracking-[0.4em] text-sm mb-6 inline-block">
              {title || "About Us"}
            </h3>

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary leading-[1.1]">
              A Venue where nature meets grandeur
            </h2>
          </motion.div>
        </div>
        {/* Right Column: Content */}
        <div className="md:w-7/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {content ? (
              content
            ) : (
              <>
                <p>
                  Kanjira’s Luxeves Pavilion offers an extraordinary riverside
                  setting for weddings and grand events that deserve nothing
                  less than perfection
                </p>
                <p>
                  Nestled along the serene Canoly Canal, just minutes away from
                  the sacred Thriprayar Sree Rama Temple, and only a 30-minute
                  drive from Guruvayoor Temple, this destination brings together
                  nature, spirituality, and refined luxury in one breathtaking
                  location.
                </p>
              </>
            )}

            {showLink && (
              <div className="pt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-4 py-4 px-8 border border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all group"
                >
                  <span className="text-sm uppercase tracking-[0.2em]">
                    Discover More
                  </span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
