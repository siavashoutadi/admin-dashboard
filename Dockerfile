FROM nginx:1.14-alpine

COPY dist/admin-dashboard/ /usr/share/nginx/html
