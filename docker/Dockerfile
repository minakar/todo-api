FROM node:latest

WORKDIR /usr/src/app

RUN npm install -g yarn
RUN yarn

ENTRYPOINT ["yarn", "start"]

EXPOSE 80
