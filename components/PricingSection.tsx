"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "./ui/SectionLabel";
import { Check, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    name: "Starter Plan",
    price: "1,200",
    desc: "Perfect for small teams and startups.",
    features: [
      "5 active projects",
      "Core AI features",
      "Basic analytics",
      "Standard automation",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
    dark: false,
  },
  {
    name: "Pro Plan",
    price: "2,600",
    desc: "The complete AI toolkit for growing businesses.",
    badge: "MOST POPULAR",
    features: [
      "Unlimited projects",
      "Advanced AI models",
      "Priority support",
      "Enhanced analytics",
      "5 team members",
      "Custom workflows",
    ],
    cta: "Compare Plan",
    highlighted: true,
    dark: false,
  },
  {
    name: "Enterprise Plan",
    price: "4,800",
    desc: "For large organizations needing full control.",
    features: [
      "Unlimited everything",
      "Full AI autonomy",
      "Dedicated manager",
      "SLA guarantees",
      "Custom security",
      "On-premise option",
    ],
    cta: "Get Started",
    highlighted: false,
    dark: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-dark leading-tight">
            Choose the <span className="gradient-text">Perfect Plan</span> for
            Your Needs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={cn(
                "relative p-10 rounded-[2.5rem] border transition-all duration-300",
                plan.highlighted
                  ? "bg-linear-to-br from-primary to-primary-light text-white shadow-strong scale-105 z-10 border-transparent"
                  : plan?.dark
                    ? "bg-white border-gray-800 text-dark shadow-card"
                    : "bg-white border-blue-100 text-dark shadow-card",
              )}
            >
              {plan.badge && (
                <div className="absolute  top-0 left-1/2 backdrop-blur-md -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-accent-yellow text-dark text-[10px] font-bold tracking-widest shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-glow",
                    plan.highlighted
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary",
                  )}
                >
                  <Zap size={24} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={cn(
                    "text-sm mb-6",
                    plan.highlighted ? "text-white/80" : "text-gray-400",
                  )}
                >
                  {plan.desc}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold font-heading">
                    ${plan.price}
                  </span>
                  <span
                    className={cn(
                      "text-sm",
                      plan.highlighted ? "text-white/60" : "text-gray-400",
                    )}
                  >
                    /year
                  </span>
                </div>
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
                href="/pricing"
                className={cn(
                  "w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all",
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : plan?.dark
                      ? "bg-dark text-white hover:bg-dark/90"
                      : "border-2 border-primary/20 text-dark hover:bg-primary/5",
                )}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/pricing"
            className="text-sm font-bold text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group"
          >
            Compare all features{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
