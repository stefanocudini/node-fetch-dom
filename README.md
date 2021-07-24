# fetch-dom
Library for Nodejs that retrieve the DOM and global vars from a remote html page.

[![npm version](https://badge.fury.io/js/node-fetch-dom.svg)](https://badge.fury.io/js/node-fetch-dom)

*Licensed under the MIT license.*

*Copyright [Stefano Cudini](https://opengeo.tech/stefano-cudini/)*

## Source code
[Github](https://github.com/stefanocudini/node-fetch-dom)
[NPM](https://npmjs.org/package/fetch-dom)

# Usage
## Install in command line

```bash
$ npm install -g @stefcud/fetch-dom
```
**run command**
parameters is a url page and a global variable name
```bash
$ fetchdom https://opengeo.tech/index.html allTags
```
the output is a json

**html in remote page**
```html
<script>
var allTags = {"ajax":0,"bash":0,"bootstrap":0,"crawler":0,"css3":0,"cv":0,"debian":0,"developer":0,"dom":0,"fetch":0,"geojson":0,"geosocial":0,"gis":0,"gps":0,"gpx":0,"gruntjs":0, .... 
</script>
```

## Usage
```bash
$ npm install --save fetch-dom 
```

## Integrate in your code
```javascript

var fetchdom = require('@stefcud/fetch-dom');

/*
  by default return the window object
*/
fetchdom('https://opengeo.tech/', function(window) {

	console.log(window.document.body);
});

/*
  specify sub property of default DOM
*/
fetchdom('https://opengeo.tech/', 'location.href', function(href) {

	console.log(href);

});

/*
  parsing of global remote variables (in remote page is defined window.allTags = {...}; )
*/
fetchdom('https://opengeo.tech/', 'allTags', function(tags) {

	console.log(tags);

});
```
