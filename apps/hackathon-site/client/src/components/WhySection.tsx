import { Sparkles, Eye, Target } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "把开放信息转成结构化概率",
    description:
      "Agent 将新闻、官方声明、市场条款和时间约束拆解成证据节点，形成可复核的概率判断过程。",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "持续监控高频变化",
    description:
      "系统持续跟踪预测市场、新闻更新和条件变化，在事件发生变化时重新生成研究结论。",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "输出可审计而非黑箱建议",
    description:
      "每次预测都附带证据、冲突点、置信度和风险门槛，方便团队在黑客松演示中解释系统为什么这样判断。",
  },
];

export default function WhySection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            为什么使用自主预测
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            为什么用 Agent 做预测市场研究？
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative p-7 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 text-primary mx-auto">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {reason.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
