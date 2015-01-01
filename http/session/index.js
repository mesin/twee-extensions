module.exports.extension = function() {

    var app = twee.getApplication()
        , self = this;

    if (!twee.getConfig('twee:options:session:enabled')) {
        return;
    }

    var session = require('express-session')
        , RedisStore = require('connect-redis')(session);

    var sessionOptions = twee.getConfig('twee:options:session:options')
        , redisClient = twee.getApplication().get('redis');

    if (!redisClient) {
        throw new Error('Dependency: redis client has not been installed, but required');
    }

    sessionOptions.store = new RedisStore({client: redisClient});
    app.use(session(sessionOptions));

    // Handle Session Connection Troubles
    app.use(function (req, res, next) {
        if (!req.session) {
            self.error('Session Connection Trouble!');
        }
        next();
    });
};

module.exports.dependencies = {
    "Twee Cookies": {
        "module": "twee-extensions/http/cookie"
    },
    "Redis Client": {
        "module": "twee-extensions/cache/redis"
    }
};

module.exports.npmDependencies = [
    'redis',
    'express-session',
    'connect-redis',
    'passport'
];
