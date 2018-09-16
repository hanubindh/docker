FROM node:alpine
WORKDIR /app
COPY app/. .
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 8080