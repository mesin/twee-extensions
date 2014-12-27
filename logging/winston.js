/**
 * Extension that allows to write awesome logs
 */
module.exports = function() {
    var expressWinston = require('express-winston');
    var winston = require('winston');

    twee.getApplication().use(expressWinston.logger({
        transports: [
            new winston.transports.File({
                json: true,
                colorize: true
            })
        ]
    }));
};
