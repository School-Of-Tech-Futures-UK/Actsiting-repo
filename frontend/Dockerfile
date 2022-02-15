FROM node:latest

ADD build /build

RUN cd /build && npm install -g serve

EXPOSE 3000

CMD cd /build && serve -s .