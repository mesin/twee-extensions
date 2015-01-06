/**
 * Passport handlers installing
 */
module.exports.extension = function() {
    var passport = require('passport')
        , app = twee.getApplication();

    if (twee.getConfig('twee:options:passport:enabled')) {
        app.use(passport.initialize());
        app.use(passport.session());
    }
};

module.exports.dependencies = {
    "Twee Session": {
        "module": "twee-extensions/http/session"
    }
};
