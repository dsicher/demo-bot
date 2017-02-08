FROM node:latest

EXPOSE 8080

COPY package.json /src/

WORKDIR /src

RUN npm install

COPY . .

CMD ["npm", "start"]
