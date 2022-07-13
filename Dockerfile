FROM node:16.15-alpine as node
COPY . /shlink-web-client
ARG VERSION="latest"
ARG PROXY_URL
ENV VERSION ${VERSION}
# TODO Remove --force once enzyme was removed
RUN cd /shlink-web-client && npm ci --force && REACT_APP_PROXY_URL=${PROXY_URL} NODE_ENV=production npm run build
CMD cd /shlink-web-client && npm run build:serve