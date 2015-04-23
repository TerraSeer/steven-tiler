module.exports.name = 'development';
module.exports.postgres = {
    user: 'postgres',
    host: 'postgres',
    port: 5432,
    password: 'password',
    geometry_field: 'the_geom_webmercator',
    srid: 3857
};
module.exports.millstone = {cache_basedir: '/tmp/windshaft-dev/millstone'};
module.exports.redis = {
    host: 'redis',
    port: 6379,
    idleTimeoutMillis: 1,
    reapIntervalMillis: 1
};
module.exports.renderer = {
    mapnik: {
        poolSize: 4,//require('os').cpus().length,
        metatile: 1,
        bufferSize: 64,
        snapToGrid: false,
        clipByBox2d: false, // this requires postgis >=2.2 and geos >=3.5
        scale_factors: [1, 2],
        limits: {
            render: 0,
            cacheOnTimeout: true
        }
    }
};
module.exports.mapnik_version = '2.3.0'; // will be looked up at runtime if undefined
module.exports.windshaft_port = 80;
module.exports.enable_cors = false;
