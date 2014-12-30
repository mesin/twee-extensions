module.exports.extension = function() {

    var app = twee.getApplication()
        , self = this;

    if (!twee.getConfig('twee:options:session:enabled')) {
        return;
    }

    var session = require('express-session')
        , RedisStore = require('connect-redis')(session)
        , passport = require('passport');

    return;

    var sessionOptions = this.__app.get('core').session.options;
    sessionOptions.store = new RedisStore({client: global.redis});

    this.__app.use(session(sessionOptions));

    if (this.__app.get('core').passport.enabled) {
        this.__app.use(passport.initialize());
        this.__app.use(passport.session());
    }

    // Handle Session Connection Troubles
    this.__app.use(function (req, res, next) {
        if (!req.session) {
            self.error('Session Connection Trouble!');
        }
        next();
    });
};

module.exports.dependencies = {
    "Twee Cookies": {
        "module": "twee-extensions/http/cookie"
    }
};

module.exports.npmDependencies = [
    'redis',
    'express-session',
    'connect-redis',
    'passport'
];
