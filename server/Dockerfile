FROM node:14-alpine

WORKDIR "/app"
COPY package.json ./
RUN yarn cache clean && yarn --update-checksums
RUN yarn install
COPY . .
EXPOSE 3001
CMD ["yarn", "run", "start"]