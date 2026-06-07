import { Server, Users, Zap } from "lucide-react";

const roadmapItems = [
  {
    icon: <Server className="w-6 h-6" />,
    title: "持久化运行",
    description: "实现 Agent 的 7×24 小时不间断自主运行，无需人工干预。通过完善的监控、自愈和日志系统，确保交易引擎在任何环境下稳定持续执行。",
    status: "In Progress",
    statusColor: "text-amber-300 bg-amber-400/15 border-amber-400/30",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "远端部署与产品化",
    description: "将 Forecasting Agent Poly 从开发者工具转化为用户易用的产品。支持远端一键部署，提供可视化配置面板，让非技术用户也能轻松使用自主交易 Agent。",
    status: "Planned",
    statusColor: "text-blue-300 bg-blue-400/15 border-blue-400/30",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "更高频的交易",
    description: "优化决策引擎的响应速度和执行效率，实现更高频次的交易策略。通过流式数据处理和低延迟执行架构，捕捉更多短期定价偏差带来的机会。",
    status: "Research",
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
            Future Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            后续计划
          </h2>
          <p className="text-white/60 text-lg">
            后续计划保持原有方向：先稳定自主运行，再完成远端部署与产品化，最后提升更高频交易能力。
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
