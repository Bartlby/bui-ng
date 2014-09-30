"use strict";

var request = require("request");

var app = require('./app'),
r = require('koa-route');

var jsonTest = function *() {
    this.body = {
        "works": true,
        "works-well": true
    };
};

var loadServers = function *() {
	this.type = 'html';
	var stream = this;
	request('http://www.google.com', function (error, response, body) {
		stream.response.body=body;
		console.log(stream.response);
	});

}

app.use(r.get('/api/test', jsonTest));
app.use(r.get('/api/servers', loadServers));
