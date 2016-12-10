'use strict';
var dataProvider = require('../../data/bots/{botId}.js');
/**
 * Operations on /bots/{botId}
 */
module.exports = {
    /**
     * summary: Devolve os detalhes do Bot
     * description: 
     * parameters: botId
     * produces: application/json
     * responses: 200, 404, default
     */
    get: function getBotById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.send(status, data && data.responses);
            next();
        });
    }
};
