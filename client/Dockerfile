FROM node:20-alpine3.17

# The /app directory should act as the main application directory
WORKDIR /collatz

RUN mkdir -p ./client/src
# Copy the app package and package-lock.json file
COPY ./client/src ./client/src

# RUN npm install

# RUN npm run build

EXPOSE $PORT

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=$PORT

ENV PROXY_API=$PROXY_API

ENV PROXY_LOGIN=$PROXY_LOGIN