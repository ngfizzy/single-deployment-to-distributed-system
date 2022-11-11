FROM node:14.17.0 as base

ARG VERSION=""

RUN mkdir /home/comx
WORKDIR /home/comx
ADD package.json package-lock.json /home/comx/

FROM base as development

RUN npm install
COPY . /home/comx
EXPOSE 4000

ENTRYPOINT [ "npm", "run", "start" ]
