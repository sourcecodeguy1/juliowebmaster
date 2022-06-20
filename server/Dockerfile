FROM node:alpine

WORKDIR /app

COPY ../server/package*.json ./

RUN yarn cache clean && yarn --update-checksums

COPY ../server ./

RUN yarn install

EXPOSE 80

CMD ["yarn", "run", "start"]