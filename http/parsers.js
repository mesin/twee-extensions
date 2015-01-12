/**
 * Setting all the parsers that are used in HTTP protocol for basic case
 */
module.exports.extension = function() {
    "use strict";

    var fs = require('fs')
        , path = require('path')
        , faviconFileName = twee.getConfig('twee:options:favicon:file')
        , faviconFile = path.join(twee.getBaseDirectory(), faviconFileName)
        , favicon = require('serve-favicon');

    if (twee.getConfig('twee:options:favicon:file') && fs.existsSync(faviconFile)) {
        twee.getApplication().use(favicon(faviconFile));
    }

    var bodyParser = require('body-parser');

    twee.emit('twee.setupHttpParsers.Start');
    twee.getApplication().use(bodyParser.json());
    twee.getApplication().use(bodyParser.urlencoded(twee.getConfig('twee:options:bodyParser:urlencoded')));
    twee.emit('twee.setupHttpParsers.End');
};
