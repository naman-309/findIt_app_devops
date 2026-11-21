
FROM node:22-bookworm-slim

WORKDIR /app

RUN corepack enable

# Copy workspace configuration
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy Auth Service package configuration
COPY apps/auth-service/package.json ./apps/auth-service/package.json

# Install production dependencies for Auth Service
RUN pnpm install --filter @findit/auth-service... --prod --frozen-lockfile

# Copy project source code
COPY . .

# Switch to Auth Service directory
WORKDIR /app/apps/auth-service

ENV NODE_ENV=production

EXPOSE 3001

CMD ["pnpm", "start"]
