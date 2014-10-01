"use strict";

var domify = require('domify'),
reactive = require('reactive'),
template = require('./welcome.html');


var Spinner = require('spinner');
var carousel = require('carousel');

var view;

module.exports = Welcome;

function Welcome() {
	this.el = document.createElement("div");
	this.el.innerHTML="aa";

	

	
    this.el = domify(template);
    this.view = reactive(this.el, { name: 'Stranger11'});
    view=this.view;
    $.get("/api/coreinfo", function(d) {
    	view.set("name", d.version);
    });


	
    var spinner = new Spinner;
	this.el.appendChild(spinner.el);
	

}