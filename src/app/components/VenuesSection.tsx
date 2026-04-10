import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { venues } from "../data/venues";
import { Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";

export function VenuesSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const next = () => api?.scrollNext();
  const prev = () => api?.scrollPrev();

  return (
    <section
      id="venues"
      ref={containerRef}
      className="py-20 md:py-48 px-4 sm:px-6 lg:px-8 bg-secondary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              className="w-16 h-1 bg-accent mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8 }}
            />

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-primary mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our Venues & Suites
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Discover the perfect setting for your celebration, from grand riverside lawns
              to intimate garden pavilions, each crafted for timeless memories.
            </motion.p>
          </div>

        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Navigation Controls - Side Positioned */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 z-30 hidden sm:block">
            <button
              onClick={prev}
              disabled={!api?.canScrollPrev()}
              className={`p-4 md:p-5 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-primary/5 transition-all duration-300 ${!api?.canScrollPrev()
                  ? "opacity-0 pointer-events-none"
                  : "hover:bg-primary hover:text-white hover:scale-110 active:scale-95"
                }`}
              aria-label="Previous venue"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 -translate-y-1/2 z-30 hidden sm:block">
            <button
              onClick={next}
              disabled={!api?.canScrollNext()}
              className={`p-4 md:p-5 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-primary/5 transition-all duration-300 ${!api?.canScrollNext()
                  ? "opacity-0 pointer-events-none"
                  : "hover:bg-primary hover:text-white hover:scale-110 active:scale-95"
                }`}
              aria-label="Next venue"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              containScroll: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-8">
              {venues.map((venue, index) => (
                <CarouselItem
                  key={venue.id}
                  className="pl-8 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.article
                    className="group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl shadow-2xl bg-white border border-primary/5">
                      <Link
                        to={`/venues/${venue.slug}`}
                        className="absolute inset-0 overflow-hidden block"
                      >
                        <ImageWithFallback
                          src={venue.image}
                          alt={`${venue.name} – ${venue.tagline}`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-end text-white translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                          <div className="flex items-center space-x-3 mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <div className="bg-accent/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center space-x-2">
                              <Users size={14} />
                              <span className="text-[10px] font-bold uppercase tracking-wider">{venue.capacity} Guests</span>
                            </div>
                            <span className="text-xs font-medium uppercase tracking-widest text-white/80">
                              {venue.tagline.split(' ').slice(0, 2).join(' ')}
                            </span>
                          </div>

                          <h3 className="text-3xl md:text-4xl font-serif mb-4 leading-tight">
                            {venue.name}
                          </h3>

                          <p className="text-sm text-white/70 line-clamp-2 md:line-clamp-3 mb-6 font-light leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            {venue.description}
                          </p>

                          <div className="flex items-center space-x-2 text-accent uppercase text-xs font-bold tracking-[0.2em] transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-300">
                            <span>Explore Venue</span>
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </motion.article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Progress Indicators */}
        <div className="mt-16 flex justify-center space-x-3">
          {venues.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-1.5 transition-all duration-500 rounded-full ${currentIndex === idx
                  ? "w-12 bg-accent shadow-lg shadow-accent/20"
                  : "w-4 bg-primary/10 hover:bg-primary/20"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

