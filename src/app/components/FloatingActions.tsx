import { motion, AnimatePresence } from "motion/react";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const actions = [
  { icon: Phone, label: "Call Us", href: "tel:+919995427799", color: "bg-primary" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919995427799", color: "bg-[#25D366]" },
  { icon: MapPin, label: "Location", href: "/location", color: "bg-accent" },
];

export function FloatingActions() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-24 right-8 z-[60] flex flex-col items-center space-y-3"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
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
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="absolute right-full mr-3 px-3 py-1.5 bg-white text-primary text-xs font-bold rounded-lg shadow-xl whitespace-nowrap border border-accent/20 pointer-events-none"
                    >
                      {action.label}
                      {/* Triangle Arrow */}
                      <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rotate-45 border-r border-t border-accent/20" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Button */}
                <motion.a
                  href={action.href}
                  className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 ${action.color}`}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)"
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </motion.a>
              </div>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
