"use strict";

var request = require("request");
var bartlby_extension = require("bartlby");
var bartlby = new bartlby_extension.Instance("/opt/bartlby/etc/bartlby.cfg");
var app = require('./app'),
r = require('koa-route');

var jsonTest = function *() {
    this.body = {
        "works": true,
        "works-well": true
    };
};

var coreInfo = function *() {
	this.body=bartlby.getInfo();
}


app.use(r.get('/api/test', jsonTest));
app.use(r.get('/api/coreinfo', coreInfo));
