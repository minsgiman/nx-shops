# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
FROM node:20.14.0-alpine
WORKDIR /app

RUN corepack enable && pnpm --version

ARG NEXT_PUBLIC_PHASE
ARG NEXT_PUBLIC_COMMIT_HASH

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY ./dist/apps/cart/package.json ./dist/apps/cart/.npmrc ./
RUN pnpm install
COPY ./dist/apps/cart ./

USER nextjs
EXPOSE 4200
ENV PORT 4200
ENV HOST "0.0.0.0"
ENV NODE_ENV production
ENV NEXT_PUBLIC_PHASE ${NEXT_PUBLIC_PHASE}
ENV NEXT_PUBLIC_COMMIT_HASH ${NEXT_PUBLIC_COMMIT_HASH}

CMD ["node", "--max-old-space-size=1536", "./server/main.js"]
