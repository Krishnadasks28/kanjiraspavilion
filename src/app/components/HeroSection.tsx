import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImg from '/images/BackwaterWeddingDestination.png'

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:`url(${heroImg})`
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-5xl"
        >
          {/* Decorative Line */}
          {/* <motion.div
            className="w-24 h-px bg-[var(--gold)] mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1, duration: 0.8 }}
          /> */}

          {/* SEO Subtitle above H1 */}
          {/* <motion.p
            className="text-xs sm:text-sm tracking-[0.3em] text-[var(--gold-light)] uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Backwater Wedding Venue · Kerala, India
          </motion.p> */}

          {/* SEO H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-4 px-4 leading-tight">
            {/* Destination Wedding Venue in Kerala –{" "} */}
            <span className="text-[var(--gold-light)]">Kanjira's Luxeves Pavilion</span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-[var(--gold-light)] mb-4 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Where Backwaters Meet Beautiful Beginnings
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-4 px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Experience the magic of Kerala's serene backwaters as the backdrop to your once-in-a-lifetime celebration. A premier outdoor wedding lawn and destination wedding location in Kerala — offering unmatched elegance amidst nature.
          </motion.p>

          {/* SEO keyword tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {["Backwater Wedding Venue", "Outdoor Wedding Lawn", "Destination Wedding Kerala"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-4 py-1.5 border border-[var(--gold)]/60 text-[var(--gold-light)] rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-10 py-4 bg-[var(--gold)] text-[var(--green-dark)] hover:bg-[var(--gold-light)] transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check Availability
          </motion.button>

          {/* Decorative Line */}
          <motion.div
            className="w-24 h-px bg-[var(--gold)] mx-auto mt-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { repeat: Infinity, duration: 2 },
          }}
        >
          <ChevronDown size={40} />
        </motion.button>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 bg-[var(--gold)] rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-3 h-3 bg-[var(--gold)] rounded-full opacity-40"
        animate={{
          y: [0, 30, 0],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}