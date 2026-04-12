import { motion } from "motion/react";

const stats = [
  { label: "Events Hosted", value: "50+" },
  { label: "Happy Guests", value: "30k+" },
  { label: "Guest Capacity", value: "2000+" },
  { label: "Parking Capacity", value: "200+" },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-secondary px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center p-8 bg-white rounded-lg shadow-xl border border-accent/10"
            >
              <div className="text-3xl md:text-5xl font-serif text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
