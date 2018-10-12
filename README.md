# node-fetch-dom
Library for Nodejs that retrieve the DOM and global vars from a remote html page.


# Installation
```bash
$ npm install node-fetch-dom --save
```

# Usage

```javascript

var fetchdom = require('node-fetch-dom');

/*
  by default return the window object
*/
fetchdom('http://labs.easyblog.it/', function(window) {

	console.log(window.document.body);
});

/*
  specify sub property of default DOM
*/
fetchdom('http://labs.easyblog.it/', 'location.href', function(href) {

	console.log(href);

});

/*
  parsing of global remote variables (in remote page is defined window.allTags = {...}; )
*/
fetchdom('http://labs.easyblog.it/', 'allTags', function(tags) {

	console.log(tags);

});
```
