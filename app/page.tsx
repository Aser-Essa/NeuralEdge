import HeroSection from '@/components/HeroSection'
import FeaturesGrid from '@/components/FeaturesGrid'
import HowItWorks from '@/components/HowItWorks'
import AIToolsShowcase from '@/components/AIToolsShowcase'
import IndustriesSection from '@/components/IndustriesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <AIToolsShowcase />
      <IndustriesSection />
      <TestimonialsSection />
      <PricingSection />
      <CTABanner />
    </>
  )
}
