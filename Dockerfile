FROM node:15
WORKDIR /usr/src/mcfifenstein
COPY package.json ./
COPY . .
RUN yarn
RUN yarn build