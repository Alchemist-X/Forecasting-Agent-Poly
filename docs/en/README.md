# Forecasting Agent Poly

> English README. 中文版见 [README.md](../../README.md).

Forecasting Agent Poly is an autonomous forecasting agent for prediction markets. It turns market rules, news, official statements, X narratives, and extensible `.API` sources into auditable probability research. Each run preserves the evidence, assumptions, reasoning path, and final output so the result can be reviewed later.

Project site: [https://hackathon-site-murex.vercel.app](https://hackathon-site-murex.vercel.app)

Repository: [https://github.com/Alchemist-X/Forecasting-Agent-Poly](https://github.com/Alchemist-X/Forecasting-Agent-Poly)

## One-Line Design

`event question -> research plan -> multi-source evidence -> evidence graph -> probability model -> policy checks -> research archive -> web display`

The goal is not to output a single Yes/No number. The agent should answer:

- What exactly does the Polymarket event resolve on?
- Which evidence supports the event, and which evidence argues against it?
- Where did every piece of evidence come from, and when was it published?
- Why does a new claim move probability up or down?
- How does the agent estimate compare with market pricing?
- Is the conclusion strong enough, or should it be marked for human review?

## Why Forecasting Agents

Prediction-market research is an information-flow problem. One event can depend on market terms, official sources, news timing, social narratives, policy signals, and breaking incidents. Humans can reason deeply, but they cannot monitor many events continuously or write a complete audit trail quickly after every update.

Forecasting Agent Poly makes the workflow more systematic:

1. **Coverage**: monitor many candidate markets and information sources.
2. **Speed**: reorganize evidence and update probabilities after new information appears.
3. **Explainability**: tie probability changes to concrete evidence.
4. **Extensibility**: swap data sources, model providers, and execution modes.
5. **Archival quality**: produce structured research artifacts instead of black-box advice.

## Architecture

```mermaid
flowchart TD
  user["User / Scheduler / CLI"] --> intake["Event Intake<br/>market question and resolution rules"]
  intake --> planner["Research Planner<br/>key nodes and search queries"]
  planner --> sources["Source Collectors<br/>official sources / news / Polymarket / X / .API"]
  sources --> graph["Evidence Graph<br/>source, time, stance, confidence, conflicts"]
  graph --> model["Probability Model<br/>conditional decomposition and Bayesian updates"]
  model --> policy["Policy Checks<br/>source quality, event boundary, opposition, confidence"]
  policy --> archive["Research Archive<br/>reports, JSON, logs, screenshots, website"]
  policy --> action["Decision Adapter<br/>read-only / paper / optional execution interface"]
  archive --> site["Hackathon Site<br/>Chinese explanation and run examples"]
```

The architecture uses a `Market Pulse -> Decision Runtime -> Risk / Policy -> Archive / UI` layering, while the hackathon presentation focuses on the research-first version: explain where the probability comes from before deciding whether to do anything with it.

## Core Components

### 1. Event Intake

Prediction markets often hide ambiguity in their resolution rules: what counts as an agreement, who can speak for a party, which source resolves the market, and how the deadline is interpreted. The agent starts by converting a natural-language question into a resolution-aligned research target:

- event text and market link
- deadline
- resolution rule
- key entities and aliases
- boundary cases that could create disagreement

This prevents the model from researching a question that does not match the market.

### 2. Research Planner

Instead of searching one broad question, the agent breaks an event into smaller research nodes.

For a nuclear-agreement market, the system might ask:

- What counts as an agreement?
- Is there credible evidence of active negotiation?
- Are key decision-makers sending positive or negative signals?
- Have official institutions published written commitments or denials?
- Do sanctions, military activity, or domestic politics reduce the probability?
- Which source will the market use for final resolution?

### 3. Source Collectors

Forecasting Agent Poly uses an extensible source layer rather than one fixed API.

Current design targets:

- **Polymarket**: title, rules, price, comments, and resolution information.
- **Official sources**: government statements, institutional releases, legal or regulatory files, project announcements.
- **News sources**: mainstream, specialist, and regional media.
- **X**: real-time narratives, journalist updates, KOL views, and party statements.
- **`.API` / xapito**: helps the agent connect to X and open information sources, then transform live narratives into structured evidence nodes.

xapito does not make the final call. Its role is to help turn scattered real-time information into claims the agent can cite, score, compare, and archive.

### 4. Evidence Graph

Collected information is normalized into evidence nodes:

| Field | Meaning |
| --- | --- |
| `source` | source type and URL |
| `timestamp` | publication or retrieval time |
| `claim` | what the evidence says |
| `stance` | supporting, opposing, or neutral |
| `weight` | source quality, recency, and relevance |
| `confidence` | reliability estimate |
| `conflicts` | conflicting evidence |

This lets reviewers check whether the evidence is real, whether the weight is reasonable, and whether the reasoning follows.

### 5. Probability Model

The system decomposes complex events into conditional probabilities instead of guessing one number:

```text
P(Yes) = P(A) x P(B | A) x P(C | A and B)

A = both sides keep an active negotiation path
B = the text includes market-recognized key terms
C = there is public confirmation accepted by the resolution source before deadline
```

When new evidence appears, the agent explains which node it affects:

- Official statements supporting continued talks mainly raise `P(A)`.
- Military escalation or sanction signals may reduce `P(A)` or `P(B | A)`.
- Credible draft details may raise `P(B | A)`.
- Strict market-resolution rules may limit `P(C | A and B)`.

### 6. Policy Checks

Before producing a conclusion, the system checks:

- whether the event definition is clear
- whether enough independent sources were cited
- whether opposing evidence was recorded
- whether sources conflict
- whether market rules are being confused with real-world interpretation
- whether probability updates are traceable to evidence
- whether the output should be marked for human review

This turns the answer into a research artifact rather than a black-box model opinion.

### 7. Decision Adapter

Forecasting Agent Poly supports several usage modes:

- **Read-only research**: output probability, evidence, and market-pricing comparison without execution.
- **Paper flow**: test the decision and archive structure without live execution.
- **Optional execution interface**: when the user explicitly configures the environment, passes preflight, and accepts the risk, research output can be handed to the execution layer.

The hackathon presentation emphasizes read-only research and reviewable archives.

## Repository Map

| Path | Purpose |
| --- | --- |
| `apps/hackathon-site` | Chinese hackathon website with project positioning, features, workflow, run examples, and Future Plans |
| `apps/web` | Fuller run-result display and admin interface |
| `services/orchestrator` | research inputs, candidate processing, probability decisions, policy checks, report artifacts |
| `services/executor` | Polymarket connectivity, order interface, execution-layer risk checks, and state sync |
| `packages/contracts` | shared schemas and type contracts |
| `packages/db` | database schema, query helpers, and local-state fallback |
| `packages/terminal-ui` | terminal output, progress display, error summaries, and tables |
| `scripts` | workspace-level entry points for research, recommendation, testing, and execution flows |
| `runtime-artifacts` | local archive directory for reports, JSON, summaries, checkpoints, and errors |
| `docs` | architecture diagrams, run notes, demo script, and supporting docs |

## Main Paths

### Research / Recommendation

```bash
pnpm pulse:recommend
```

Generates read-only research and candidate recommendations. This is the safest path for demos, debugging, and human review.

### Paper Flow

```bash
pnpm trial:recommend
pnpm trial:approve
```

Validates the research, decision, and archive flow without live execution.

### Hackathon Site

```bash
pnpm --filter @autopoly/hackathon-site dev
pnpm --filter @autopoly/hackathon-site build
pnpm --filter @autopoly/hackathon-site typecheck
```

The public hackathon page is deployed on Vercel:

```text
https://hackathon-site-murex.vercel.app
```

### Live Path Note

The repository still contains live-oriented entry points such as `pnpm daily:pulse` and `pnpm pulse:live`. They require real environment variables, preflight, and explicit authorization. This README does not treat them as the default hackathon demo path; use read-only research or paper flow for presentation.

## Artifacts

A complete research run usually preserves:

- market question and resolution rule
- source list: news, official statements, Polymarket, X, `.API`
- evidence graph: supporting, opposing, neutral, conflicts
- probability breakdown: baseline, conditional probabilities, update path
- policy checks: source gaps, review flags, uncertainty
- final output: agent probability, market pricing, difference explanation
- web presentation for judges and collaborators

## Model Providers

The system is not tied to a single agent framework:

```bash
AGENT_RUNTIME_PROVIDER=codex
AGENT_RUNTIME_PROVIDER=claude-code
AGENT_RUNTIME_PROVIDER=openclaw
```

Providers assist reasoning, but the evidence structure, policy checks, archive format, and execution constraints stay in the engineering layer whenever possible.

## Hackathon Materials

4-minute video script:

```text
docs/hackathon-submission-video-script.md
```

Published project site:

```text
https://hackathon-site-murex.vercel.app
```

## Development Commands

Install dependencies:

```bash
pnpm install
```

Build all packages:

```bash
pnpm build
```

Typecheck all packages:

```bash
pnpm typecheck
```

Run the hackathon site locally:

```bash
pnpm --filter @autopoly/hackathon-site dev
```

## Design Principles

1. **Evidence before probability**: a number without an evidence chain should not be treated as a strong conclusion.
2. **Rules before event interpretation**: prediction must match the market's resolution rule.
3. **Archive before presentation**: every important judgment should leave reviewable material.
4. **Read-only before execution**: research and execution are separated; the default demo does not need live execution.
5. **Replaceable components**: sources, model providers, web display, and execution modes can all be swapped.
