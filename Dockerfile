FROM node:alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
COPY . ./
RUN yarn && yarn build

# Stage - Production
FROM nginx:1.17-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/*
COPY ./website.conf /etc/nginx/conf.d/website.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
