import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLocation, Link } from "react-router";

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
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);

  const autoPlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ✅ Responsive width (fixed issue)
  const [itemWidth, setItemWidth] = useState(500);
  const GAP = 24;

  useEffect(() => {
    const updateWidth = () => {
      setItemWidth(window.innerWidth < 768 ? 300 : 500);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const filteredImages =
    activeCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === activeCategory);

  // ✅ Smooth autoplay (no interval drift)
  useEffect(() => {
    if (isHomePage && isInView && !isAutoPlayPaused) {
      const play = () => {
        autoPlayTimerRef.current = setTimeout(() => {
          setCarouselIndex((prev) => (prev + 1) % allImages.length);
          play();
        }, 2000);
      };
      play();
    }

    return () => {
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current);
    };
  }, [isHomePage, isInView, isAutoPlayPaused]);

  const handleDragStart = () => {
    setIsAutoPlayPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const threshold = itemWidth / 4;

    if (offset < -threshold) {
      setCarouselIndex((prev) => Math.min(prev + 1, allImages.length - 1));
    } else if (offset > threshold) {
      setCarouselIndex((prev) => Math.max(prev - 1, 0));
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlayPaused(false);
    }, 5000);
  };

  if (isHomePage) {
    // ✅ Correct center using container width
    const containerWidth =
      containerRef.current?.offsetWidth || window.innerWidth;

    const centerOffset = containerWidth / 2 - itemWidth / 2;
    const xPosition =
      -(carouselIndex * (itemWidth + GAP)) + centerOffset;

    return (
      <section
        id="gallery"
        ref={containerRef}
        className="py-20 md:py-48 bg-secondary overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-left">
            <motion.div
              className="w-16 h-1 bg-accent mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.h2
              className="text-primary font-serif mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
            >
              Visual Journey
            </motion.h2>
            <p className="text-muted-foreground max-w-xl font-light">
              Explore the breathtaking landscapes and curated moments.
            </p>
          </div>
        </div>

        <div
          className="relative w-full overflow-visible cursor-grab active:cursor-grabbing"
          style={{ perspective: "1500px" }}
        >
          <motion.div
            className="flex items-center space-x-6 h-[450px] md:h-[650px] px-[10vw]"
            style={{ transformStyle: "preserve-3d" }}
            drag="x"
            dragConstraints={{
              right: centerOffset,
              left:
                -((allImages.length - 1) * (itemWidth + GAP)) +
                centerOffset,
            }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={{ x: xPosition }}
            transition={{ type: "spring", damping: 30, stiffness: 120 }}
          >
            {allImages.map((image, index) => {
              const isActive = carouselIndex === index;
              const isPast = index < carouselIndex;

              let transformStyle = "scale(0.85)";
              let opacityClass = "opacity-50";

              if (isActive) {
                transformStyle = "scale(1.1) translateZ(50px)";
                opacityClass = "opacity-100 z-20";
              } else if (isPast) {
                transformStyle = "scale(0.85) rotateY(25deg)";
              } else {
                transformStyle = "scale(0.85) rotateY(-25deg)";
              }

              return (
                <motion.div
                  key={image.id}
                  className={`flex-shrink-0 w-[300px] md:w-[500px] h-[350px] md:h-[550px] rounded-lg overflow-hidden relative group transition-all duration-700 ${opacityClass}`}
                  style={{ transform: transformStyle }}
                  onClick={() => {
                    setCarouselIndex(index);
                    handleDragStart();
                    resumeTimeoutRef.current = setTimeout(
                      () => setIsAutoPlayPaused(false),
                      5000
                    );
                  }}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-24 flex justify-center">
          <Link
            to="/gallery"
            className="group flex items-center space-x-6 px-12 py-5 bg-primary text-white rounded-full hover:bg-accent transition-all shadow-xl hover:-translate-y-1"
          >
            <span className="text-sm uppercase tracking-[0.3em] font-bold">
              View All Memories
            </span>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
              <ArrowRight size={20} />
            </div>
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
            className="text-primary font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visual Journey
          </motion.h2>
          <motion.p className="text-muted-foreground max-w-3xl mx-auto font-light">
            Capturing the magic and elegance of celebrations at Kanjira's Luxeves Pavilion
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20 px-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ${activeCategory === category
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