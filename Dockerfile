FROM christianbundy/windshaft:0.19.4
MAINTAINER TerraSeer

ADD . /docker

WORKDIR /docker/

RUN npm install

CMD npm start
