FROM node:latest

COPY package.json package-lock.json /app/

RUN cd /app && npm install

COPY index.js /app/

EXPOSE 3000

CMD cd /app && node index.js