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
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const filteredImages = activeCategory === "All" 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  // Constants for carousel math
  const ITEM_WIDTH = typeof window !== "undefined" && window.innerWidth < 768 ? 300 : 500;
  const GAP = 24; // space-x-6

  // Auto-play logic with pause/resume
  useEffect(() => {
    if (isHomePage && isInView && !isAutoPlayPaused) {
      autoPlayTimerRef.current = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % allImages.length);
      }, 2000);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isHomePage, isInView, isAutoPlayPaused]);

  const handleDragStart = () => {
    setIsAutoPlayPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
  };

  const handleDragEnd = (event: any, info: any) => {
    // Snap to nearest index based on drag offset
    const offset = info.offset.x;
    const threshold = ITEM_WIDTH / 4;
    
    if (offset < -threshold) {
      setCarouselIndex((prev) => Math.min(prev + 1, allImages.length - 1));
    } else if (offset > threshold) {
      setCarouselIndex((prev) => Math.max(prev - 1, 0));
    }

    // Set 5s timeout to resume auto-play
    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlayPaused(false);
    }, 5000);
  };

  if (isHomePage) {
    // Center logic: Correct x to keep active index in center
    // Math: -(index * (width + gap)) + (containerWidth / 2) - (itemWidth / 2)
    // We'll use a dynamic calculation based on window width
    const centerOffset = typeof window !== "undefined" ? (window.innerWidth / 2) - (ITEM_WIDTH / 2) : 0;
    const xPosition = - (carouselIndex * (ITEM_WIDTH + GAP)) + centerOffset;

    return (
      <section
        id="gallery"
        ref={containerRef}
        className="py-32 md:py-48 bg-[var(--ivory)] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-left">
            <motion.div
              className="w-16 h-1 bg-[var(--gold)] mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8 }}
            />
            <motion.h2
              className="text-4xl md:text-6xl text-[var(--green-dark)] font-serif mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
            >
              Visual Journey
            </motion.h2>
            <p className="text-lg text-[var(--green-medium)] max-w-xl font-light">
              Explore the breathtaking landscapes and curated moments at Kanjira's Luxeves Pavilion.
            </p>
          </div>
        </div>

        {/* Panoramic Carousel - Perfectly Centered */}
        <div className="relative w-full overflow-visible cursor-grab active:cursor-grabbing">
          <motion.div 
            className="flex items-center space-x-6 h-[450px] md:h-[650px] px-[10vw]"
            drag="x"
            dragConstraints={{ right: centerOffset, left: -((allImages.length - 1) * (ITEM_WIDTH + GAP)) + centerOffset }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={{ x: xPosition }}
            transition={{ type: "spring", damping: 30, stiffness: 120 }}
          >
            {allImages.map((image, index) => {
              const isActive = carouselIndex === index;
              return (
                <motion.div
                  key={image.id}
                  className={`flex-shrink-0 w-[300px] md:w-[500px] h-[350px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl relative group transition-all duration-700 ${
                    isActive ? "scale-110 opacity-100 z-10" : "scale-85 opacity-40 grayscale-[40%]"
                  }`}
                  onClick={() => {
                    setCarouselIndex(index);
                    handleDragStart(); // Pause on click too
                    resumeTimeoutRef.current = setTimeout(() => setIsAutoPlayPaused(false), 5000);
                  }}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                       <span className="text-white font-serif text-xl">{image.category}</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* View More Button */}
        <div className="max-w-7xl mx-auto px-4 mt-24 flex justify-center">
          <Link
            to="/gallery"
            className="group flex items-center space-x-6 px-12 py-5 bg-[var(--green-dark)] text-white rounded-full hover:bg-[var(--gold)] transition-all shadow-xl hover:-translate-y-1"
          >
            <span className="text-sm uppercase tracking-[0.3em] font-bold">View All Memories</span>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[var(--green-dark)] transition-all">
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
      className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[var(--ivory)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.8 }}
          />
          <motion.h2
            className="text-4xl md:text-5xl text-[var(--green-dark)] font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visual Journey
          </motion.h2>
          <motion.p className="text-lg text-[var(--green-medium)] max-w-3xl mx-auto font-light">
            Capturing the magic and elegance of celebrations at Kanjira's Luxeves Pavilion
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20 px-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-500 ${
                activeCategory === category
                  ? "bg-[var(--gold)] text-[var(--green-dark)] shadow-2xl"
                  : "bg-white/50 backdrop-blur-md text-[var(--green-dark)] hover:bg-[var(--gold)]/20"
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
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] cursor-pointer group rounded-[2.5rem] overflow-hidden shadow-xl"
                onClick={() => setSelectedImage(image)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[var(--green-dark)]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white hover:text-[var(--gold)]"
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
                className="w-full h-auto max-h-[85vh] object-contain rounded-[2rem] shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}