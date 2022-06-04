FROM ubuntu:latest

# Install OS dependencies
RUN apt update
RUN apt-get -y install curl dkms git i2c-tools libasound2-plugins
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json homie.js music yo-homie.ppn yo-homie.rhn ./

# Install app dependencies
RUN npm i

CMD [ "node", "homie.js" ]