FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install -g next

RUN npm install

COPY . /app

RUN mkdir -p /app/.next/cache/images
VOLUME /app/.next/cache/images

RUN npm run build

EXPOSE 3000

CMD npm run start