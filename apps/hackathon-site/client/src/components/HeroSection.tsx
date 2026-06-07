import { ArrowRight, GitBranch, Zap } from "lucide-react";
import type { ReactNode } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: ReactNode; suffix?: string }) {
  return (
    <div className="transition-all duration-700 opacity-100 scale-100">
      <div className="text-3xl md:text-4xl font-heading font-bold text-white">
        {target}<span className="text-primary">{suffix}</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/60 via-[#0b0f1a]/40 to-[#0b0f1a]" />
      </div>

      {/* Pulse Line Decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-px overflow-hidden opacity-30">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent pulse-line" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
              <Zap className="w-3 h-3" />
              Forecasting Agent Poly · 预测研究演示
            </div>

            <h1 className="font-heading font-bold text-white leading-[1.08]">
              <span className="block text-[1.8rem] sm:text-[2.1rem] md:text-[2.35rem] lg:text-[2.6rem] text-primary oracle-glow-text">
                能在 Polymarket 上自主交易的预测 Agent
              </span>
              <span className="block mt-3 text-[2.45rem] sm:text-[3rem] md:text-[3.45rem] lg:text-[4rem]">
                Forecasting Agent
              </span>
              <span className="block text-[2.35rem] sm:text-[2.8rem] md:text-[3.15rem] lg:text-[3.55rem] text-white/90">
                Poly
              </span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed max-w-lg">
              Forecasting Agent Poly 针对具体事件生成概率预测研究，并公开关键决策思路与原始信息源，让每次判断都可以被复核、追溯和归档。
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Alchemist-X/Forecasting-Agent-Poly"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium text-sm hover:bg-primary/90 transition-all duration-200 oracle-glow active:scale-[0.97]"
              >
                查看代码
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#preview"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white/80 font-medium text-sm hover:bg-white/10 hover:text-white transition-all duration-200 active:scale-[0.97]"
              >
                <GitBranch className="w-4 h-4" />
                查看流程
              </a>
            </div>

            {/* Stats */}
            <div className="grid gap-6 pt-4 border-t border-white/5 sm:grid-cols-3">
              <div className="space-y-1">
                <AnimatedCounter target="7×24" />
                <p className="text-xs text-white/40 uppercase tracking-wider">持续监控</p>
              </div>
              <div className="space-y-1">
                <AnimatedCounter target={<span className="text-2xl md:text-3xl">可扩展的信息源</span>} />
                <p className="text-xs uppercase tracking-wider">
                  <span className="text-primary">X</span>
                  <span className="text-white/40"> .API</span>
                </p>
              </div>
              <div className="space-y-1">
                <AnimatedCounter target="可审计" />
                <p className="text-xs text-white/40 uppercase tracking-wider">非黑箱建议</p>
              </div>
            </div>
          </div>

          {/* Right - Logo */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl scale-150" />
              <img
                src="/assets/hero-oracle-crystal.png"
                alt="Forecasting Agent Poly 主视觉"
                className="relative w-80 h-80 xl:w-96 xl:h-96 object-cover rounded-[2rem] border border-white/15 animate-float shadow-2xl shadow-primary/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
