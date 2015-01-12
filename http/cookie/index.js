/**
 * Simples cookie parser installation
 */
module.exports.extension = function() {
    "use strict";

    var cookieParser = require('cookie-parser');
    twee.getApplication().use(cookieParser());
};
