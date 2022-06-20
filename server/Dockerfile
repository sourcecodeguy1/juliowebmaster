FROM node:alpine

WORKDIR /app

COPY package*.json ./app

RUN yarn cache clean && yarn --update-checksums

COPY . ./app

RUN yarn install

EXPOSE 80

CMD ["yarn", "run", "start"]