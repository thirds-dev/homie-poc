FROM ubuntu:latest

# Install OS dependencies
RUN apt update && apt install build-essential libmpg123-dev libasound2-dev curl -y
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json homie.js music yo-homie.ppn yo-homie.rhn ./

# Install app dependencies
RUN npm i -g node-gyp@latest
RUN npm i

CMD [ "node", "homie.js" ]