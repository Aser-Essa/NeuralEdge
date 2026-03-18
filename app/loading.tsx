'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-light/80 backdrop-blur-sm">
      <div className="relative w-24 h-24">
        {/* Outer Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-primary/20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Inner Spinner */}
        <motion.div
          className="absolute inset-0 rounded-full border-t-4 border-primary"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Center Glow */}
        <div className="absolute inset-4 rounded-full bg-primary/10 blur-xl animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <h2 className="text-xl font-heading font-bold text-text-primary tracking-tight">
          NEURAL<span className="text-primary">EDGE</span>
        </h2>
        <p className="text-sm text-text-secondary mt-2 font-medium">
          Optimizing Intelligence...
        </p>
      </motion.div>
    </div>
  );
}
