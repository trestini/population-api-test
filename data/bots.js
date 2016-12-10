'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: listBots
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bots',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bots',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
