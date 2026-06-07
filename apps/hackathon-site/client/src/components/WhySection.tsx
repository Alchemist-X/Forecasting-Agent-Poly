import { Sparkles, Eye, Target } from "lucide-react";

const reasons = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "复杂推理能力已经超越人类",
    description:
      "Agent 在复杂任务上的推理能力已接近或超过人类水平。人类的优势主要在于更好的信息源，但这一差距可以通过工程能力弥合。",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "覆盖面广且时效性强",
    description:
      "Agent 能 7×24 小时同时监控数千个市场，发现任何个人无法跟踪的定价偏差。新闻爆发时，Agent 能做到秒级响应。",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "预测市场仍处于蓝海",
    description:
      "多数参与者缺乏清晰的定价模型，且普遍畏惧库存管理和逆向选择风险。系统化的 Agent 交易在这些领域面临的竞争极少。",
  },
];

export default function WhySection() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.18em] mb-5">
            Why let agents trade on prediction markets?
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            为什么让 Agent 来接管预测市场的交易？
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative min-h-[300px] rounded-xl border border-white/10 bg-white/[0.025] p-8 md:p-10 backdrop-blur-sm hover:border-primary/35 hover:bg-white/[0.045] transition-all duration-300"
            >
              <div className="flex h-full flex-col items-center justify-center space-y-7 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 text-primary mx-auto">
                  {reason.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {reason.title}
                </h3>
                <p className="text-base text-white/55 leading-relaxed">
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
