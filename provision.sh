#!/usr/bin/env bash
sudo add-apt-repository ppa:mapnik/v2.2.0
sudo apt-get update
sudo apt-get install -y git g++ postgresql-9.3 postgis redis-server python-software-properties libmapnik2.2 libmapnik-dev mapnik-utils python-mapnik libcairo2-dev libcairo2-dev libpango1.0-dev libjpeg8-dev libgif-dev nodejs npm
sudo ln -s /usr/bin/nodejs /usr/bin/node
cd /vagrant
npm install

