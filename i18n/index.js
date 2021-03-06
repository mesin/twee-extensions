/**
 * Using json translation files with standard translation solution
 * @url https://github.com/mashpie/i18n-node
 */
module.exports.extension = function() {
    "use strict";

    var i18n = require('i18n')
        , app = twee.getApplication()
        , initOptions = twee.getConfig('twee:options:i18n:init');

    initOptions["updateFiles"] = (app.get('env') == 'development' && twee.getConfig('twee:options:i18n:autoUpdate'));
    i18n.configure(initOptions);

    app.use(i18n.init);

    app.use(function (req, res, next) {
        app.locals.tr = global.tr = res.__;
        next();
    });
};

module.dependencies = {
    "Twee Basic HTTP Parsers": {
        "module": "twee-extensions/http/parsers"
    }
};
