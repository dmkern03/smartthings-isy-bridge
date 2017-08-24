#
# Insteon Hub (2245) API server
#
# http://github.com/tenstartups/insteon-hub-api
#

FROM node:alpine

# Create app directory.
WORKDIR /usr/src/app

# Install app dependencies.
COPY package.json .

# Install node application.
RUN npm install

# Bundle app source
COPY ./*.js .

EXPOSE 8080
CMD [ "npm", "start" ]
