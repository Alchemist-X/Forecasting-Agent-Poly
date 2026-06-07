import { Brain, Check, Database, Plug } from "lucide-react";

interface FeatureBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
  image?: string;
  visual?: "evidence";
  reverse?: boolean;
}

function MockEvidenceVisual() {
  return (
    <div className="p-6 md:p-8 min-h-[320px] flex flex-col justify-center">
      <div className="rounded-xl border border-white/10 bg-[#080c16] p-5">
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-heading font-semibold text-white">证据图谱</span>
          <span className="text-xs font-mono text-primary">已归档</span>
        </div>
        <div className="space-y-4">
          {["官方声明", "新闻更新", "X 信号", ".API 来源", "反向证据"].map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${i === 4 ? "bg-amber-300" : "bg-primary"}`} />
              <div className="h-2 flex-1 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={`h-full ${i === 4 ? "bg-amber-300" : "bg-primary"}`}
                  style={{ width: `${76 - i * 12}%` }}
                />
              </div>
              <span className="w-28 text-right text-xs text-white/45">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-lg border border-primary/30 bg-primary/10 p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-xs font-mono font-semibold text-primary">可扩展的信息源</span>
            <span className="text-[10px] uppercase tracking-wider text-white/35">
              <span className="text-primary">X</span> .API
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            xapito 帮助 Agent 把 X 和更多开放来源转成可引用、可归档的证据节点。
          </p>
        </div>
      </div>
    </div>
  );
}

function FeatureBlock({ icon, title, description, points, image, visual, reverse }: FeatureBlockProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Text */}
      <div className={`space-y-6 ${reverse ? "lg:order-2" : ""}`}>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 border border-primary/25 text-primary">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed text-base">
          {description}
        </p>
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <span className="text-white/80 text-sm">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="relative rounded-xl overflow-hidden border border-white/15 bg-[#0d1220]">
            {visual === "evidence" ? (
              <MockEvidenceVisual />
            ) : (
              <img
                src={image}
                alt={title}
                className="w-full h-auto max-h-[420px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const features: FeatureBlockProps[] = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Ribbon Forecasting 决策引擎",
      description:
        "AI 自主评估事件发生概率，动态收集证据，与市场规则和公开信息对齐，输出可解释的概率区间和关键假设。",
      points: [
        "自动扫描并分析数千个预测市场",
        "结合多源证据进行结构化概率评估",
        "输出证据链、反方证据和人工复核提示",
      ],
      image: "/assets/feature-signal.png",
      reverse: false,
    },
    {
      icon: <Plug className="w-6 h-6" />,
      title: "多模型支持，灵活切换",
      description:
        "系统不绑定单一 AI 框架，Codex、Claude Code、OpenClaw 均可无缝接入。仅需修改一行环境变量即可完成模型提供方切换。",
      points: [
        "支持 Claude Code / Codex / OpenClaw 等主流框架",
        "本地端持久化部署，无需云端依赖",
        "极简配置，一行代码完成切换",
      ],
      image: "/assets/feature-provider.png",
      reverse: true,
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "证据图谱与研究归档",
      description:
        "Forecasting Agent Poly 会把新闻、官方公告、市场条款、X 和可扩展开放信息源统一整理为证据图谱。xapito 可以帮助 Agent 接入并结构化这些实时信息，让每次预测都有可追溯的来源和冲突点。",
      points: [
        "采用 X 和 .API 来源追踪一线叙事、KOL 观点和事件更新",
        "高亮 xapito：把可扩展信息源转成可归档的结构化证据节点",
        "记录模型判断、来源摘要、冲突点和版本变化，支持后续复盘",
      ],
      visual: "evidence",
      reverse: false,
    },
  ];

  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Section header */}
      <div className="container mb-16 md:mb-24">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            核心能力
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            预测工作流、证据链和信息源扩展整合在同一套系统中
          </h2>
          <p className="text-white/60 text-lg">
            从市场分析到证据归档，Forecasting Agent Poly 提供完整的自主预测研究闭环。
          </p>
        </div>
      </div>

      {/* Feature blocks */}
      <div className="container space-y-24 md:space-y-32">
        {features.map((feature, i) => (
          <FeatureBlock key={i} {...feature} />
        ))}
      </div>
    </section>
  );
}
