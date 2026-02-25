# Rhye Gacillos — Full-Stack AI Portfolio

Production-oriented AI applications with LLM integration, tool orchestration, and reliability guardrails.  
Live demos, architecture diagrams, and one-page summaries are linked below.

**Stack:** FastAPI · Next.js/React · TypeScript · AWS · Terraform · Redis · MCP · Observability (OpenTelemetry/Sentry)

---

## Projects

### 1) Digital Assistant (Agentic AI) — Serverless on AWS
Serverless AI assistant with tool orchestration (search, PDF export, email, uploads) and user-approved memory.

- Async execution (API + worker) for tool-heavy jobs
- Daily usage quotas/guardrails with real-time counters
- Observability: OpenTelemetry exported to Sentry
- AWS: Lambda, API Gateway, S3, CloudFront, ECR; IaC via Terraform

**Live:** https://digital-assistant.agentairg.site/  
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

**Live:** https://ideagen.agentairg.site/  
**One-pager:** /assets/ideagen/onepager.pdf  
**Architecture:** /assets/ideagen/architecture.png  

---

### 3) Autonomous Agentic Trader — Multi-Agent Trading Simulation
Production-style multi-agent trading simulation with MCP tool boundaries and resilience guardrails.  
Research/education simulation; not financial advice.

- 4 trader personas running scheduled trade/rebalance cycles
- Tool-gated execution via MCP (accounts/trades/prices/research/memory)
- Resilience: layered pricing fallback + trade blocking on missing/invalid prices
- AWS deployment automation (ECR/EC2) via Terraform + GitHub Actions (OIDC)

**Live:** https://autonomous-trader.agentairg.site/  
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

**Live:** https://medinotes.agentairg.site/  
**One-pager:** /assets/medinotes/onepager.pdf  
**Architecture:** /assets/medinotes/architecture.png  

---

## Notes on Source Code
These projects are deployed publicly, but the primary implementation repositories are private (security and production configuration).  
Architecture diagrams, one-pagers, and live demos are provided here. Code samples can be shared upon request.

---

## Contact
- LinkedIn: https://www.linkedin.com/in/rhyegacillos/
- Email: gacillos.rhye@gmail.com
