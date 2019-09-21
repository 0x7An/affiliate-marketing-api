FROM alpine:latest
RUN apk add --update bash && rm -rf /var/cache/apk/*
RUN apk add --update nodejs nodejs-npm
RUN apk add --update build-base libffi-dev  
RUN apk add --update git
RUN apk add --update sudo
RUN apk add --no-cache openssh-client
RUN mkdir ./workspace
RUN npm install -g nodemon
