#!/usr/bin/env node
var Windshaft = require('windshaft');
var _         = require('underscore');

var config = {
  base_url: '/database/:dbname/table/:table',
  base_url_notable: '/database/:dbname',
  grainstore: {
    datasource: {
      host: 'postgres',
      user: 'postgres',
      password: 'password',
      port: 5432
    }
  },
  redis: {
    host: 'redis', port: 6379
  },
  enable_cors: true,
  req2params: function(req, callback){

    // no default interactivity. to enable specify the database column you'd like to interact with
    req.params.interactivity = null;

    // this is in case you want to test sql parameters eg ...png?sql=select * from my_table limit 10
    req.params =  _.extend({}, req.params);
    _.extend(req.params, req.query);

    // send the finished req object on
    callback(null,req);
  },
  windshaft_port: 80
};

// Initialize tile server on port 4000
var ws = new Windshaft.Server(config);
ws.listen(config.windshaft_port);

console.log("Windshaft tileserver started on port " + config.windshaft_port);
