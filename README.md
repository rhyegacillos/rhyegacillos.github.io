# Rhye Gacillos — Full-Stack AI Portfolio

Production-oriented AI applications with LLM integration, tool orchestration, automation operations, and reliability guardrails.
Architecture diagrams and one-page summaries are linked below.

**Stack:** FastAPI · Next.js/React · TypeScript · AWS · Terraform · Redis · MCP · Automation (Shopify, Make, AppSheet, AppScript, n8n) · Observability (OpenTelemetry/Sentry)

---

## Projects

### 1) Digital Assistant (Agentic AI) — Serverless on AWS
Serverless AI assistant with tool orchestration (search, PDF export, email, uploads) and user-approved memory.

- Async execution (API + worker) for tool-heavy jobs
- Daily usage quotas/guardrails with real-time counters
- Observability: OpenTelemetry exported to Sentry
- AWS: Lambda, API Gateway, S3, CloudFront, ECR; IaC via Terraform

**One-pager:** /assets/digital-assistant/onepager.pdf  
**Architecture:** /assets/digital-assistant/architecture.png  

---

### 2) IdeaGen — Agentic Multi-Model Decision Platform
Multi-step workflow that turns LLM ideation into decision-grade outputs:
Generate → Compare → Decision Summary → Execution Plan.

- Multi-provider LLM routing with fallback chains
- Persistence for runs/comparisons/reports + artifact lifecycle
- PDF/email exports for stakeholder-ready deliverables
- Guardrails: structured outputs, validation/retries, quotas, caching, snapshot durability

**One-pager:** /assets/ideagen/onepager.pdf  
**Architecture:** /assets/ideagen/architecture.png  

---

### 3) Autonomous Agentic Trader — Multi-Agent Trading Simulation
Production-style multi-agent trading simulation with MCP tool boundaries, Redis cycle caching, optional n8n research workflows, and resilience guardrails.
Research/education simulation; not financial advice.

- 4 trader personas running scheduled trade/rebalance cycles
- Tool-gated execution via MCP (accounts/trades/prices/research/memory)
- Redis/Upstash pre-warm for price, news, event-risk, and research briefs
- Optional n8n producer for heavy research fan-out while portfolio-control remains in-app
- Resilience: strict Alpaca -> Polygon quote authority + trade blocking on missing/invalid prices
- AWS deployment automation (ECR/EC2) via Terraform + GitHub Actions (OIDC)

**One-pager:** /assets/autonomous-trader/onepager.pdf  
**Architecture:** /assets/autonomous-trader/architecture.png  

---

### 4) MediNotes — Agentic Clinical Documentation Platform
Agentic healthcare documentation app with multimodal intake, evidence-linked summaries, and a scoped chat assistant.

- SSE streaming with resumable jobs (reconnect support)
- Critic QA loop + evidence mapping to source context
- Persistent critic-derived format guardrails to improve summary quality over time
- RAG memory + scoped chat (bounded to patient visit summaries + consultation context)
- AWS: Dockerized deployment via ECR + App Runner

**One-pager:** /assets/medinotes/onepager.pdf  
**Architecture:** /assets/medinotes/architecture.png  

---

## Automation Operations

Recent private-client operations automation work. Client and product details are intentionally omitted; the summaries focus on the workflow and the business problem solved.

- **Warehouse Inventory Sync:** connected order scanning, proof capture, completion status, and inventory updates so warehouse staff can run one clear workflow instead of chasing several tools.
- **B2B Account Import Tool:** gave operators a spreadsheet-based import flow with validation, preview, row-level results, and safe re-runs instead of manual account setup.
- **Procurement Reorder Dashboard:** brought sales, stock, open orders, lead times, item mappings, and forecast logic into one dashboard for reorder decisions.
- **Shipping Manifest Automation:** created printable daily carrier handoff manifests from shipping records, with PDF storage, operator notification, history, and hold/restore controls.
- **Local Pickup Notification Flow:** connected warehouse pickup-ready state to customer messages, with tags and stop conditions to avoid duplicate or incorrect reminders.

---

## Notes on Source Code
The primary implementation repositories are private (security and production configuration).  
Architecture diagrams and one-pagers are provided here. Code samples can be shared upon request.

---

## Contact
- LinkedIn: https://www.linkedin.com/in/rhyegacillos/
- Email: gacillos.rhye@gmail.com
