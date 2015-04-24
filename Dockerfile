FROM christianbundy/windshaft:0.40.0
MAINTAINER TerraSeer

ADD . /docker

WORKDIR /docker/

RUN npm install

CMD npm start
