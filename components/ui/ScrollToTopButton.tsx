"use client";

import { motion, animate } from "framer-motion";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    // Custom spring-based smooth scroll using Framer Motion
    const scrollY = window.scrollY;
    
    animate(scrollY, 0, {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.5,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      whileHover={{ y: -2, color: "var(--color-primary)" }}
      whileTap={{ scale: 0.95 }}
      className="text-xs font-semibold flex items-center gap-2 text-text-secondary transition-colors cursor-pointer group"
    >
      Back to Top{" "}
      <motion.span 
        className="text-primary"
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        ↑
      </motion.span>
    </motion.button>
  );
}
