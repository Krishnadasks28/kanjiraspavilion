import { motion } from "motion/react";
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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              className="w-16 h-1 bg-accent mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8 }}
            />

            <motion.h2
              className="text-2xl md:text-4xl text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Venues & Suites
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discover the perfect setting for your celebration.
            </motion.p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative group/carousel">
          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden sm:block p-4 rounded-full bg-white shadow-xl"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden sm:block p-4 rounded-full bg-white shadow-xl"
          >
            <ChevronRight size={22} />
          </button>

          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="-ml-6">
              {venues.map((venue) => (
                <CarouselItem
                  key={venue.id}
                  className="pl-6 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  {/* ❌ removed scale animation */}
                  <motion.article
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-white">

                      <Link to={`/venues/${venue.slug}`} className="block h-full">

                        {/* ✅ optimized image */}
                        <ImageWithFallback
                          src={venue.image}
                          alt={venue.name}
                          loading="eager"
                          decoding="async"
                          className="w-full h-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-[1.04]"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                        {/* content */}
                        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                          <div className="flex items-center gap-2 mb-3">
                            <Users size={14} />
                            <span className="text-xs">
                              {venue.capacity} Guests
                            </span>
                          </div>

                          <h3 className="text-2xl md:text-3xl mb-2">
                            {venue.name}
                          </h3>

                          <p className="text-sm text-white/70 line-clamp-2 mb-4">
                            {venue.description}
                          </p>

                          <div className="flex items-center gap-2 text-accent text-xs uppercase tracking-wider">
                            Explore <ArrowRight size={14} />
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

        {/* Indicators */}
        <div className="mt-12 flex justify-center gap-2">
          {venues.map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              className={`h-1.5 rounded-full transition-all ${currentIndex === idx
                ? "w-10 bg-accent"
                : "w-4 bg-primary/20"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}