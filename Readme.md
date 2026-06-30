# Know_Me

Personalized quiz platform built to learn Redis, Kafka, AI fundamentals to RAG, LLM self-hosting, AWS cloud management end to end (dev to deploy),System design (Primarily HLD), Docker, and Kubernetes hands-on.

## Goal

Build a working microservices system where a user is interviewed via voice, a self-hosted RAG pipeline generates a personalized quiz, and friends compete on a live leaderboard, deployed through a full CI/CD pipeline on AWS free-tier infrastructure.

## Stack

**Languages & Runtimes:**
- Node.js (auth-svc, realtime-svc, notification-svc)
- Python (conversation-svc, embedding-svc, knowledge-base-svc, quiz-gen-svc, llm-svc)
- Go (quiz-engine-svc)

**Data & Messaging:**
- PostgreSQL + pgvector (vector similarity search)
- Redis (caching, session management)
- Kafka (event streaming)

**AI/ML:**
- Ollama (Qwen2.5 1.5B LLM)
- faster-whisper (Speech-to-Text)
- MiniLM (sentence embeddings)

**Infrastructure & DevOps:**
- Docker (containerization)
- Kubernetes - k3s (orchestration on AWS EC2)
- Terraform (infrastructure as code)
- HashiCorp Vault (secrets management)
- GitLab CI/CD (automated pipelines)
- AWS (EC2, S3, ECR - free-tier only)

## Progress Log

Current development progress and milestones are documented here:

📋 **[View Progress Log](./ProgressLog..md)** 