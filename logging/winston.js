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
            }),
            new winston.transports.Console({
                colorize: true,
                // optional: control whether you want to log the meta data about the request (default to true)
                meta: true,
                msg: "[TWEE] HTTP {{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
                // Use the default Express/morgan request formatting, with the same colors. Enabling this will override any msg and colorStatus if true.
                // Will only output colors on transports with colorize set to true
                expressFormat: true,
                colorStatus: true
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
