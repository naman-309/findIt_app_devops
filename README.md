
# FindIt — Lost & Found Platform

A production-oriented Lost & Found application focused on learning Backend Development, Microservices, System Design, DevOps and AWS.

## 1. Current Project Progress

**Completed / Started**
- Project folder and structure created.
- GitHub repository created and connected.
- Initial code pushed to GitHub.
- React + Vite setup.
- React Router installed.
- Basic Navbar and Home page.
- Browse Items page.
- Report Lost page.
- Report Found page.
- Basic useState implementation started.

**Frontend Status:** Paused. Existing frontend will be preserved and connected to backend later.

## 2. Technology Stack

- **Frontend:** React, Vite
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Authentication:** JWT, bcrypt, HttpOnly Cookies
- **Validation:** Zod
- **API Testing:** Postman
- **Containerization:** Docker, Docker Compose
- **Process Management:** PM2
- **Performance Testing:** k6
- **Monitoring:** Grafana, AWS CloudWatch
- **CI/CD:** GitHub Actions
- **Cloud:** AWS
- **Networking:** Nginx, ALB, API Gateway
- **Caching:** Redis / Valkey

## 3. Development Roadmap

### Phase 1 — Backend Architecture & System Design
- Project architecture design.
- Define responsibilities of two microservices.
- Service communication flow.
- API design documentation.
- Database design and ER diagram.
- Scalability, availability, bottlenecks and caching.

### Phase 2 — Database Design
- Local PostgreSQL setup.
- Users and Items tables.
- Relationships, constraints and indexes.
- Separate schemas and DB users for services.
- Database migrations.

### Phase 3 — Backend Development
- Auth Service and Items Service.
- JWT, bcrypt and HttpOnly cookies.
- Zod validation.
- Global error handling.
- Rate limiting and security.
- Environment configuration.
- Health-check endpoints.

### Phase 4 — API Testing
- Postman collections and environments.
- Registration, login and logout testing.
- Protected API testing.
- Positive and negative test cases.
- Automated API and integration testing.

### Phase 5 — Docker
- Dockerfiles for both services.
- Docker images and containers.
- Docker Compose.
- Container networking and environment variables.
- Persistent database storage.

### Phase 6 — Performance Testing with k6
- Load testing fundamentals.
- Virtual Users (VUs).
- Ramp-up and stages.
- Response time, throughput and error rate.
- Thresholds and performance reports.
- Gradual testing with 10, 50 and 100 users.

### Phase 7 — PM2 & Process Management
- PM2 fundamentals.
- Running Node.js applications.
- Restart policies and logs.
- Cluster mode.
- PM2 vs Docker.

### Phase 8 — GitHub Actions / CI
- Workflow configuration.
- Automated linting and tests.
- Build verification.
- GitHub Actions secrets and permissions.

### Phase 9 — AWS Foundation
- IAM users, roles and policies.
- VPC and public/private subnets.
- Route tables and Internet Gateway.
- Security Groups.
- Networking and security fundamentals.

### Phase 10 — AWS Deployment
- ECR and EC2.
- Deploy both Docker services.
- Nginx reverse proxy.
- AWS Systems Manager (SSM).
- Domain and HTTPS concepts.

### Phase 11 — AWS Database
- RDS PostgreSQL.
- Private database connectivity.
- Security and connection pooling.
- Backups and restore.

### Phase 12 — Load Balancing
- Application Load Balancer.
- Target Groups.
- Health checks.
- Routing traffic to services.

### Phase 13 — Auto Scaling
- Launch Templates.
- Auto Scaling Groups.
- Scaling policies.
- Demand-based scaling.

### Phase 14 — API Gateway
- HTTP API.
- API Gateway concepts.
- VPC Link.
- Connecting API Gateway with internal load balancing.

### Phase 15 — Frontend Integration & Deployment
- Resume existing React frontend.
- Connect frontend with backend APIs.
- Cookies and CORS integration.
- S3 and CloudFront deployment.
- HTTPS and frontend CI/CD.

### Phase 16 — Monitoring & Observability
- CloudWatch metrics, logs and alarms.
- Grafana dashboards.
- CPU, memory, latency and error monitoring.
- Service health and alerting.

### Phase 17 — Caching
- Redis / Valkey.
- Cache-aside pattern.
- TTL and cache invalidation.
- Cache performance and failure handling.
- AWS ElastiCache.

### Phase 18 — Reliability & Recovery
- Controlled-scale k6 testing.
- Database backup and restore.
- Failure scenarios.
- Recovery testing.
- Bottleneck identification.

### Phase 19 — Complete CI/CD
- Backend automated deployment.
- Docker image build and push to ECR.
- EC2 deployment through SSM.
- Frontend deployment to S3.
- CloudFront invalidation.
- Final end-to-end testing.

## 4. Tools & Their Responsibilities

| Tool | Purpose |
|---|---|
| Postman | API testing |
| Grafana | Monitoring dashboards |
| k6 | Load and performance testing |
| PM2 | Node.js process management |
| Docker | Application containerization |
| GitHub Actions | CI/CD automation |
| AWS | Cloud infrastructure |
| Nginx | Reverse proxy |
| Redis / Valkey | Caching |
| PostgreSQL | Database |

**Note:** PM2 and Docker serve different purposes. Docker restart policies can also manage container restarts, so PM2 will be used where appropriate rather than unnecessarily combining both.

## 5. System Architecture

```text
             React Frontend
                (Paused)
                   |
             Nginx / API
               Entry Point
                   |
          -------------------
          |                 |
      Auth Service      Items Service
      Node.js + Express  Node.js + Express
          |                 |
          -------------------
                   |
               PostgreSQL
          Separate Schemas
                   |
          AWS Infrastructure
                   |
       Docker | EC2 | ECR | RDS
       ALB | API Gateway | S3
       CloudFront | CI/CD
       CloudWatch | Grafana
```

## 6. Infrastructure Strategy

- Two independent Node.js microservices.
- Separate Docker containers for both services.
- Initially deploy both services on one EC2 instance.
- PostgreSQL with separate schemas and permissions.
- AWS Mumbai Region: `ap-south-1`.
- Carefully manage resources within the available $100 promotional credit.
- Introduce independent scaling as the project evolves.

## 7. Learning & Development Workflow

Every phase will follow this process:

1. Understand concepts in simple language.
2. Design architecture and understand why it is needed.
3. Implement actual code and configuration.
4. Test using Postman or relevant tools.
5. Document learning and implementation.
6. Move to the next phase.

## 8. Current Next Step

**Phase 1 — Backend Architecture & System Design**

Our immediate focus:

- Define microservices and their responsibilities.
- Design service communication.
- Document API structure.
- Define database boundaries.
- Create database ER diagram.
- Understand scalability, availability, caching and bottlenecks.

---

**Project Goal:** Build FindIt as a production-oriented Lost & Found platform while gaining practical experience in Backend Engineering, Microservices, System Design, Docker, AWS, DevOps and Scalability.
