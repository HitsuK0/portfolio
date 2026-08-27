FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm@9

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

EXPOSE 4321

CMD ["pnpm", "dev", "--host"]
