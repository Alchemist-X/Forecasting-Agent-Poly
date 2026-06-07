# Forecasting Agent Poly

Forecasting Agent Poly 是一个面向 Polymarket 的自主预测 Agent。它针对具体事件生成概率预测研究，并公开关键决策思路与原始信息源，让每次判断都可以被复核、追溯和归档。

项目网页：
[https://hackathon-site-murex.vercel.app](https://hackathon-site-murex.vercel.app)

代码仓库：
[https://github.com/Alchemist-X/Forecasting-Agent-Poly](https://github.com/Alchemist-X/Forecasting-Agent-Poly)

## 核心想法

预测市场的定价依赖大量开放信息：官方公告、新闻报道、市场规则、X 上的一线叙事、KOL 观点，以及可扩展的 `.API` 来源。人工很难持续跟踪这些信息，也很难在短时间内解释一个概率判断来自哪些证据。

Forecasting Agent Poly 把这个流程拆成可复查的研究链路：

1. 明确事件定义和市场判定条件。
2. 拆分关键问题，并为每个节点设计搜索 query。
3. 收集新闻、官方来源、X 和 `.API` 等开放信息源。
4. 为证据建立图谱，记录来源、时间、摘要、冲突点和置信度。
5. 构建条件概率模型，并根据新证据持续更新判断。
6. 输出概率结论、推理路径和市场定价对比。

## 为什么让 Agent 来接管预测市场的交易？

### 复杂推理能力已经超越人类

Agent 在复杂任务上的推理能力已经接近或超过人类水平。人类的优势主要在于更好的信息源，但这一差距可以通过工程能力弥合。

### 覆盖面广且时效性强

Agent 能 7×24 小时同时监控数千个市场，发现个人无法持续跟踪的定价偏差。新闻爆发时，Agent 可以在极短时间内完成信息整理和概率更新。

### 预测市场仍处于蓝海

多数参与者缺乏清晰的定价模型，且普遍畏惧库存管理和逆向选择风险。系统化的 Agent 交易在这些领域仍有很大的探索空间。

## 证据图谱与研究归档

项目重点不是只给出一个概率数字，而是把概率背后的证据链公开出来。一次研究会保存：

- 原始问题和市场判定规则
- 信息源列表，包括新闻、官方公告、X 和 `.API`
- 证据摘要、反方证据和冲突点
- 条件概率拆解和更新路径
- Agent 的最终概率判断
- 与市场价格之间的差异

`xapito` 可以帮助 Agent 接入 X 和更多开放信息源，把实时叙事、KOL 观点和事件更新转成结构化证据节点。

## 项目网页

黑客松网页位于 `apps/hackathon-site`，使用 Vite + React + Tailwind CSS 构建。

本地启动：

```bash
pnpm --filter @autopoly/hackathon-site dev
```

构建：

```bash
pnpm --filter @autopoly/hackathon-site build
```

类型检查：

```bash
pnpm --filter @autopoly/hackathon-site typecheck
```

## 站点结构

主要页面组件：

| 路径 | 说明 |
| --- | --- |
| `apps/hackathon-site/client/src/components/HeroSection.tsx` | 首页主视觉和项目定位 |
| `apps/hackathon-site/client/src/components/WhySection.tsx` | 为什么让 Agent 接管预测市场交易 |
| `apps/hackathon-site/client/src/components/FeaturesSection.tsx` | 核心能力和证据归档 |
| `apps/hackathon-site/client/src/components/ArchitectureSection.tsx` | Stage 1 / Stage 2 运行示例 |
| `apps/hackathon-site/client/src/components/PreviewSection.tsx` | 一次预测运行的推理轨迹 |
| `apps/hackathon-site/client/src/components/RoadmapSection.tsx` | Future Plans |

## 提交材料

4 分钟视频录制脚本在：

```text
docs/hackathon-submission-video-script.md
```

网页发布在 Vercel，当前固定入口：

```text
https://hackathon-site-murex.vercel.app
```
