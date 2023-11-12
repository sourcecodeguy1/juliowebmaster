FROM node:16-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn cache clean && yarn --update-checksums
RUN yarn install
COPY . .
RUN ls -al  # Add this line to print the contents of the working directory for debugging
RUN yarn && yarn build

# Stage - Production
FROM nginx:1.17-alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
