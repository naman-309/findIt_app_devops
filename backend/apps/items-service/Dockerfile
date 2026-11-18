
FROM node:22-bookworm-slim

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY apps/items-service/package.json ./apps/items-service/package.json

RUN pnpm install --filter @findit/items-service... --prod --frozen-lockfile

COPY . .

WORKDIR /app/apps/items-service

ENV NODE_ENV=production

EXPOSE 3002

CMD ["pnpm", "start"]
