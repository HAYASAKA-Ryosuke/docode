FROM node:22
WORKDIR /app
COPY . .
RUN npm install -g pnpm turbo

