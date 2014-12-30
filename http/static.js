'use strict';

var express = require('express')
    , path = require('path');

/**
 * Setting Static Files handling and serving
 */
module.exports.extension = function() {
    twee.emit('twee.setupStaticFilesServing.Start');
    twee.getApplication().use(
        express.static(path.join(twee.getBaseDirectory(), twee.getConfig('twee:options:staticFiles:directory', 'public')))
    );
    twee.emit('twee.setupStaticFilesServing.End');
};
