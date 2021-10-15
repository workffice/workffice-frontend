FROM node:alpine

WORKDIR /workffice-client

COPY package.json .
COPY package-lock.json .
RUN npm install-clean

COPY . .

RUN npm run build


FROM nginx
EXPOSE 80
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /workffice-client/build /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
