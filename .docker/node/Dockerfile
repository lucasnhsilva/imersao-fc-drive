FROM node:22.12.0-slim

RUN apt update && \
    apt install openssl procps -y && \
    npm install -g pnpm && \
    npm install -g @nestjs/cli@10.4.5

USER node

WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]