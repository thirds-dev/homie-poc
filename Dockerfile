FROM ubuntu:latest

# Install OS dependencies
RUN apt update && apt install build-essential crossbuild-essential-arm64 make mpg123 libasound2-dev snapd -y
RUN systemctl start snapd
RUN snap install node --channel=18/stable --classic

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json homie.js music yo-homie.ppn yo-homie.rhn ./

# Install app dependencies
RUN npm i -g node-gyp@latest
RUN npm i

CMD [ "node", "homie.js" ]