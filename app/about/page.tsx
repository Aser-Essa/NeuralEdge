"use client";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";
import { Linkedin, Rocket, Shield, Users, Zap } from "lucide-react";
import Link from "next/link";

const stats = [
  { target: 2021, label: "Founded", suffix: "" },
  { target: 50000, label: "Active Users", suffix: "+" },
  { target: 120, label: "Countries", suffix: "+" },
  { target: 4.9, label: "User Rating", suffix: "★" },
];

const team = [
  { name: "Alex Rivera", role: "Chief Executive Officer", avatar: "AR" },
  { name: "Sarah Chen", role: "Head of AI Research", avatar: "SC" },
  { name: "Marcus Thorne", role: "Chief Technology Officer", avatar: "MT" },
  { name: "Elena Vance", role: "Lead UI/UX Designer", avatar: "EV" },
  { name: "David Park", role: "Operations Director", avatar: "DP" },
  { name: "Jessica Wu", role: "Customer Success", avatar: "JW" },
];

const values = [
  {
    title: "Innovation",
    desc: "Pushing the boundaries of what AI can achieve every single day.",
    icon: Zap,
  },
  {
    title: "Transparency",
    desc: "Building trust through clear communication and ethical AI practices.",
    icon: Shield,
  },
  {
    title: "Impact",
    desc: "Ensuring our solutions drive real, measurable growth for our partners.",
    icon: Rocket,
  },
  {
    title: "Excellence",
    desc: 'Never settling for "good enough" in our code, design or support.',
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SectionLabel>Our Story</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-dark leading-none">
            We&apos;re on a Mission to <br />
            <span className="gradient-text">Humanize AI</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            NeuralEdge was born out of a simple idea: that AI should be a
            partner, not just a tool. We build intelligent systems that
            understand context, anticipate needs, and empower humans to do their
            best work.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-bg-light text-center border border-blue-50 shadow-xs"
              >
                <p className="text-4xl font-extrabold text-primary mb-2">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </p>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="text-4xl font-extrabold font-heading text-dark">
              Meet the Visionaries
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white p-8 rounded-3xl border border-blue-50 shadow-card flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl shrink-0">
                  {member.avatar}
                </div>
                <div>
                  <h4 className="font-extrabold text-dark leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">{member.role}</p>
                  <a
                    href="#"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionLabel>Our Values</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-8 leading-tight">
                Guided by Principles, <br />
                Driven by <span className="gradient-text">Discovery</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                At NeuralEdge, our culture is defined by a commitment to pushing
                technological boundaries while remaining grounded in
                human-centric design.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary-light mb-4">
                    <v.icon size={20} />
                  </div>
                  <h4 className="font-bold mb-2">{v.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-extrabold font-heading mb-8">
          Ready to see the future?
        </h2>
        <Link href="/pricing" className="btn-primary px-10 py-4">
          View Our Pricing
        </Link>
      </section>
    </div>
  );
}
