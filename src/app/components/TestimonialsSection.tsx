import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

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
    text: "We hosted our entire three-day wedding celebration here — mehendi in the Intimate Pavilion, the ceremony in the Celebration Pavilion, and the grand reception on the Grand Lawn. Each venue was perfect. The combination of tradition and luxury is truly unmatched in Kerala!",
    rating: 5,
    avatar: "AR",
  },
  {
    name: "Deepa & Vikram Pillai",
    event: "Traditional Kerala Wedding",
    date: "January 2026",
    location: "Grand Lawn",
    text: "For a traditional Kerala wedding with over 600 guests, finding the right outdoor wedding lawn was critical. Kanjira's Luxeves Pavilion was the only venue that matched our vision — backwater views, tropical greenery, and flawless hospitality.",
    rating: 5,
    avatar: "DV",
  },
  {
    name: "Meera & Thomas Abraham",
    event: "Intimate Engagement Ceremony",
    date: "November 2025",
    location: "Intimate Pavilion",
    text: "The Intimate Pavilion was the perfect setting for our engagement ceremony. Surrounded by lush gardens with views of the backwaters, it felt like a private paradise. The team was incredibly attentive and made every moment special.",
    rating: 5,
    avatar: "MT",
  },
  {
    name: "Riya & Aditya Kumar",
    event: "Destination Wedding & Reception",
    date: "March 2026",
    location: "Celebration Pavilion",
    text: "Planning a destination wedding in Kerala from Mumbai felt daunting, but the team at Kanjira's Luxeves Pavilion handled everything with grace. The venue coordination, catering, and floral arrangements were all beyond world-class.",
    rating: 5,
    avatar: "RA",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--ivory)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Love Stories at Our Venue
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--green-medium)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hundreds of couples have celebrated their special day at Kanjira's Luxeves Pavilion, Kerala's most beloved destination wedding venue. Here's what they say about their experience.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="text-white" size={20} />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[var(--gold)] text-[var(--gold)]"
                  />
                ))}
              </div>

              {/* Location Badge */}
              <span className="inline-block text-xs px-3 py-1 bg-[var(--gold)]/10 text-[var(--gold)] rounded-full mb-4 self-start">
                📍 {testimonial.location}
              </span>

              {/* Testimonial Text */}
              <p className="text-[var(--green-medium)] mb-6 leading-relaxed italic flex-1">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-[var(--gold)]/20 pt-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-[var(--green-dark)] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[var(--gold)] text-xs">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="text-[var(--green-dark)] text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--green-medium)]">
                    {testimonial.event}
                  </p>
                  <p className="text-xs text-[var(--green-medium)]/60 mt-0.5">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="text-4xl text-[var(--gold)] mb-2">500+</p>
            <p className="text-[var(--green-medium)]">Celebrations Hosted</p>
          </div>
          <div className="text-center">
            <p className="text-4xl text-[var(--gold)] mb-2">5 Star</p>
            <p className="text-[var(--green-medium)]">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl text-[var(--gold)] mb-2">100%</p>
            <p className="text-[var(--green-medium)]">Couple Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl text-[var(--gold)] mb-2">15+</p>
            <p className="text-[var(--green-medium)]">Years of Excellence</p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}