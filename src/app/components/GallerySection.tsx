import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLocation, Link } from "react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";

const allImages = [
  { id: 1, src: "/images/backwater-wedding-pavilion-kerala-kanjiras.webp", alt: "Kanjira’s Luxeves Pavilion backwater wedding venue", category: "Ceremony" },
  { id: 2, src: "/images/kanjiras-luxeves-pavilion-bridal-entry-wedding.webp", alt: "Destination wedding venue", category: "Ceremony" },
  { id: 3, src: "/images/kanjiras-pavilion-reception-event.webp", alt: "Backwater wedding pavilion", category: "Reception" },
  { id: 4, src: "/images/kanjiras-pavilion-destination-wedding-venue-thrissur.webp", alt: "Wedding lawn", category: "Venue" },
  { id: 5, src: "/images/kanjiras-luxeves-pavilion-wedding-lawn-thrissur.webp", alt: "Luxury backwater wedding venue", category: "Venue" },
  { id: 6, src: "/images/kanjiras-luxeves-pavilion-wedding-reception-area.webp", alt: "Wedding ceremony setup", category: "Reception" },
  { id: 7, src: "/images/kanjiras-luxeves-pavilion-mandap-backwater-kerala.webp", alt: "Outdoor destination wedding", category: "Ceremony" },
  { id: 8, src: "/images/kanjiras-pavilion-evening-wedding-decoration.webp", alt: "Evening wedding decoration", category: "Reception" },
];

const categories = ["All", "Ceremony", "Reception", "Venue"];

export function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();


  // ✅ Sync selection index with Embla API
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCarouselIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  // ✅ Smooth autoplay
  useEffect(() => {
    if (isHomePage && isInView && api) {
      const interval = setInterval(() => {
        api.scrollNext();
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHomePage, isInView, api]);

  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  if (isHomePage) {

    return (
      <section
        id="gallery"
        ref={containerRef}
        className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 bg-secondary"
      >
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <motion.h2
            className="text-2xl md:text-4xl text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Visual Journey
          </motion.h2>

          <p className="text-muted-foreground max-w-xl">
            Explore the curated moments at Kanjira’s Luxeves Pavilion.
          </p>
        </div>

        {/* ✅ SIMPLE CAROUSEL */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {allImages.map((image, index) => (
              <CarouselItem
                key={image.id}
                className="pl-4 basis-[80%] sm:basis-[60%] md:basis-[45%] lg:basis-[30%]"
              >
                <div className="overflow-hidden rounded-xl">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    loading={index < 3 ? "eager" : "lazy"} // ✅ performance
                    decoding="async"
                    className="w-full h-[350px] md:h-[500px] object-cover will-change-transform transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 mt-20 flex justify-center">
          <Link
            to="/gallery"
            className="flex items-center gap-4 px-10 py-4 bg-primary text-white rounded-full hover:bg-accent transition"
          >
            <span className="text-sm uppercase tracking-[0.2em]">
              View Gallery
            </span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    );

  }
  // Gallery Page Layout remains same...
  return (
    <section
      id="gallery"
      ref={containerRef}
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            className="w-16 h-1 bg-accent mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.8 }}
          />
          <motion.h2
            className="text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visual Journey
          </motion.h2>
          <motion.p className="text-muted-foreground max-w-3xl mx-auto">
            Capturing the magic and elegance of celebrations at Kanjira's Luxeves Pavilion
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20 px-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-[10px] tracking-[0.25em] uppercase transition-all duration-500 ${activeCategory === category
                ? "bg-accent text-accent-foreground shadow-2xl"
                : "bg-white/50 backdrop-blur-md text-primary hover:bg-accent/20"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="relative aspect-[4/3] cursor-pointer group rounded-lg overflow-hidden shadow-xl"
                  onClick={() => setSelectedImage(image)}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white hover:text-accent"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} strokeWidth={1} />
            </motion.button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-6xl w-full"
            >
              <ImageWithFallback
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}