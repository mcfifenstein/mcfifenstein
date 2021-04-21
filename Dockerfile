FROM node:15

# Create app directory
WORKDIR /usr/src/mcfifenstein

COPY package.json ./
RUN yarn
COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]