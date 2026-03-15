import { motion } from "motion/react";

interface FloatingElementsProps {
  count?: number;
  color?: string;
}

export function FloatingElements({
  count = 5,
  color = "var(--gold)",
}: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: element.left,
            top: element.top,
            backgroundColor: color,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: element.delay,
          }}
        />
      ))}
    </div>
  );
}
