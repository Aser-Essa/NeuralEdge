"use client";
import Link from "next/link";
import {
  Zap,
  Twitter,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: "Home",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Solution",
      links: [
        { name: "AI Tools", href: "/features" },
        { name: "Automation", href: "/features" },
        { name: "Analytics", href: "/features" },
        { name: "API", href: "/features" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Docs", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-dark text-gray-400 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-white">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="text-xl font-extrabold font-heading tracking-tight text-white">
                Neural<span className="text-primary">Edge</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Empowering global businesses with next-generation AI agents and
              intelligent automation systems that think ahead.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-primary" />
                <span>hello@neuraledge.ai</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-primary" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            © {currentYear} NeuralEdge. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs font-semibold flex items-center gap-2 hover:text-white transition-colors"
          >
            Back to Top <span className="text-primary">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
