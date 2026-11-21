
# 1. Use Node.js as the base image
FROM node:22-bookworm-slim

# 2. Set working directory inside container
WORKDIR /app

# 3. Enable pnpm
RUN corepack enable

# 4. Copy workspace configuration files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# 5. Copy Auth Service package configuration
COPY apps/auth-service/package.json ./apps/auth-service/package.json

# 6. Install Auth Service production dependencies
RUN pnpm install --filter @findit/auth-service... --prod --frozen-lockfile

# 7. Copy project files
COPY . .

# 8. Set Auth Service working directory
WORKDIR /app/apps/auth-service

# 9. Set production environment
ENV NODE_ENV=production

# 10. Auth Service port
EXPOSE 3001

# 11. Start Auth Service
CMD ["pnpm", "start"]
