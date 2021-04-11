FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install
RUN npm i -D webpack-cli
RUN npm i webpack-cli @webpack-cli/init

COPY webpack.config.js ./

COPY node_modules ./node_modules/
COPY dist ./dist/
COPY src ./src/

EXPOSE 9000


ENTRYPOINT ["npm", "run", "dev"]