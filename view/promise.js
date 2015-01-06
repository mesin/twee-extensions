'use strict';

module.exports.extension = function() {
    twee.getApplication().use(require('express-promise')());
};

module.exports.npmDependencies = [
    'twee-extensions/node_modules/express-promise'
];
