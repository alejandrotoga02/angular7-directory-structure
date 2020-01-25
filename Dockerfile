# base image
FROM node:12-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN rm -rf node_modules/
RUN npm install ci
RUN npm install -g @angular/cli@latest

# add app
COPY . /app

# generate build
RUN ng build --output-path=dist



# base image
FROM nginx:1.16.0-alpine

COPY nginx.conf /etc/nginx/nginx.conf

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
