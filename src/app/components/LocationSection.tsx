import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { MapPin, Navigation, Car } from "lucide-react";

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="location"
      ref={ref}
      className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24">
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
            Our Location in Kerala
          </motion.h2>

          <motion.p
            className="text-lg text-[var(--green-medium)] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Located along the serene banks of the Karuvannur River in Thrissur,
            Kerala, Kanjira's Luxeves Pavilion offers a beautiful backwater
            retreat surrounded by lush coconut groves and tranquil waterways.
            Just minutes away from the sacred Thriprayar Sree Rama Temple, our
            riverside property is an ideal destination for weddings, relaxing
            stays, and private celebrations in Kerala's scenic backwater
            landscape.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[var(--ivory)] p-8 rounded-[2rem] border border-[var(--gold)]/10"
          >
            <div className="w-14 h-14 bg-[var(--gold)]/20 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-[var(--gold)]" size={28} />
            </div>
            <h3 className="text-xl text-[var(--green-dark)] mb-4 font-bold tracking-tight">Address</h3>
            <p className="text-[var(--green-medium)] leading-relaxed">
              Kanjira's Luxeves Pavilion
              <br />
              Opposite to Sree Rama Temple Thripreyar,Thrissur Kerala
              <br />
              India - 680564
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[var(--ivory)] p-8 rounded-[2rem] border border-[var(--gold)]/10"
          >
            <div className="w-14 h-14 bg-[var(--gold)]/20 rounded-full flex items-center justify-center mb-6">
              <Navigation className="text-[var(--gold)]" size={28} />
            </div>
            <h3 className="text-xl text-[var(--green-dark)] mb-4 font-bold tracking-tight">
              Directions
            </h3>
            <p className="text-[var(--green-medium)] leading-relaxed">
              Easy access from major cities
              <br />
              90 min from Kochi Airport.
              <br />
              45 min from Thrissur Railway Station.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[var(--ivory)] p-8 rounded-[2rem] border border-[var(--gold)]/10"
          >
            <div className="w-14 h-14 bg-[var(--gold)]/20 rounded-full flex items-center justify-center mb-6">
              <Car className="text-[var(--gold)]" size={28} />
            </div>
            <h3 className="text-xl text-[var(--green-dark)] mb-4 font-bold tracking-tight">Parking</h3>
            <p className="text-[var(--green-medium)] leading-relaxed">
              Ample parking space
              <br />
              200+ vehicle capacity
              <br />
              Valet service available upon request.
            </p>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-[var(--gold)]/20"
        >
          {/* Google Maps Placeholder */}
          <div className="w-full h-full bg-gradient-to-br from-[var(--green-light)] to-[var(--green-medium)] flex items-center justify-center relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15696.383708907695!2d76.10095944999999!3d10.41395565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f38b1d8ba7e3%3A0xceaa113edf6b9323!2sKANJIRA%E2%80%99S%20LUXEVES%20PAVILION!5e0!3m2!1sen!2sin!4v1773574850715!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location Map"
              className="grayscale-[30%]"
            />
            {/* Map Overlay for styling */}
            <div className="absolute inset-0 pointer-events-none bg-[var(--gold)]/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
