import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PageLoaderProps {
  isLoading?: boolean;
}

export function PageLoader({ isLoading: controlledIsLoading }: PageLoaderProps = {}) {
  const [internalIsLoading, setInternalIsLoading] = useState(true);

  useEffect(() => {
    if (controlledIsLoading !== undefined) return;

    // Simulate page load
    const timer = setTimeout(() => {
      setInternalIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [controlledIsLoading]);

  const showLoader = controlledIsLoading !== undefined ? controlledIsLoading : internalIsLoading;

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-50 bg-primary flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo/Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl text-primary-foreground mb-4 font-serif">
              Kanjiras Luxeves Pavilion
            </h1>
            <div className="w-24 h-px bg-accent mx-auto mb-4" />
            <p className="text-secondary-foreground text-lg italic font-serif">
              Loading your dream venue...
            </p>
          </motion.div>

          {/* Animated Loading Bar */}
          <motion.div
            className="w-48 h-1 bg-white/20 rounded-full mt-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
