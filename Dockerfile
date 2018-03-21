FROM node:8.7.0-alpine

RUN mkdir /app
WORKDIR /app

ADD package.json /app
RUN npm install

ADD . /app

CMD npm start