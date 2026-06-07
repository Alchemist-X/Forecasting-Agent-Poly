import BrandIcon from "./BrandIcon";

const steps = [
  {
    step: "01",
    title: "准备环境",
    command: "帮我启动 Forecasting Agent Poly",
    description: "Agent 会完成依赖安装、类型检查和本地构建，确认演示环境可运行。",
  },
  {
    step: "02",
    title: "选择市场",
    command: "抓取最新的核协议预测市场",
    description: "系统读取市场规则、截止时间、新闻来源和关键实体，建立研究上下文。",
  },
  {
    step: "03",
    title: "生成预测",
    command: "输出概率判断和证据链",
    description: "Agent 生成概率区间、关键证据、反方证据和需要人工复核的风险点。",
  },
  {
    step: "04",
    title: "归档报告",
    command: "保存这次研究记录",
    description: "系统将预测结论、证据摘要、模型版本和运行日志归档，方便后续审计。",
  },
];

export default function QuickStartSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            快速开始
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            四步生成预测研究
          </h2>
          <p className="text-white/60 text-lg">
            通过自然语言与 AI Agent 对话，即可完成从市场选择到可审计报告的完整流程。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="group relative">
              <div className="p-5 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-300 h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BrandIcon className="h-10 w-10" />
                    <span className="text-lg font-mono text-white/30 font-bold">{s.step}</span>
                  </div>
                  <h3 className="text-base font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                  <div className="px-3 py-2.5 rounded-lg bg-[#080c16] border border-white/[0.12]">
                    <code className="text-xs text-primary/90 font-mono leading-relaxed">{s.command}</code>
                  </div>
                  <p className="text-xs text-white/55 leading-relaxed">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
