FROM node:16
WORKDIR /usr/src/mcfifenstein
COPY package.json ./
COPY . .
RUN yarn
RUN yarn build