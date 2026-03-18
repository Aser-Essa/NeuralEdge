'use client'
import { motion } from 'framer-motion'
import { SectionLabel } from './ui/SectionLabel'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    platform: "Fiverr",
    platformColor: "bg-green-100 text-green-700",
    quote: "Real-Time Progress Tracking. Super productive with AI. Automatically organizes, prioritizes, and streamlines my workflow completely. Highly recommended for any serious PM.",
    name: "Emma Brooks",
    role: "Product Manager",
    avatar: "EB",
    avatarBg: "bg-purple-200 text-purple-700"
  },
  {
    platform: "Upwork",
    platformColor: "bg-blue-100 text-blue-700",
    quote: "Seamless Task Management - Improve efficiency by 200% using AI automation. Automatically assigns, tracks, and prioritizes tasks effectively. A game changer for our ops team.",
    name: "Ethan Harris",
    role: "Operations Lead",
    avatar: "EH",
    avatarBg: "bg-orange-200 text-orange-700"
  },
  {
    platform: "LinkedIn",
    platformColor: "bg-sky-100 text-sky-700",
    quote: "Simplify your day with smart scheduling and automated insights that adjust priorities for maximum efficiency and improved results. The best AI tool we've used this year.",
    name: "Ella Leblanc",
    role: "CEO, TechStart",
    avatar: "EL",
    avatarBg: "bg-pink-200 text-pink-700"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-dark leading-tight">
            What Our <span className="gradient-text">Happy Clients</span> Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-[2rem] border border-blue-50 shadow-card hover:shadow-strong transition-all duration-300 relative group"
            >
              <div className={cn(
                "absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                t.platformColor
              )}>
                {t.platform}
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-accent-yellow" fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic mb-8">
                &quot;{t.quote}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-bold",
                  t.avatarBg
                )}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-dark">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
