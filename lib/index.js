// Note, currently to run this server your table must have a column called the_geom_webmercator with SRID of 3857
// to view the tiles, open ./viewer/index.html and set the fields
//
// If you want to get something running quickly, follow the instructions for a seed DB in test/windshaft.test.sql

global.environment = require('./config/settings');

var Windshaft      = require('windshaft');
var _              = require('underscore');

var config = {
    base_url: '/database/:dbname/table/:table',
    base_url_notable: '/database/:dbname',
    base_url_mapconfig: '/database/:dbname/layergroup',
    grainstore: {
      datasource: global.environment.postgres
    },
    redis: {host: '127.0.0.1', port: 6379},
    enable_cors: true,
    req2params: function(req, callback){

        // no default interactivity. to enable specify the database column you'd like to interact with
        req.params.interactivity = null;

        // this is in case you want to test sql parameters eg ...png?sql=select * from my_table limit 10
        req.params =  _.extend({}, req.params);
        _.extend(req.params, req.query);

        // send the finished req object on
        callback(null,req);
    }
};

// Initialize tile server
var ws = new Windshaft.Server(config);
ws.listen(global.environment.windshaft_port);

console.log("map tiles are now being served out of: http://localhost:" + global.settings_windshaft_port + config.base_url_mapconfig);
