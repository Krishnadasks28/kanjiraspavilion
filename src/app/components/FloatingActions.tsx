import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

const actions = [
  { icon: Phone, label: "Call Us", href: "tel:+919995427799", color: "bg-[var(--green-dark)]" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919995427799", color: "bg-[#25D366]" },
  { icon: MapPin, label: "Location", href: "/location", color: "bg-[var(--gold)]" },
];

export function FloatingActions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-24 right-8 z-[60] flex flex-col items-center space-y-4">
      {actions.map((action, index) => {
        const Icon = action.icon;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={action.label}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Label Overlay (Left) */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute right-full mr-4 px-4 py-2 bg-white text-[var(--green-dark)] text-xs font-bold rounded-lg shadow-xl whitespace-nowrap border border-[var(--gold)]/20 pointer-events-none"
                >
                  {action.label}
                  {/* Triangle Arrow */}
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-[var(--gold)]/20" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Button */}
            <motion.a
              href={action.href}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 ${action.color}`}
              whileHover={{ 
                scale: 1.15,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5, type: "spring" }}
            >
              <Icon size={24} className="md:size-28" strokeWidth={1.5} />
            </motion.a>
          </div>
        );
      })}
    </div>
  );
}
