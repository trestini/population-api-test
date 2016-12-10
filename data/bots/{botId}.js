'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: getBotById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bots/{botId}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        404: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bots/{botId}',
                operation: 'get',
                response: '404'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/bots/{botId}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
