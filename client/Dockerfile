FROM node:alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
RUN yarn install
COPY . .
RUN yarn && yarn build

# Stage - Production
FROM nginx:1.17-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
