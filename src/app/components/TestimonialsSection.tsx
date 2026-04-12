import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Arjun Menon",
    event: "Wedding Reception",
    date: "December 2025",
    location: "Grand Lawn",
    text: "Kanjira's Luxeves Pavilion made our dream destination wedding come true! The backwater setting was absolutely magical, and every detail was perfect. Our 800 guests are still talking about the Grand Lawn ceremony — it was breathtaking.",
    rating: 5,
    avatar: "PA",
  },
  {
    name: "Sarah & James Whitfield",
    event: "Destination Wedding",
    date: "October 2025",
    location: "Celebration Pavilion",
    text: "We flew in from London specifically for a Kerala backwater wedding, and Kanjira's Luxeves Pavilion exceeded every expectation. From the stunning natural beauty to the impeccable service, our destination wedding was stress-free and utterly unforgettable.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Anjali & Rahul Nair",
    event: "Three-Day Wedding Celebration",
    date: "February 2026",
    location: "All Three Venues",
    text: "We hosted our entire three-day wedding celebration here — mehendi in the Intimate Pavilion, the ceremony in the Celebration Pavilion, and the grand reception on the Grand Lawn. Each venue was perfect.",
    rating: 5,
    avatar: "AR",
  },
  {
    name: "Deepa & Vikram Pillai",
    event: "Traditional Kerala Wedding",
    date: "January 2026",
    location: "Grand Lawn",
    text: "For a traditional Kerala wedding with over 600 guests, finding the right outdoor wedding lawn was critical. Kanjira's Luxeves Pavilion was the only venue that matched our vision — backwater views and flawless hospitality.",
    rating: 5,
    avatar: "DV",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextThumbnail = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevThumbnail = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(nextThumbnail, 6000);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="w-16 h-1 bg-accent mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 1 }}
          />

          <motion.h2
            className="text-2xl md:text-4xl text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Happy Clients
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experiences shared by those who chose our backwater destination for their events.
          </motion.p>
        </div>

        {/* Spotlight Carousel */}
        <div className="relative group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                const threshold = 50;
                if (info.offset.x < -threshold) {
                  nextThumbnail();
                } else if (info.offset.x > threshold) {
                  prevThumbnail();
                }
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-lg p-8 md:p-12 shadow-2xl relative border border-[var(--gold)]/10 min-h-[300px] flex flex-col justify-center cursor-grab active:cursor-grabbing"
            >
              <div className="absolute top-10 right-10 opacity-10 text-accent">
                <Quote size={80} strokeWidth={1} />
              </div>

              <div className="flex flex-col items-center text-center">
                {/* Text */}
                <blockquote className="text-xl md:text-2xl text-primary italic leading-relaxed mb-8">
                  "{testimonials[activeIndex].text}"
                </blockquote>

                {/* Profile */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 border-2 border-accent/20">
                    <span className="text-accent font-bold text-xl">{testimonials[activeIndex].avatar}</span>
                  </div>
                  <h4 className="text-xl text-primary tracking-tight">
                    {testimonials[activeIndex].name}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-1">
                    <span>{testimonials[activeIndex].event}</span>
                    <span className="opacity-40">•</span>
                    <span>{testimonials[activeIndex].location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevThumbnail}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white md:bg-transparent rounded-full flex items-center justify-center text-primary hover:text-accent transition-colors shadow-xl md:shadow-none z-10"
          >
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>
          <button
            onClick={nextThumbnail}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white md:bg-transparent rounded-full flex items-center justify-center text-primary hover:text-accent transition-colors shadow-xl md:shadow-none z-10"
          >
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === index ? "w-8 bg-accent" : "w-2 bg-accent/20"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}