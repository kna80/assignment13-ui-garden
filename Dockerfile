# Stage 1: Build React application
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Serve production build
FROM nginx:alpine

WORKDIR /kaur_khushdeep_ui_garden_build_checks

COPY --from=build /app/build /usr/share/nginx/html

RUN sed -i 's/listen       80;/listen       8018;/' /etc/nginx/conf.d/default.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]