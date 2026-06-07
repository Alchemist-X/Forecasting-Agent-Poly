import { ArrowDown, Brain, Database, Search, ShieldCheck } from "lucide-react";

const stageOneSteps = [
  {
    step: "01",
    title: "理清定义",
    body: "先把预测市场的问题边界说清楚：什么算达成协议，核协议如何判定，谁能代表伊朗作出有效承诺。",
  },
  {
    step: "02",
    title: "基础推理",
    body: "把大问题拆成可验证的关键节点，并为每个节点生成搜索 query，避免 Agent 只做笼统新闻摘要。",
  },
  {
    step: "03",
    title: "证据收集与罗列",
    body: "并行收集官方声明、主流媒体、第三方分析、政治动态和军事动态，形成证据图谱的原始节点。",
  },
  {
    step: "04",
    title: "证据权重更新",
    body: "按来源可信度、发布时间、与市场判定条件的相关性给每条证据打分，并保留可复查归档。",
  },
];

const evidenceSources = [
  "官方声明：白宫、国务院、伊朗国家安全委员会",
  "主流媒体：路透社、伊朗国家电视台",
  "第三方分析：智库、X、.API、Reddit",
  "政治动态：国会、政治人物、外交谈判",
  "军事动态：World Monitor、军事地图、地区安全事件",
];

const stageTwoSteps = [
  {
    step: "05",
    title: "建立概率模型",
    body: "把事件拆成条件概率：外交协议达成、协议实质包含核条款、仲裁人判定概率，并得到 Base Yes = 29.25%。",
  },
  {
    step: "06",
    title: "结合证据做贝叶斯更新",
    body: "负面军事事件会压低概率，积极谈判信号会抬高概率；Agent 逐条记录证据、影响方向和更新幅度。",
  },
  {
    step: "07",
    title: "输出结论并对比市场定价",
    body: "最终输出可解释概率 P=22%，再与 Polymarket 6 月 5 日约 30% 的市场定价比较，判断是否存在偏差。",
  },
];

function StageImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-x-auto rounded-xl border border-white/15 bg-white p-2">
      <img
        src={src}
        alt={alt}
        className="h-auto min-w-[720px] rounded-md md:min-w-0 md:w-full"
      />
    </figure>
  );
}

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            运行示例
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
            从问题到市场信号的完整推理流程
          </h2>
          <p className="text-lg leading-relaxed text-white/60">
            以“美国和伊朗能否在 6.30 前达成核协议”为例，Forecasting Agent Poly 会先澄清判定条件，再构建证据图谱，最后用概率模型和证据更新输出可审计结论。
          </p>
        </div>

        <div className="mx-auto mb-12 grid max-w-5xl gap-3 md:grid-cols-4">
          {[
            { icon: <Search className="h-4 w-4" />, title: "定义问题", body: "明确市场判定条件" },
            { icon: <Database className="h-4 w-4" />, title: "收集证据", body: "新闻、官方源、X、.API" },
            { icon: <Brain className="h-4 w-4" />, title: "概率建模", body: "拆分条件概率" },
            { icon: <ShieldCheck className="h-4 w-4" />, title: "输出归档", body: "结论、依据、市场偏差" },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/15 text-primary">
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/50">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-6xl space-y-8">
          <article className="grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="p-1">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary">Stage 1</p>
                    <h3 className="mt-2 text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                      从用户问题到证据图谱
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">
                    Input → Evidence
                  </span>
                </div>

                <div className="space-y-4">
                  {stageOneSteps.map((item) => (
                    <div key={item.step} className="grid grid-cols-[2.5rem_1fr] gap-4 border-l border-white/10 pl-4">
                      <span className="font-mono text-xs text-primary">{item.step}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="mb-3 text-sm font-semibold text-white">证据来源会被结构化成可追溯节点</p>
                  <div className="space-y-2">
                    {evidenceSources.map((source) => (
                      <p key={source} className="text-sm leading-relaxed text-white/60">
                        {source}
                      </p>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg border border-primary/30 bg-primary/10 p-4">
                    <p className="text-xs font-mono font-semibold text-primary">xapito</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      帮助 Agent 接入 X 和 .API 等开放信息源，把即时叙事、KOL 观点和事件更新转成可归档的证据节点。
                    </p>
                  </div>
                </div>
              </div>

              <StageImage src="/assets/run-stage-1.png" alt="Stage 1 运行示例：问题定义、证据收集和权重更新" />
          </article>

          <div className="flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40">
              <ArrowDown className="h-5 w-5" />
            </div>
          </div>

          <article className="grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="p-1">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary">Stage 2</p>
                    <h3 className="mt-2 text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                      从概率模型到市场偏差
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50">
                    Model → Signal
                  </span>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-wider text-white/35">条件概率拆解</p>
                  <p className="mt-2 text-base font-semibold text-white">
                    P(Yes) = P(A) × P(B | A) × P(C | A ∩ B)
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    示例中 Base Yes = 45% × 65% × 100% = 29.25%，之后再让新证据持续更新这个基线。
                  </p>
                </div>

                <div className="mt-5 space-y-4">
                  {stageTwoSteps.map((item) => (
                    <div key={item.step} className="grid grid-cols-[2.5rem_1fr] gap-4 border-l border-white/10 pl-4">
                      <span className="font-mono text-xs text-primary">{item.step}</span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-primary/25 bg-primary/10 p-4">
                    <p className="text-xs uppercase tracking-wider text-primary">Agent 估计</p>
                    <p className="mt-2 text-3xl font-bold text-white">22%</p>
                    <p className="mt-1 text-xs text-white/50">保留证据、公式、更新路径</p>
                  </div>
                  <div className="rounded-lg border border-amber-400/25 bg-amber-400/10 p-4">
                    <p className="text-xs uppercase tracking-wider text-amber-300">市场定价</p>
                    <p className="mt-2 text-3xl font-bold text-white">30%</p>
                    <p className="mt-1 text-xs text-white/50">用于判断是否存在定价偏差</p>
                  </div>
                </div>
              </div>

              <StageImage src="/assets/run-stage-2.png" alt="Stage 2 运行示例：建模、贝叶斯更新和市场定价对比" />
          </article>
        </div>
      </div>
    </section>
  );
}
