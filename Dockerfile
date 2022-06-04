FROM ubuntu:latest

# Install OS dependencies
RUN apt update && apt install mpg123 libasound2-dev nodejs npm -y

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json homie.js music yo-homie.ppn yo-homie.rhn ./

# Install app dependencies
RUN npm ci --only=production

CMD [ "node", "homie.js" ]