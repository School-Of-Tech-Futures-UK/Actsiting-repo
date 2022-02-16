FROM node:latest

ADD . /build/

RUN cd /build && rm -rf node_modules && npm install && npm install -g create-react-app

EXPOSE 3000

CMD cd /build && npm start