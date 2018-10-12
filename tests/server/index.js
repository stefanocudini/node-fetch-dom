
var fetchdom = require('./index');

var url = 'http://labs.easyblog.it/?node-fetch-dom';


var url = process.argv[2] || url,
    subvar = process.argv[3] || 'allTags';

fetchdom(url, subvar, function(dom) {

	var json = JSON.stringify(dom, null, 4);

	console.log(json);

});