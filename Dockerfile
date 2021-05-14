FROM node:14.16.1

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 8080

CMD ["npm" ,"start"]

