'use client'
import { motion } from 'framer-motion'
import { Apple, PlayCircle } from 'lucide-react'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative bg-gradient-to-br from-[#0B0E1A] to-[#1A2040] rounded-[3rem] p-12 md:p-20 overflow-hidden isolate shadow-strong">
        
        {/* Glow Sphere */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10" />
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 right-20 w-32 h-32 bg-gradient-to-br from-primary to-primary-light rounded-full shadow-glow -z-10 opacity-50" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight">
              Download Now and Get <br />
              <span className="gradient-text">Started Today!</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-lg">
              Join 10,000+ businesses using NeuralEdge to automate their future and scale faster than ever thought possible.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#" className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-6 py-3 rounded-2xl group">
                <PlayCircle size={32} className="text-primary group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Get it on</p>
                  <p className="text-lg font-bold leading-none">Google Play</p>
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-6 py-3 rounded-2xl group">
                <Apple size={32} className="text-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold text-gray-400 leading-none mb-1">Download on</p>
                  <p className="text-lg font-bold leading-none">App Store</p>
                </div>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-end relative"
          >
            {/* 3D Orb Effect with CSS */}
            <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary to-primary-light p-1 shadow-glow animate-pulse-slow">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center p-8 text-center border-4 border-white/10 overflow-hidden isolate">
                <div className="absolute inset-0 bg-primary/20 blur-2xl" />
                <p className="relative z-10 text-2xl font-extrabold font-heading text-white">Neural<br/>Edge</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
