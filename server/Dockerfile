FROM node:14-alpine

# Build-time version (CI will pass APP_VERSION; defaults to 'unknown')
ARG APP_VERSION=unknown
ENV APP_VERSION=${APP_VERSION}

WORKDIR "/app"
COPY package.json ./
COPY yarn.lock ./
#RUN yarn cache clean && yarn --update-checksums
COPY ./ ./
RUN yarn install
EXPOSE 3001
CMD ["yarn", "run", "start"]