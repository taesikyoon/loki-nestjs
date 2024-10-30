FROM node:20-alpine
WORKDIR /usr/src/app
# package.json 및 yarn.lock 파일 복사
COPY package.json tsconfig.json ./
COPY node_modules ./node_modules
RUN npm install
RUN npm run build
# 앱 실행
CMD ["npm", "run", "start:dev"]