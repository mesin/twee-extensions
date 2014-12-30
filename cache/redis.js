'use strict';

/**
 * Redis store initializer
 */
module.exports.extension = function() {
    var _redis = require("redis")
        , redisConfig = app.getConfig('twee:options:cache:redis');

    var redisClient = _redis.createClient(redisConfig);

    redisClient.on("error", function (err) {
        twee.error('Redis Error: ' + err);
    });

    twee.on('twee.Exit', function(){
        // TODO: check if it works
        redisClient.quit();
    });

    twee.getApplication().set('redis', redisClient);
};

module.exports.npmDependencies = ['redis'];
