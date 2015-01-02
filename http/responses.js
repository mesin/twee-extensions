'use strict';

/**
 * Setting Up different responses types
 * Currently support additional XML response type
 */
module.exports.extension = function() {
    var xml = require('object-to-xml');

    twee.getApplication().use(function(req, res, next){
        res.xml = function(variables) {
            res.set('Content-Type', 'text/xml');
            res.send(xml({'?xml version="1.0" encoding="utf-8"?' : null, response: variables}));
        };

        next();
    });
};

module.exports.npmDependencies = ['object-to-xml'];
