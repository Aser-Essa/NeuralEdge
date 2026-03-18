"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll get back to you soon.", {
        style: {
          borderRadius: "16px",
          background: "#0B0E1A",
          color: "#fff",
        },
      });
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div>
              <SectionLabel>Contact Us</SectionLabel>
              <h1 className="text-5xl md:text-6xl font-extrabold font-heading text-dark leading-tight mt-6">
                Let&apos;s Build the <br />
                <span className="gradient-text">Next Frontier</span> Together
              </h1>
              <p className="text-lg text-gray-500 mt-6 leading-relaxed">
                Have a question about our enterprise solutions? Want to schedule
                a demo? Our team is ready to help you navigate the AI
                revolution.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-dark">Email Us</p>
                  <p className="text-gray-500">hello@neuraledge.ai</p>
                  <p className="text-gray-500">support@neuraledge.ai</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-mint shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-dark">Call Us</p>
                  <p className="text-gray-500">+1 (555) 123-4567</p>
                  <p className="text-gray-500">Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-50 flex items-center justify-center text-accent-yellow shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-dark">Visit Us</p>
                  <p className="text-gray-500">
                    123 AI Plaza, Innovation District
                  </p>
                  <p className="text-gray-500">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="font-bold text-dark mb-4">Follow Our Progress</p>
              <div className="flex items-center gap-4">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-2xl bg-bg-light border border-blue-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400 shadow-sm"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-blue-50 shadow-strong relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-0" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-bg-light border border-blue-50 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-bg-light border border-blue-50 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="NeuralEdge Inc."
                  className="w-full px-6 py-4 rounded-2xl bg-bg-light border border-blue-50 focus:border-primary outline-none transition-all placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400  uppercase tracking-widest px-1">
                  Plan of Interest
                </label>
                <select
                  defaultValue="Pro Plan"
                  className="w-full px-6 py-4 rounded-2xl bg-bg-light border border-blue-50 focus:border-primary outline-none transition-all text-gray-500"
                >
                  <option>Starter Plan</option>
                  <option>Pro Plan</option>
                  <option>Enterprise / Custom</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help your business?"
                  className="w-full px-6 py-4 rounded-2xl bg-bg-light border border-blue-50 focus:border-primary outline-none transition-all placeholder:text-gray-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-5 text-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
