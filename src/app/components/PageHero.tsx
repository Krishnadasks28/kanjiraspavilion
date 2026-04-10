import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center pt-24"
    >
      {/* Background with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="w-full h-[120%] bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          {/* Elegant Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="w-12 h-1 bg-accent mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <h1 className="text-white mb-4 tracking-tight drop-shadow-lg">
            <span className="text-accent block md:inline font-serif italic mr-2 text-[0.8em] normal-case mb-2 opacity-90">
              Kanjiras Luxeves
            </span>
            {title}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-white/90 font-light tracking-[0.2em] uppercase text-[12px]"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* Decorative Bottom Fade - Reduced */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-secondary to-transparent z-10" />
    </section>
  );
}
