FROM node:alpine

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn cache clean && yarn --update-checksums
RUN yarn install
COPY ./ ./
EXPOSE 3001
CMD ["yarn", "run", "start"]