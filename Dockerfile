FROM node:10

WORKDIR /workspace

COPY package*.json ./
RUN npm install
COPY . .
