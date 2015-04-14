FROM christianbundy/windshaft
MAINTAINER Christian Bundy <me@christianbundy.com>

ADD . /docker
WORKDIR /docker

RUN npm install
CMD npm start
