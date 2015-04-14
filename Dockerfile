FROM ubuntu:precise
ENV DEBIAN_FRONTEND noninteractive
ADD . /vagrant
WORKDIR /vagrant
RUN bash config/provision.sh
EXPOSE 80
CMD ["/usr/bin/node", "/vagrant/index.js"]

