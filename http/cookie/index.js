/**
 * Simples cookie parser installation
 */
module.exports.extension = function() {
    var cookieParser = require('cookie-parser');
    twee.getApplication().use(cookieParser());
};

module.exports.npmDependencies = [
    'twee-extensions/node_modules/cookie-parser'
];
