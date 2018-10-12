# node-fetch-dom
Library for Nodejs that retrieve the DOM from a remote html page.


# Installation
```bash
$ npm install node-fetch-dom --save
```

# Usage

```javascript

var fetchdom = require('node-fetch-dom');

fetchdom('http://labs.easyblog.it/', 'location', function(dom) {

	console.log(dom.href);

});
```
