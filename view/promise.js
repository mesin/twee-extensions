'use strict';

module.exports.extension = function() {
    twee.getApplication().use(require('express-promise')());
};
