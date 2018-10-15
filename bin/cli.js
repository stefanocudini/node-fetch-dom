#!/usr/bin/env node

var fetchdom = require('../lib/fetch-dom');

var url = process.argv[2] || undefined,
    subvar = process.argv[3] || undefined;

fetchdom(url, subvar, function(dom) {
	
	var json = JSON.stringify(dom, null, 4);

	console.log(json);

});
