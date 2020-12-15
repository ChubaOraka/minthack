FROM node:10

WORKDIR /usr/src/app/backend

COPY package*.json ./

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "dev"]