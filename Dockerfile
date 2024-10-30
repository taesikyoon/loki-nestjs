FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json tsconfig.json ./

RUN npm install

RUN npm run build

# 앱 실행
CMD ["npm", "run", "start:dev"]