FROM node:14-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
#RUN yarn cache clean && yarn --update-checksums
RUN yarn install
COPY . .
RUN yarn && yarn build

# Stage - Production
FROM nginx:1.17-alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
