# Forecasting Agent Poly 4-Minute Demo Script

目标时长：约 4 分钟  
提交形式：录屏 + 口播  
项目名称：Forecasting Agent Poly

## 0:00-0:25 Opening

画面：打开官网首页，停在 hero 区。

口播：
大家好，我们的项目是 Forecasting Agent Poly。它是一个面向预测市场的自主 forecasting agent。核心目标不是展示账户成绩，而是把新闻、市场规则和公开证据转化为可审计的概率研究流程。

## 0:25-0:55 Problem

画面：滚动到 Why 区域。

口播：
预测市场的问题是信息变化非常快，市场规则又经常有细节差异。人工很难持续追踪大量事件，也很难在短时间内解释一个概率判断到底来自哪些证据。我们的系统把这个过程拆成结构化证据、反方证据、置信度和人工复核条件。

## 0:55-1:35 Solution

画面：滚动到 Features 区域，展示 Ribbon Forecasting 和多模型支持。

口播：
Forecasting Agent Poly 的第一层是 Ribbon Forecasting。它会读取市场条款、新闻和官方来源，生成候选事件和初步概率判断。第二层是多模型 runtime，我们可以切换 Codex、Claude Code 或 OpenClaw，让不同模型在同一个结构化框架里运行。

## 1:35-2:15 Evidence And Guardrails

画面：继续展示证据归档和规则约束卡片。

口播：
每次 forecast 都会记录输入来源、关键假设、证据冲突和模型输出。系统还会执行规则约束：如果事件定义不清楚、来源质量不足，或者证据冲突过高，它不会给出过度确定的结论，而是标记为需要人工复核。

## 2:15-2:55 Architecture

画面：滚动到 Architecture 区域。

口播：
架构上，我们把流程分成四层。Research 层负责抓取市场和证据；Decision 层把上下文转化为结构化 forecast；Policy 层检查来源质量、事件边界和置信度；最后 State 和 UI 层归档研究过程，并把结果展示给评委或团队成员复查。

## 2:55-3:30 Demo Flow

画面：滚动到 Workflow Preview 和 Quick Start。

口播：
这里是一次 forecast run 的示例。系统会扫描候选市场，抓取证据，生成概率区间，然后执行规则检查并写入归档。实际使用时，我们只需要用自然语言告诉 Agent 要研究哪个事件，它就能完成从市场选择到研究报告的流程。

## 3:30-4:00 Closing

画面：回到首页或 GitHub 按钮。

口播：
总结一下，Forecasting Agent Poly 是一个透明、可复核、可扩展的预测研究 agent。它适合黑客松场景，因为评委不仅能看到最终结论，也能看到结论背后的证据、规则和运行轨迹。谢谢。
