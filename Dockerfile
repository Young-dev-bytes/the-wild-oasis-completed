FROM node:18.16.0 as frontend-build

WORKDIR /fullstack/frontend

COPY package.json package-lock.json ./

ARG CONT_IMG_VER

ENV CONT_IMG_VER=v1.0.0

RUN echo $CONT_IMG_VER

RUN echo "hello, dockerfile!"

RUN rm -rf node_modules

COPY . ./

RUN npm install

RUN npm run build

FROM nginx

COPY --from=frontend-build /fullstack/frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
