#!/usr/bin/env node

global.environment  = require('./environment');

var Windshaft = require('windshaft');

var ServerOptions = require('./server_options');

// drop redis connections after 1 second of idle time
ServerOptions.redis.idleTimeoutMillis = 1000;
ServerOptions.redis.reapIntervalMillis = ServerOptions.redis.idleTimeoutMillis;

var server = new Windshaft.Server(ServerOptions);

// it takes up to 15 file descriptors to support 1 connection
// the default limit on file descriptors per process is 1024
// so we allow max 68 connections (this is just an indication
// and only applies on the code of 29 Jan 2013)
//
server.maxConnections = 68;
server.listen(global.environment.windshaft_port);

console.log(server.routes.routes);
console.log("Windshaft tileserver started on port " + global.environment.windshaft_port);
