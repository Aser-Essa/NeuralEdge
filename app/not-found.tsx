"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, BrainCircuit, Zap } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-6"
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />

        {/* Composition */}
        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-2"
          >
            <Zap className="w-20 h-20 text-primary drop-shadow-[0_0_15px_rgba(79,110,247,0.5)]" />
          </motion.div>

          <div className="relative h-[160px] flex items-center justify-center">
            <h1 className="text-[140px] md:text-[180px] font-black leading-none tracking-tighter text-text-primary/5 select-none font-heading italic">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-bold font-heading gradient-text drop-shadow-sm">
                Lost?
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="max-w-md"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
          Intelligence Gap Detected
        </h2>
        <p className="text-text-secondary text-lg mb-10 leading-relaxed px-4">
          The node you&apos;re looking for doesn&apos;t exist in our network.
          <br className="hidden md:block" />
          Let&apos;s redirect your request back to safety.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 md:px-0">
          <Link href="/" className="btn-primary group w-full sm:w-64">
            <Home className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 rounded-full border border-gray-200 font-semibold text-text-primary hover:bg-gray-50 transition-all flex items-center group w-full sm:w-auto justify-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>
      </motion.div>

      {/* Grid Overlay matching theme */}
      <div
        className="fixed inset-0 -z-50 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(var(--primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
