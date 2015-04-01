module.exports.name = 'development';
module.exports.postgres = {
    user: 'hds_user',
    password: 'password',
    host: '127.0.0.1',
    port: 5432,
};
module.exports.millstone = {cache_basedir: '/tmp/windshaft-dev/millstone'};
module.exports.redis = {
    host: '127.0.0.1',
    port: 6379,
    idleTimeoutMillis: 1,
    reapIntervalMillis: 1
};
module.exports.mapnik_version = undefined; // will be looked up at runtime if undefined
module.exports.windshaft_port = 8080;
module.exports.enable_cors = true;
