import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-3">
            <img
              src="/assets/forecasting-agent-poly.svg"
              alt="Forecasting Agent Poly"
              className="w-8 h-8 rounded-lg"
            />
            <div>
              <p className="text-sm font-heading font-semibold text-white">Forecasting Agent Poly</p>
              <p className="text-xs text-white/40">面向预测市场的自主预测研究工作流</p>
            </div>
          </div>

          {/* Center */}
          <p className="text-xs text-white/30">
            用证据链、规则检查和推理归档，让概率研究更透明。
          </p>

          {/* Right */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Alchemist-X/Forecasting-Agent-Poly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Code2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/20">
            &copy; 2026 Forecasting Agent Poly. MIT License. 黑客松研究演示。
          </p>
        </div>
      </div>
    </footer>
  );
}
