import { Server, Users, Zap } from "lucide-react";

const roadmapItems = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "持续研究运行",
    description: "让 Agent 以稳定的后台任务持续刷新市场上下文、新闻证据和预测归档。",
    status: "进行中",
    statusColor: "text-amber-300 bg-amber-400/15 border-amber-400/30",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "多人复核工作台",
    description: "提供评委和团队成员可查看的证据视图、冲突标记、人工确认和版本对比。",
    status: "计划中",
    statusColor: "text-blue-300 bg-blue-400/15 border-blue-400/30",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "更快的事件响应",
    description: "接入流式新闻、链上信号和市场变化事件，在关键条件变化时触发重新评估。",
    status: "研究中",
    statusColor: "text-purple-300 bg-purple-400/15 border-purple-400/30",
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 md:py-32 relative">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-3">
            路线图
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            后续计划
          </h2>
          <p className="text-white/60 text-lg">
            我们的下一步探索是把 Forecasting Agent Poly 做成可信、可复核、可扩展的预测研究基础设施。
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {roadmapItems.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/15 text-primary">
                    {item.icon}
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
