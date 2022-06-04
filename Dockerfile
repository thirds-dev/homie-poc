FROM ubuntu:latest

# Install OS dependencies
RUN apt update && apt install build-essential mpg123 libasound2-dev snapd -y
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
RUN apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json homie.js music yo-homie.ppn yo-homie.rhn ./

# Install app dependencies
RUN npm i -g node-gyp@latest
RUN npm i

CMD [ "node", "homie.js" ]