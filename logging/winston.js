/**
 * Extension that allows to write awesome logs
 * Installing it after all head middleware, so dispatch process will be as complete as possible
 */
module.exports.extension = function() {
    var expressWinston = require('express-winston')
        , winston = require('winston')
        , path = require('path');

    twee.getApplication().use(expressWinston.logger({
        transports: [
            new winston.transports.File({
                filename: path.join(twee.getBaseDirectory(), twee.getConfig('twee:options:logging:winston:accessFile'))
            })
        ],
        exceptionHandlers: [
            new winston.transports.File({
                filename: path.join(twee.getBaseDirectory(), twee.getConfig('twee:options:logging:winston:exceptionsFile'))
            })
        ],
        exitOnError: twee.getConfig('twee:options:logging:winston:exitOnError')
    }));
};


module.exports.npmDependencies = [
    'express-winston',
    'winston',
    'path',
];
