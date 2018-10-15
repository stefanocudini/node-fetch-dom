
var restify = require('restify');
var fetchdom = require('../lib/fetch-dom');


var server = restify.createServer();

server.use(restify.plugins.queryParser());

server.get('/', function(req, res, next) {

	console.log('fetchdom', req.query);

	fetchdom(req.query.url, req.query.dom, function(dom) {

		var json = JSON.stringify(dom, null, 4);
		
		res.send(dom);

		return next();
	});
});

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
