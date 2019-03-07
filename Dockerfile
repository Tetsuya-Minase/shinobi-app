FROM node:8.15.1

COPY package.json /src/package.json
COPY package-lock.json /src/package-lock.json
WORKDIR /src
RUN npm install
COPY . /src
RUN npm run build:clean
EXPOSE  3000

CMD ["node", "/src/app/bin/www"]