'use strict';
var Test = require('tape');
var Restify = require('restify');
var Swaggerize = require('swaggerize-restify');
var Path = require('path');
var Request = require('supertest');
var Mockgen = require('../data/mockgen.js');
var Parser = require('swagger-parser');
/**
 * Test for /bots
 */
Test('/bots', function (t) {
    var apiPath = Path.resolve(__dirname, '../config/swagger.yaml');
    var server = Restify.createServer();
    server.use(Restify.bodyParser());
    server.use(Restify.queryParser());
    Swaggerize(server, {
        api: apiPath,
        handlers: Path.resolve(__dirname, '../handlers')
    });
    Parser.validate(apiPath, function (err, api) {
        t.error(err, 'No parse error');
        t.ok(api, 'Valid swagger api');
        /**
         * summary: Lista os bots disponiveis
         * description: 
         * parameters: 
         * produces: application/json
         * responses: 200, default
         */
        t.test('test listBots get operation', function (t) {
            Mockgen().requests({
                path: '/bots',
                operation: 'get'
            }, function (err, mock) {
                var request;
                t.error(err);
                t.ok(mock);
                t.ok(mock.request);
                //Get the resolved path from mock request
                //Mock request Path templates({}) are resolved using path parameters
                request = Request(server)
                    .get('/v1' + mock.request.path);
                if (mock.request.body) {
                    //Send the request body
                    request = request.send(mock.request.body);
                } else if (mock.request.formData) {
                    //Send the request form data
                    request = request.send(mock.request.formData);
                    //Set the Content-Type as application/x-www-form-urlencoded
                    request = request.set('Content-Type', 'application/x-www-form-urlencoded');
                }
                // If headers are present, set the headers.
                if (mock.request.headers && mock.request.headers.length > 0) {
                    Object.keys(mock.request.headers).forEach(function (headerName) {
                        request = request.set(headerName, mock.request.headers[headerName]);
                    });
                }
                request.end(function (err, res) {
                    t.error(err, 'No error');
                    t.ok(res.statusCode === 200, 'Ok response status');
                    var Validator = require('is-my-json-valid');
                    var validate = Validator(api.paths['/bots']['get']['responses']['200']['schema']);
                    var response = res.body;
                    if (Object.keys(response).length <= 0) {
                        response = res.text;
                    }
                    t.ok(validate(response), 'Valid response');
                    t.error(validate.errors, 'No validation errors');
                    t.end();
                });
            });
        });
    });
});
