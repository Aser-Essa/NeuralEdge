'use client'
import { motion } from 'framer-motion'
import { SectionLabel } from './ui/SectionLabel'
import { FileUp, Bell as BellCheck, ToggleRight } from 'lucide-react'

const steps = [
  {
    number: "01",
    title: "Upload your data",
    description: "Connect your data sources or upload files. Our AI ingests and indexes everything securely.",
    icon: FileUp,
    mockup: (
      <div className="mt-8 p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
        <div className="flex flex-col items-center justify-center py-6 gap-2">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-primary">
            <FileUp size={24} />
          </div>
          <p className="text-[10px] font-bold text-gray-400">Drag & drop files here</p>
          <div className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
            <motion.div 
              animate={{ width: ['0%', '100%'] }} 
              transition={{ duration: 3, repeat: Infinity }}
              className="h-full bg-primary" 
            />
          </div>
        </div>
      </div>
    )
  },
  {
    number: "02",
    title: "Get actionable insights",
    description: "Our AI processes information and delivers specific, high-value recommendations in real-time.",
    icon: BellCheck,
    mockup: (
      <div className="mt-8 space-y-3">
        {[1, 2].map(i => (
          <div key={i} className="p-3 bg-white rounded-xl border border-blue-50 shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-mint">
              <BellCheck size={16} />
            </div>
            <div className="flex-1">
              <div className="h-2 w-20 bg-gray-100 rounded-full mb-1" />
              <div className="h-1.5 w-full bg-gray-50 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    number: "03",
    title: "Automate & optimize",
    description: "Approve the recommendations and let our agents handle the tasks autonomously.",
    icon: ToggleRight,
    mockup: (
      <div className="mt-8 p-4 bg-white rounded-2xl border border-blue-50 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-bold text-dark">Auto-Pilot Mode</span>
          <div className="w-10 h-5 bg-primary rounded-full relative">
            <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-1.5 w-full bg-gray-100 rounded-full" />
          <div className="h-1.5 w-[80%] bg-gray-100 rounded-full" />
        </div>
      </div>
    )
  }
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-dark leading-tight">
            Understanding How It Works <span className="gradient-text">Step by Step</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-primary/20 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-white text-xl font-bold shadow-glow mb-8">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
              
              <div className="w-full max-w-[280px]">
                {step.mockup}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
