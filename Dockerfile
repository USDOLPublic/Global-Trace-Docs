FROM nginx:1.17.1-alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html
