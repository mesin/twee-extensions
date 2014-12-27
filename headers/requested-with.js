/**
 * Setting X-Powered-By custom header to Twee Framework vX.X.X
 */
module.exports = function() {
    twee.getApplication().use(function(req, res, next) {
        res.setHeader('X-Powered-By', 'Twee Framework v' + String(twee.getConfig('twee:package:version')));
        next();
    });
};
