/**
 * Setting Jade View Engine for Frontend
 */
module.exports.extension = function() {
    "use strict";

    var options = twee.getConfig('twee:options:viewEngine');

    if (options.disabled) {
        return;
    }

    var jade = require('jade')
        , path = require('path')
        , extend = require('../../utils/extend');

    function renderTemplate(template, variables, callback) {

        if (variables.error) {
            variables.error.template = template;
        }

        return jade.renderFile(template, twee.extend(options.jade.options, variables), callback, variables.error || {});
    }

    var app = twee.getApplication();

    // Registering templating engine object in application
    app.set('viewEngineInstance', jade);
    app.set('viewEngineType', 'jade');

    app.engine(options.jade.engineExtension, renderTemplate);
    app.set('view engine', options.jade.engineExtension);
    app.set('views', [path.join(twee.getBaseDirectory(), 'modules')]);

    // In development environment disable cache
    if (app.get('env') === 'development') {
        app.set('view cache', false);
    }
};
