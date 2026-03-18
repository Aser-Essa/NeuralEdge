'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Bot, ChartBar as BarChart, Plug, TrendingUp, 
  MessageSquare, Shield, Cloud, Zap 
} from 'lucide-react'
import { SectionLabel } from './ui/SectionLabel'

const features = [
  {
    icon: Bot,
    title: 'Self-Learning Algorithms',
    description: 'Continuously improves through real-world data interactions and feedback loops.'
  },
  {
    icon: BarChart,
    title: 'Real-Time Insights',
    description: 'Live data processing and intelligent dashboard analytics for instant decision making.'
  },
  {
    icon: Plug,
    title: 'Seamless API Integration',
    description: 'Connects with your existing tools and workflows effortlessly with one-line integration.'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Anticipate outcomes before they happen with high-accuracy machine learning models.'
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'Understand and generate human language at scale for advanced communication.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance-ready infrastructure for total peace of mind.'
  },
  {
    icon: Cloud,
    title: 'Multi-Cloud Support',
    description: 'Deploy anywhere: AWS, GCP, Azure, or private on-premise infrastructure.'
  },
  {
    icon: Zap,
    title: '24/7 Automation',
    description: 'Never-stop workflows running around the clock without any human input needed.'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Features</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-dark leading-tight">
            The Future of AI Is Here — And <span className="gradient-text">It&apos;s Smarter</span> Than Ever
          </h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-white border border-blue-50 shadow-card transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-glow">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 leading-tight">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {feature.description}
              </p>
              <Link href="/features" className="text-primary text-sm font-bold flex items-center gap-2 group/link">
                Learn more 
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
