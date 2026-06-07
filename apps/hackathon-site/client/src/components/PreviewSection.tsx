import { Activity, ExternalLink, GitBranch } from "lucide-react";

const traceLines = [
  { label: "市场扫描", value: "已规范化 12 个候选预测市场" },
  { label: "证据抓取", value: "已汇总新闻、官方来源与 Twitter/X 信号，xapito 负责结构化接入" },
  { label: "预测生成", value: "输出概率区间和反方证据" },
  { label: "规则检查", value: "对不确定结论附加复核门槛" },
  { label: "归档写入", value: "保存推理轨迹供演示复查" },
];

export default function PreviewSection() {
  return (
    <section id="preview" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            工作流预览
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            一次预测运行的推理轨迹
          </h2>
          <p className="text-white/60 text-lg">
            演示页面聚焦研究流水线、推理轨迹、规则检查和最终归档的预测报告。
          </p>
        </div>

        {/* Terminal Preview */}
        <div className="relative group max-w-5xl mx-auto">
          {/* Glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Terminal frame */}
          <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#0d1117]">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs text-white/50 ml-3 font-mono">forecasting-agent-poly — 研究运行</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />
                <span className="text-xs text-primary font-mono font-medium">演示轨迹</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
              <div className="p-5 md:p-7 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="space-y-3 font-mono">
                  {traceLines.map((line, i) => (
                    <div key={line.label} className="grid grid-cols-[auto_1fr] gap-4 rounded-lg bg-white/[0.03] border border-white/10 px-4 py-3">
                      <span className="text-xs text-white/35">0{i + 1}</span>
                      <div>
                        <p className="text-sm text-primary">{line.label}</p>
                        <p className="text-xs text-white/55 mt-1">{line.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 md:p-7">
                <div className="rounded-xl border border-white/10 bg-[#080c16] p-5 h-full">
                  <p className="text-xs uppercase tracking-wider text-white/35 mb-4">预测报告</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-white mb-2">问题</p>
                      <p className="text-sm text-white/55 leading-relaxed">
                        某个外交事件是否会在截止时间前满足预测市场的判定条件？
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3">
                        <p className="text-xs text-white/35 mb-1">输出</p>
                        <p className="text-sm text-white">概率区间</p>
                      </div>
                      <div className="rounded-lg bg-white/[0.04] border border-white/10 p-3">
                        <p className="text-xs text-white/35 mb-1">状态</p>
                        <p className="text-sm text-white">需要复核</p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-primary/10 border border-primary/20 p-3">
                      <p className="text-xs text-primary mb-1">推理轨迹</p>
                      <p className="text-xs text-white/55 leading-relaxed">
                        证据显示事件有进展，但官方文本和市场判定规则仍存在不确定性。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="https://github.com/Alchemist-X/Forecasting-Agent-Poly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/15 text-sm text-white/80 hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-200"
          >
            <GitBranch className="w-4 h-4" />
            代码仓库
          </a>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/[0.05] border border-white/15 text-sm text-white/80 hover:text-white hover:bg-white/10 hover:border-primary/30 transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            查看流程
          </a>
        </div>
      </div>
    </section>
  );
}
