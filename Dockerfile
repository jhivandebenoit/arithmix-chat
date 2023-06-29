# syntax=docker/dockerfile:1
FROM node

WORKDIR /app

COPY package.json .

RUN apt-get update && apt-get upgrade -y && \
  apt-get install -y nodejs \
  npm            

RUN npm i

COPY . .

# EXPOSE [Port you mentioned in the vite.config file]


EXPOSE 3030

CMD ["npm", "run", "dev"]
