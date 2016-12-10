'use strict';
var dataProvider = require('../../data/bot/population.js');
/**
 * Operations on /bot/population
 */
module.exports = {
    /**
     * summary: Devolve a populacao em um dado ano, por idade
     * description: 
     * parameters: age
     * produces: application/json
     * responses: 200, 404, default
     */
    get: function getPopulation(req, res, next) {
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
