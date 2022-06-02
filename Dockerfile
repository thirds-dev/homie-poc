FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

# Install app dependencies
RUN npm ci --only=production

CMD [ "node", "homie.js" ]