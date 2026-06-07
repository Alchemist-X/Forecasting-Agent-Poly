import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "介绍", href: "#hero" },
    { label: "能力", href: "#features" },
    { label: "流程", href: "#architecture" },
    { label: "演示", href: "#preview" },
    { label: "路线图", href: "#roadmap" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f1a]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <img
            src="/assets/forecasting-agent-poly.svg"
            alt="Forecasting Agent Poly"
            className="w-9 h-9 rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-heading font-bold text-lg text-white tracking-tight">
            Forecasting Agent Poly
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Alchemist-X/Forecasting-Agent-Poly"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            <Code2 className="w-4 h-4" />
            查看代码
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-white"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0b0f1a]/95 backdrop-blur-xl border-t border-white/5">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/70 hover:text-white py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/Alchemist-X/Forecasting-Agent-Poly"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 w-fit"
            >
              <Code2 className="w-4 h-4" />
              查看代码
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
