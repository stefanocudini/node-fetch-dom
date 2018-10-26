#!/usr/bin/env node

var fetchdom = require('../lib/fetch-dom');

var url = process.argv[2] || undefined,
	opts = {
		subvar: process.argv[3] || undefined,
		wait: process.argv[4] || undefined,
	};

fetchdom(url, opts, function(dom) {
	
	var json = JSON.stringify(dom, null, 4);

	console.log(json);

});
