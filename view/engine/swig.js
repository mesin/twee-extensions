/**
 * Setting swig View Engine for Frontend
 */
module.exports.extension = function() {
    "use strict";

    var options = twee.getConfig('twee:options:viewEngine');

    if (options.disabled) {
        return;
    }

    var swig = require('swig')
        , path = require('path');

    function renderTemplate(template, variables, callback) {

        if (variables.error) {
            variables.error.template = template;
        }

        return swig.renderFile(template, variables, callback, variables.error || {});
    }

    var app = twee.getApplication();

    // Registering templating engine object in application
    app.set('viewEngineInstance', swig);
    app.set('viewEngineType', 'swig');

    // Setting up view engine in application
    app.engine(options.swig.engineExtension, renderTemplate);
    app.set('view engine', options.swig.engineExtension);
    app.set('views', [path.join(twee.getBaseDirectory(), 'modules')]);

    // In development environment disable cache
    if (app.get('env') === 'development') {
        app.set('view cache', false);
    }

    swig.setDefaults(options.swig.options || {});
};
