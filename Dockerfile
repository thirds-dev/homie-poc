FROM ubuntu:latest

# Install OS dependencies
RUN apt update
RUN apt-get -y install alsa-utils mpg123 lame curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json yo-homie-pi.ppn yo-homie-pi.rhn ./
COPY music ./music/
COPY src ./src/

# Install app dependencies
RUN npm i

EXPOSE 3000
CMD [ "node", "homie.js" ]
