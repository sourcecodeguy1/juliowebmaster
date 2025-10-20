FROM node:20-alpine as build

WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
# Install only production dependencies; extend network timeout to avoid transient registry errors
RUN yarn install --frozen-lockfile --production=true --network-timeout 600000
COPY . .
RUN yarn build

# Stage - Production
FROM nginx:1.17-alpine
WORKDIR /usr/src/app
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
