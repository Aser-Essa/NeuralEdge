"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const tools = [
  "Personalized AI Recommendations",
  "Smart Scheduling & Automated Workflows",
  "Real-Time Business Intelligence",
  "Predictive Customer Analytics",
  "Automated Lead Scoring",
  "Intelligent Content Generation",
];

export default function AIToolsShowcase() {
  return (
    <section className="py-24 bg-linear-to-br from-[#0B0E1A] to-[#1A2040] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-primary/20 text-primary-light border border-primary/30 mb-6">
              AI Tools
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-8 leading-tight">
              Top AI Tools to Boost <br />
              <span className="gradient-text">Business Efficiency</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-lg">
              Our suite of intelligent tools is designed to handle the heavy
              lifting, allowing your team to focus on high-level strategy and
              growth.
            </p>

            <ul className="space-y-4">
              {tools.map((tool, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-glow">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-gray-200 font-medium">{tool}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xs"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">
                    Coming Soon: AI Voice Agents
                  </h4>
                  <p className="text-sm text-gray-400">
                    Natural sounding voice agents that can handle customer
                    support and sales calls autonomously.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 dark shadow-strong rounded-[3rem]">
              <PhoneMockup />
            </div>

            {/* Floating Metric */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 -right-8 bg-mint text-dark font-bold px-4 py-2 rounded-xl shadow-lg z-20 flex items-center gap-2"
            >
              <Zap size={16} fill="currentColor" />
              +84% AUTOMATED
            </motion.div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 rounded-full blur-[100px] z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
