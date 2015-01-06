'use strict';

/**
 * Usable view helpers
 */
module.exports.extension = function() {
    var underscore = require('underscore');
    twee.registerViewHelper('underscore', underscore);
};
