FROM node:22.12.0-slim

RUN apt update && apt install openssl procps -y

RUN npm install -g pnpm

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]