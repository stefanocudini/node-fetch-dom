#!/usr/bin/env node

var fetchdom = require('../lib/fetch-dom');

if(process.argv.length<3) {
	process.stderr.write("pass url and var name\n");
	return;
}

var url = process.argv[2] || undefined,
	opts = {
		subvar: process.argv[3] || undefined,
		wait: process.argv[4] || undefined,
	};

fetchdom(url, opts, function(dom) {
	
	var json = JSON.stringify(dom, null, 4);

	process.stdout.write(json)

});
