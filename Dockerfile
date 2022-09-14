FROM ubuntu:20.04 as build 

COPY . . app/

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y curl sudo

RUN curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -

RUN sudo apt-get install -y nodejs

WORKDIR app

RUN sudo npm install -f --unsafe-perm=true 

RUN sudo npm run build  --unsafe-perm=true

FROM nginx:alpine
COPY --from=build app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]