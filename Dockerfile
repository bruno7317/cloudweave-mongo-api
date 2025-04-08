FROM node:latest
WORKDIR /app
EXPOSE 7000
COPY . .
RUN npm install
ENTRYPOINT node app.js