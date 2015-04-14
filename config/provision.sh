#!/usr/bin/env bash
# debug
set -x

# update packages
apt-get update

# install system dependencies
apt-get install -y \
  curl             \
  g++              \
  git              \
  libpq-dev        \
  make             \

# install windshaft dependencies
apt-get install -y \
  libcairo2-dev    \
  libcairo2-dev    \
  libgif-dev       \
  libgif-dev       \
  libjpeg8-dev     \
  libjpeg8-dev     \
  libpango1.0-dev  \
  pkg-config       \

# install node
curl -sL https://deb.nodesource.com/setup | bash
apt-get install -y nodejs

# install postgresql
curl https://alioth.debian.org/scm/loggerhead/pkg-postgresql/postgresql-common/trunk/download/head:/apt.postgresql.org.s-20130224224205-px3qyst90b3xp8zj-1/apt.postgresql.org.sh | bash
apt-get install -y          \
  postgis                   \
  postgresql-9.3            \
  postgresql-server-dev-9.3 \

# redis-server \
# python-software-properties \

npm install --quiet
