FROM ubuntu:latest

# Install OS dependencies
RUN apt update && apt install git curl -y
RUN git clone https://github.com/respeaker/seeed-voicecard.git
RUN cd seeed-voicecard
RUN sudo ./install.sh
RUN cd ..
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json homie.js music yo-homie.ppn yo-homie.rhn ./

# Install app dependencies
RUN npm i

CMD [ "node", "homie.js" ]