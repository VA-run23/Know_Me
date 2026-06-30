Day 00: During my exam days
Actually there are many day 0s. I actually get a unique and very different project ideas during my exams. 
So instead of jumping into the project development, i notes down each and every feature ideas in a notepad and discussed with my friend about its feasibility. Got a positive response. Starting feedback loop even before the actual development.



Day 01: 30-06-2026
Explored development strategy and locked the architecture before writing any code.

- Defined the core product flow: voice-based conversational interview → personal knowledge base → AI-generated personalized quiz → friends/family attempt it with a live leaderboard.
- Designed a true RAG pipeline (not fine-tuning, not retrieval-as-output): MiniLM for embeddings, pgvector for retrieval, Qwen2.5 1.5B via Ollama for generation. Decided to self-host everything, no third-party AI APIs in the core system.
- Finalized the microservices breakdown (9-10 services, polyglot: Node.js, Python, Go) and confirmed independent deployability still counts as real microservice architecture even inside a monorepo.
- Worked out git strategy: ruled out nested git repos (gitlinks don't propagate commits), settled on a single monorepo with per-service GitLab CI path-based triggers instead.
- Stress-tested the AWS cost plan line by line: confirmed EKS, RDS, ElastiCache, ALB, and NAT Gateway all break free-tier assumptions, replaced with self-managed k3s on a single free-tier EC2 instance, self-hosted Postgres/Redis/Kafka, Nginx Ingress, and public-subnet security groups instead.
- Decided LLM and STT stay laptop-hosted during development (Ollama + faster-whisper), tunneled to AWS-deployed services via Tailscale Funnel, never deployed to EC2 directly. Cloud LLM/TTS (Groq, AWS Polly) reserved only for live demo days.
- Produced first-pass system design artifacts: tech stack doc, microservices doc (with dev vs. production cost columns), and 5 Mermaid diagrams (system architecture, API sequence flow, user flow, state diagram, event flow) covering HLD.
- Drafted a 20-day build timeline (3 hrs/day, +3 optional learning hrs) targeting a fully working local system with CI/CD running on every commit by day 20, AWS live deploy and voice I/O pushed into a 5-day buffer.
- Set up project scaffolding decisions: file structure, `.gitignore` rules, MIT license, and a daily-updated README to track progress in public.

Next: first commit, repo init, GitLab CI skeleton, auth-svc scaffold.