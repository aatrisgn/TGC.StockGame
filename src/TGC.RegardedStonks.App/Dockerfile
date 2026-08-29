### STAGE 1: BUILD ###
FROM node:22.22-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn ng build --configuration production

### STAGE 2: RUN ###
FROM nginx:latest AS runtime

COPY --from=build /app/wwwroot/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENV RUNTIME_CONFIG_ENV=""

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]
