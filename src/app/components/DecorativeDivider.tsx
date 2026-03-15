import { motion } from "motion/react";

interface DecorativeDividerProps {
  variant?: "gold" | "green";
}

export function DecorativeDivider({ variant = "gold" }: DecorativeDividerProps) {
  const color = variant === "gold" ? "var(--gold)" : "var(--green-medium)";

  return (
    <div className="flex items-center justify-center py-8">
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-px" style={{ backgroundColor: color }} />
        <div className="relative">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <div
            className="absolute inset-0 w-3 h-3 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: color }}
          />
        </div>
        <div className="w-16 h-px" style={{ backgroundColor: color }} />
      </motion.div>
    </div>
  );
}
