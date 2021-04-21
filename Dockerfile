FROM node:15

# Create app directory
WORKDIR /usr/src/mcfifenstein

COPY package.json ./
COPY . .

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]