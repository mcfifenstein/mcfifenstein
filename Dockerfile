FROM node:15
RUN echo 1
# Create app directory
WORKDIR /usr/src/mcfifenstein
RUN echo 2
COPY package.json ./
COPY . .
RUN echo 3
RUN yarn build
RUN echo 4
EXPOSE 3000
CMD ["yarn", "start"]