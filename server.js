'use strict';

var Restify = require('restify');
var Swaggerize = require('swaggerize-restify');
var Path = require('path');

var Server = Restify.createServer();

Server.use(Restify.bodyParser());
Server.use(Restify.queryParser());

Server.get('/api', function (req, res) {
    res.send(200);
});

Swaggerize(Server, {
    api: Path.resolve('./config/swagger.yaml'),
    handlers: Path.resolve('./handlers')
});

let port = process.env.port || process.env.PORT || 8000;

Server.listen(port, function () {
    Server.swagger.api.host = Server.address().address + ':' + Server.address().port;
    /* eslint-disable no-console */
    console.log('App running on %s:%d', Server.address().address, Server.address().port || port);
    /* eslint-disable no-console */
});
