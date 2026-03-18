"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Bot,
  BarChart,
  Plug,
  TrendingUp,
  MessageSquare,
  Shield,
  Cloud,
  Zap,
  Check,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Bot,
    title: "Self-Learning Algorithms",
    desc: "Our algorithms utilize advanced reinforcement learning to adapt to your specific business environment without manual retraining.",
  },
  {
    icon: BarChart,
    title: "Real-Time Insights",
    desc: "Get sub-second processing latency on even the most complex data streams, visualized through dynamic, interactive dashboards.",
  },
  {
    icon: Plug,
    title: "Seamless Integrations",
    desc: "One-click connectors for over 200+ popular enterprise tools including Salesforce, Jira, Slack, and Google Workspace.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    desc: "SOC2 Type II compliant infrastructure with end-to-end AES-256 encryption for all data at rest and in transit.",
  },
];

const comparison = [
  {
    item: "AI Recommendation Engine",
    starter: true,
    pro: true,
    enterprise: true,
  },
  {
    item: "Custom Workflow Builder",
    starter: false,
    pro: true,
    enterprise: true,
  },
  { item: "API Access", starter: true, pro: true, enterprise: true },
  {
    item: "Priority Support",
    starter: false,
    pro: "24/7",
    enterprise: "Dedicated",
  },
  { item: "SLA Guarantee", starter: false, pro: false, enterprise: "99.99%" },
  {
    item: "On-Premise Deployment",
    starter: false,
    pro: false,
    enterprise: true,
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SectionLabel>Features Deep-Dive</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-dark leading-none">
            Powering the Next <br />
            <span className="gradient-text">Era of Efficiency</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Explore the advanced technology that makes NeuralEdge the most
            powerful AI automation platform on the market today.
          </p>
        </div>
      </section>

      {/* Feature List */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl bg-bg-light border border-blue-50 shadow-card hover:shadow-strong transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-glow">
                <f.icon size={28} />
              </div>
              <h3 className="text-2xl font-extrabold text-dark mb-4">
                {f.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-6">{f.desc}</p>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-6 bg-bg-light">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold font-heading text-dark mb-4 text-center">
              Compare Capabilities
            </h2>
            <p className="text-gray-500">
              Find the feature set that fits your organizational scope
              perfectly.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-blue-100 shadow-card bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-blue-50">
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                    Feature
                  </th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-primary text-center">
                    Starter
                  </th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-primary text-center">
                    Pro
                  </th>
                  <th className="p-6 text-sm font-bold uppercase tracking-widest text-primary text-center">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-50 last:border-0 hover:bg-bg-light transition-colors"
                  >
                    <td className="p-6 font-bold text-dark">{row.item}</td>
                    <td className="p-6 text-center">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <Check className="mx-auto text-primary" />
                        ) : (
                          <X className="mx-auto text-gray-300" />
                        )
                      ) : (
                        <span className="text-sm font-bold text-gray-400">
                          {row.starter}
                        </span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.pro === "boolean" ? (
                        row.pro ? (
                          <Check className="mx-auto text-primary" />
                        ) : (
                          <X className="mx-auto text-gray-300" />
                        )
                      ) : (
                        <span className="text-sm font-bold text-gray-400">
                          {row.pro}
                        </span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.enterprise === "boolean" ? (
                        row.enterprise ? (
                          <Check className="mx-auto text-primary" />
                        ) : (
                          <X className="mx-auto text-gray-300" />
                        )
                      ) : (
                        <span className="text-sm font-bold text-gray-400">
                          {row.enterprise}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integration Logos */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <SectionLabel>Integrations</SectionLabel>
          <h2 className="text-3xl font-extrabold font-heading mb-16">
            Connects with your favorite tools
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Salesforce",
              "Jira",
              "Slack",
              "Google",
              "AWS",
              "Azure",
              "Hubspot",
              "Zendesk",
              "Trello",
              "Github",
            ].map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-8 py-4 rounded-2xl bg-bg-light border border-blue-50 text-dark font-bold hover:bg-white hover:shadow-card transition-all cursor-default"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
