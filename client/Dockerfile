FROM node:20-alpine3.17

# The /app directory should act as the main application directory
WORKDIR /collatz-client

# Copy the app package and package-lock.json file
COPY . .

# RUN npm install
RUN npm install --prefix /collatz-client

EXPOSE $PORT

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=$PORT

ENV PROXY_API=$PROXY_API

ENV PROXY_LOGIN=$PROXY_LOGIN

ENTRYPOINT [ "npm",  "run",  "dev", "--prefix", "/collatz-client" ] 