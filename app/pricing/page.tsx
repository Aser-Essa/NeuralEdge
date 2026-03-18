"use client";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "How does the 14-day free trial work?",
    a: "You can sign up for any plan and use it for 14 days without being charged. We'll send you a reminder 3 days before your trial ends.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes, you can upgrade or downgrade your plan at any time from your dashboard. Changes will be reflected in your next billing cycle.",
  },
  {
    q: "What kind of support do you offer?",
    a: "Starter plan includes community support. Pro plans get priority email support, and Enterprise plans get a dedicated account manager.",
  },
  {
    q: "Do you offer discounts for non-profits?",
    a: "Yes, we offer a 20% discount for registered non-profit organizations. Contact our sales team to apply.",
  },
  {
    q: "Is my data secure with NeuralEdge?",
    a: "Absolutely. We use bank-grade AES-256 encryption and are SOC2 Type II compliant. Your data stays yours.",
  },
  {
    q: "Can I cancel my subscription any time?",
    a: "Yes, there are no long-term contracts for our monthly or annual plans. You can cancel whenever you like.",
  },
];

const plans = [
  {
    name: "Starter",
    monthlyPrice: 120,
    annualPrice: 1200,
    desc: "For individuals and small teams.",
    features: [
      "5 projects",
      "Standard AI",
      "Basic Analytics",
      "Community Support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    monthlyPrice: 260,
    annualPrice: 2600,
    desc: "Advanced tools for growing businesses.",
    features: [
      "Unlimited projects",
      "Advanced AI",
      "Priority Support",
      "Team Management",
      "Custom Workflows",
    ],
    cta: "Get Started Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 480,
    annualPrice: 4800,
    desc: "Full autonomy for large organizations.",
    features: [
      "Custom AI Training",
      "Dedicated Manager",
      "SLA Guarantees",
      "On-Premise Option",
      "API Priority",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SectionLabel>Pricing Plans</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-dark leading-none">
            Fair Pricing for <br />
            <span className="gradient-text">Infinite Potential</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Choose the plan that best scales with your business needs. No hidden
            fees, just pure AI performance.
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-16">
            <span
              className={cn(
                "text-sm font-bold",
                !isAnnual ? "text-dark" : "text-gray-400",
              )}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-gray-200 rounded-full relative p-1 transition-colors hover:bg-gray-300"
            >
              <motion.div
                animate={{ x: isAnnual ? 24 : 0 }}
                className="w-6 h-6 bg-primary rounded-full"
              />
            </button>
            <span
              className={cn(
                "text-sm font-bold",
                isAnnual ? "text-dark" : "text-gray-400",
              )}
            >
              Annual
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">
              SAVE 20%
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-10 rounded-[2.5rem] border transition-all duration-300",
                  plan.highlighted
                    ? "bg-linear-to-br from-primary to-primary-light text-white shadow-strong scale-105 z-10 border-transparent"
                    : "bg-white border-blue-100 text-dark shadow-card",
                )}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold font-heading">
                      $
                      {isAnnual
                        ? Math.round(plan.annualPrice / 12)
                        : plan.monthlyPrice}
                    </span>
                    <span
                      className={cn(
                        "text-sm",
                        plan.highlighted ? "text-white/60" : "text-gray-400",
                      )}
                    >
                      /month
                    </span>
                  </div>
                  <p
                    className={cn(
                      "text-xs mt-2",
                      plan.highlighted ? "text-white/60" : "text-gray-400",
                    )}
                  >
                    Billed {isAnnual ? "annually" : "monthly"}
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check
                        size={18}
                        className={cn(
                          "mt-0.5 shrink-0",
                          plan.highlighted ? "text-white" : "text-primary",
                        )}
                      />
                      <span
                        className={
                          plan.highlighted ? "text-white/90" : "text-gray-600"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={cn(
                    "w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all",
                    plan.highlighted
                      ? "bg-white text-primary hover:bg-white/90"
                      : "border-2 border-primary/20 text-dark hover:bg-primary/5",
                  )}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-bg-light px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl font-extrabold font-heading text-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-blue-50 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="font-bold text-dark">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={20} className="text-primary" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-sm text-gray-500 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
