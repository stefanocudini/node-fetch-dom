# node-fetch-dom
Library for Nodejs that retrieve the DOM and global vars from a remote html page.

[![npm version](https://badge.fury.io/js/node-fetch-dom.svg)](http://badge.fury.io/js/node-fetch-dom)

*Licensed under the MIT license.*

*Copyright [Stefano Cudini](http://labs.easyblog.it/stefano-cudini/)*

## Source code
[Github](https://github.com/stefanocudini/node-fetch-dom)
[NPM](https://npmjs.org/package/node-fetch-dom)

# Usage
## Install in command line

```bash
$ npm install -g node-fetch-dom
```
**run command**
page url and global variable name
```bash
$ fetchdom http://labs.easyblog.it/index.html allTags
```

## Integrate in your application

```bash
$ npm install --save node-fetch-dom 
```
**application code**
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
