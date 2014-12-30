/**
 * Simples cookie parser installation
 */
module.exports.extension = function() {
    var cookieParser = require('cookie-parser');
    twee.getApplication().use(cookieParser());
};
