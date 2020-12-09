FROM node:lts-alpine AS build
WORKDIR /app
COPY package*.json ./
# See https://github.com/node-gfx/node-canvas-prebuilt/issues/77.
RUN apk add --no-cache --virtual .cairo build-base cairo-dev jpeg-dev pango-dev make g++ \
    && npm ci \
    && apk del .cairo
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
