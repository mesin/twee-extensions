/**
 * Setting view engines
 */
module.exports.extension = function() {
    "use strict";

    var disabled = twee.getConfig('twee:options:view:disabled');

    if (disabled) {
        return;
    }

    var engines = require('consolidate')
        , path = require('path')
        , app = twee.getApplication();

    var viewEngines = twee.getConfig('twee:options:view:engines');
    for (var extension in viewEngines) {
        if (engines[viewEngines[extension]]) {
            app.engine(extension, engines[viewEngines[extension]]);
        }
    }

    app.set('view engine', twee.getConfig('twee:options:view:defaultEngine'));
    app.set('views', [path.join(twee.getBaseDirectory(), 'modules')]);

    // In development environment disable cache
    if (app.get('env') === 'development') {
        app.set('view cache', false);
    }
};
