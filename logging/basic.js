'use strict';

/**
 * Setting up morgan logger. If file specified in `twee:options:logging:file` then it will be used for logging
 */
module.exports = function() {
    var options = {};

    if (twee.getConfig('twee:options:logging:file')) {
        var path = require('path')
            , fs = require('fs')
            , logfile = path.join(twee.getBaseDirectory(), twee.getConfig('twee:options:logging:file'))
            , nodeFs = require('node-fs');

        // Creating logging directory
        nodeFs.mkdirSync(path.dirname(logfile), '0777', true);

        // Creating stream
        var accessLogStream = fs.createWriteStream(logfile, {flags: 'a'});

        options = {stream: accessLogStream};
    }

    var logger = require('morgan');
    twee.getApplication().use(logger('combined', options));
};
