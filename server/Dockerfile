FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN yarn cache clean && yarn --update-checksums

COPY . .

RUN yarn install

CMD ["yarn", "run", "start"]