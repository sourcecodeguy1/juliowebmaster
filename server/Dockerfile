FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN yarn cache clean && yarn --update-checksums

COPY . .

RUN yarn install

EXPOSE 80

CMD ["node", "start"]