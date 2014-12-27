'use strict';

var xml = require('object-to-xml');

/**
 * Setting Up different responses types
 */
module.exports = function() {
    twee.getApplication().use(function(req, res, next){
        res.xml = function(variables) {
            res.set('Content-Type', 'text/xml');
            res.send(xml({'?xml version="1.0" encoding="utf-8"?' : null, response: variables}));
        };

        next();
    });
};
