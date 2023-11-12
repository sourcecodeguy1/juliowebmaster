FROM node:14-alpine

WORKDIR "/app"
COPY package.json ./
COPY yarn.lock ./
#RUN yarn cache clean && yarn --update-checksums
COPY ./ ./
RUN yarn install
EXPOSE 3001
CMD ["yarn", "run", "start"]