'use client'
import { motion } from 'framer-motion'
import { SectionLabel } from './ui/SectionLabel'
import { CreditCard, ShoppingCart, HeartPulse, Settings, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const industries = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce',
    label: 'Personalize, Optimize, Convert',
    desc: 'Enhance shopping experiences with AI recommendation engines and automated inventory management.'
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    label: 'Diagnose, Predict, Heal',
    desc: 'Leverage predictive models for patient outcomes and streamline medical administrative workflows.'
  },
  {
    icon: Settings,
    title: 'Manufacturing',
    label: 'Automate, Maintain, Improve',
    desc: 'Minimize downtime with predictive maintenance and optimize production lines with real-time AI.'
  }
]

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Solutions</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-dark leading-tight">
            Transform Any Industry with <span className="gradient-text">AI-Powered</span> Solutions
          </h2>
        </div>

        {/* Featured Industry: Finance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-bg-light overflow-hidden p-8 md:p-12 mb-12 border border-blue-50 shadow-card group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-2">
                Finance Report
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight">
                Smart, Secure, <br />
                and Profitable.
              </h3>
              <p className="text-gray-500 max-w-md">
                Our finance-focused AI agents automate auditing, fraud detection, and portfolio optimization with unmatched precision and security.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/pricing" className="btn-primary">
                  Compare Plans
                </Link>
                <Link href="#" className="font-bold text-dark hover:text-primary transition-colors flex items-center gap-2 group/link">
                  Learn more <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-strong border border-blue-50 relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary">
                      <CreditCard size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Financial Growth</p>
                      <p className="text-xs text-gray-400">Real-time tracking</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-extrabold text-dark">$89,963</p>
                    <p className="text-xs font-bold text-mint">↑ +120%</p>
                  </div>
                </div>
                {/* Simulated Chart */}
                <div className="flex items-end gap-2 h-32">
                  {[40, 60, 45, 75, 55, 90, 70, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className="flex-1 bg-gradient-to-t from-primary to-primary-light rounded-t-lg"
                    />
                  ))}
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-100 rounded-full blur-2xl -z-0 opacity-50" />
            </div>
          </div>
        </motion.div>

        {/* Other Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-[2rem] border border-blue-50 shadow-card hover:shadow-strong transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white mb-6 shadow-glow">
                <industry.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2">{industry.title}</h4>
              <p className="text-xs font-bold text-primary mb-4 uppercase tracking-wider">{industry.label}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {industry.desc}
              </p>
              <Link href="#" className="font-bold text-dark hover:text-primary transition-colors flex items-center gap-2 group/link text-sm">
                Learn more <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
