"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Play, TrendingUp } from "lucide-react";
import Link from "next/link";
import PhoneMockup from "./PhoneMockup";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-32 pb-16">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-light/10 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/20 rounded-full blur-3xl" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4F6EF7 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 animate-bounce-slow">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">
              🤖 AI-Powered Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-tight text-dark">
            AI Empowering <span className="gradient-text">Your Business</span>{" "}
            with Smart Automation
          </h1>

          <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
            NeuralEdge provides next-generation AI agents that seamlessly
            integrate into your workflow, making intelligent decisions that
            scale your potential.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary px-8 py-4 text-lg">
              Join Now
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-8 py-4 text-lg font-bold border-2 border-primary/20 rounded-full hover:bg-primary/5 transition-all group"
            >
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Play size={12} fill="currentColor" />
              </div>
              Watch Demo
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-4">
            {[
              { label: "10K+ Users", value: "Active daily" },
              { label: "98% Score", value: "Satisfaction" },
              { label: "Enterprise Ready", value: "Verified" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-mint">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">{stat.label}</p>
                  <p className="text-xs text-gray-400">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Main Phone */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="z-10"
          >
            <PhoneMockup />
          </motion.div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -top-10 -right-4 md:right-0 bg-white p-4 rounded-2xl shadow-strong border border-blue-50 z-20 max-w-[200px]"
          >
            <div className="flex items-center gap-3">
              <div className="!w-10  p-1   aspect-square  rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold">
                MK
              </div>
              <div>
                <p className="text-xs font-bold leading-tight">
                  Hi Mark, I&apos;ve optimized your schedule.
                </p>
                <p className="text-[10px] text-gray-400">Just now</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-8 -left-4 md:left-0 bg-white p-4 rounded-2xl shadow-strong border border-blue-50 z-20"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-mint">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-mint">↑ 120%</p>
                <p className="text-[10px] text-gray-400">Performance</p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
