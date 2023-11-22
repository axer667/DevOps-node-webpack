FROM node:19
RUN npm config set fetch-retry-maxtimeout 180000
WORKDIR "/app"
COPY ./www/package.json ./
RUN npm install
COPY ./www .
CMD ["npm", "run", "buildDev"]
CMD ["npm", "run", "dev"]
