'use strict';
var dataProvider = require('../data/bots.js');
/**
 * Operations on /bots
 */
module.exports = {
    /**
     * summary: Lista os bots disponiveis
     * description: 
     * parameters: 
     * produces: application/json
     * responses: 200, default
     */
    get: function listBots(req, res, next) {
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

            console.log(JSON.stringify(data));
            res.send(status, data && data.responses);
            next();
        });
    }
};
