"use client";

import { motion, useReducedMotion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion();

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[90] bg-background pointer-events-none"
        style={{ transformOrigin: "top" }}
        initial={shouldReduce ? false : { scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduce ? 0 : 0.6,
          ease: [0.16, 1, 0.3, 1],
          delay: shouldReduce ? 0 : 0.15,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
