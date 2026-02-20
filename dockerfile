FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

#-g is for global configurations, daemon off is to run the nginx server in the foreground so that the docker container doen't exit.
CMD ["nginx", "-g", "daemon off;"]
