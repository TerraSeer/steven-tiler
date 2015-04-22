FROM christianbundy/windshaft:0.42.2
MAINTAINER TerraSeer

ADD . /docker
WORKDIR /docker/

EXPOSE 80

RUN npm install

CMD npm start
