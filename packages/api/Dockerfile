FROM node:alpine AS build

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY prisma prisma
COPY package*.json yarn.lock ./
RUN yarn install
# RUN yarn prisma:migrate:up

COPY . .
RUN yarn build
RUN yarn install --production
RUN npm i -g pm2

USER node

ENV NODE_ENV production

ENTRYPOINT [ "pm2-runtime", "dist" ]
