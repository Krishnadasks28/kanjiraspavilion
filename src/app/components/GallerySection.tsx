import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import Masonry from "react-responsive-masonry";
import { X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const galleryImages = [
  {
    src: "/images/backwater-wedding-pavilion-kerala-kanjiras.webp",
    alt: "Kanjira’s Luxeves Pavilion backwater wedding venue in Thrissur Kerala",
  },
  {
    src: "/images/kanjiras-luxeves-pavilion-bridal-entry-wedding.webp",
    alt: "Destination wedding venue at Kanjira’s Luxeves Pavilion near Thriprayar Thrissur.",
  },
  {
    src: "/images/kanjiras-pavilion-reception-event.webp",
    alt: "Backwater wedding pavilion at Kanjira’s Luxeves Pavilion Kerala",
  },
  {
    src: "/images/kanjiras-pavilion-destination-wedding-venue-thrissur.webp",
    alt: "Wedding lawn at Kanjira’s Luxeves Pavilion Thrissur Kerala",
  },
  {
    src: "/images/kanjiras-luxeves-pavilion-wedding-lawn-thrissur.webp",
    alt: "Luxury backwater wedding venue in Kerala at Kanjira’s Luxeves Pavilion",
  },
  {
    src: "/images/kanjiras-luxeves-pavilion-wedding-reception-area.webp",
    alt: "Wedding ceremony setup with backwater view at Kanjira’s Luxeves Pavilion",
  },
  {
    src: "/images/kanjiras-luxeves-pavilion-mandap-backwater-kerala.webp",
    alt: "Outdoor destination wedding venue at Kanjira’s Luxeves Pavilion Kerala",
  },
  {
    src: "/images/kanjiras-pavilion-evening-wedding-decoration.webp",
    alt: "Evening wedding decoration at Kanjira’s Luxeves Pavilion backwater venue",
  },
];

const galleryImages2 = [
  {
    src: "/images/kanjiras-pavilion-drone-view-backwater-venue.webp",
    alt: "Wedding mandap setup overlooking backwaters at Kanjira’s Luxeves Pavilion",
  },
  {
    src: "/images/kanjiras-pavilion-wedding-ceremony-backwater-view.webp",
    alt: "Scenic backwater destination wedding venue near Thriprayar Thrissur",
  },
  {
    src: "/images/kanjiras-luxeves-pavilion-backwater-wedding-venue-kerala.webp",
    alt: "Aerial drone view of Kanjira’s Luxeves Pavilion backwater wedding venue",
  },
  {
    src: "/images/luxury-backwater-wedding-venue-kerala-kanjiras.webp",
    alt: "Wedding reception setup at Kanjira’s Luxeves Pavilion Thrissur",
  },
  {
    src: "/images/kanjiras-pavilion-luxury-wedding-location-kerala.webp",
    alt: "Luxury waterfront wedding location at Kanjira’s Luxeves Pavilion Kerala",
  },
  {
    src: "/images/kanjiras-pavilion-sunset-backwater-wedding-venue.webp",
    alt: "Bridal entry setup at Kanjira’s Luxeves Pavilion wedding venue",
  },
  {
    src: "/images/kanjiras-luxeves-pavilion-outdoor-wedding-venue.webp",
    alt: "Sunset view of Kanjira’s Luxeves Pavilion backwater wedding venue in Kerala",
  },
  {
    src: "/images/thrissur-backwater-destination-wedding-venue.webp",
    alt: "Destination wedding Thrissur",
  },
  {
    src: "/images/kanjiras-luxeves-pavilion-ear-piercing.webp",
    alt: "Best wedding venue in kerala",
  }
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--ivory)]"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
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
            Gallery
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--green-medium)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Witness the magic of celebrations at our venue
          </motion.p>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >

          {/* Mobile */}
          <Masonry columnsCount={1} gutter="16px" className="md:hidden">
            {galleryImages.map((image, index) => (
              <GalleryItem
                key={index}
                image={image}
                index={index}
                isInView={isInView}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </Masonry>

          {/* Tablet */}
          <Masonry columnsCount={2} gutter="16px" className="hidden md:block lg:hidden">
            {galleryImages2.map((image, index) => (
              <GalleryItem
                key={index}
                image={image}
                index={index}
                isInView={isInView}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </Masonry>

          {/* Desktop */}
          {/* <Masonry columnsCount={3} gutter="16px" className="hidden lg:block">
            {galleryImages2.map((image, index) => (
              <GalleryItem
                key={index}
                image={image}
                index={index}
                isInView={isInView}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </Masonry> */}

        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[var(--gold)]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
          >
            <ImageWithFallback
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

function GalleryItem({ image, index, isInView, onClick }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
      className="cursor-pointer group relative overflow-hidden rounded-lg"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <ImageWithFallback
        src={image.src}
        alt={image.alt}
        className="w-full h-auto rounded-lg"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
          View Image
        </span>
      </div>
    </motion.div>
  );
}