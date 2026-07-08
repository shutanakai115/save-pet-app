# Build stage
FROM node:24-alpine AS builder

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

COPY package.json ./
RUN pnpm install

COPY tsconfig.json ./
COPY src ./src
RUN pnpm build && pnpm prune --prod

# Production stage
FROM node:24-alpine AS production

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

ENV NODE_ENV=production
ENV PORT=8080

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

USER appuser

EXPOSE 8080

CMD ["node", "dist/index.js"]
