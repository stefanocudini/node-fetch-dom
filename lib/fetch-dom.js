
const Nightmare = require('nightmare')
const nightmare = Nightmare({
    height: 1280,
    width: 1280,
    //show: true
});

Object.getPath = function(o, s) {

    if(!s) return o;

    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

module.exports = function(url, opts, cb) {

    if(opts && typeof opts === 'function') {
        cb = opts;
    }
  
    if(url) {
        nightmare
        .goto(url)
        .wait(opts.wait || 'body')
        .evaluate(function() {
          return this;
        })
        .end()
        .then(function(window) {

            var o = Object.getPath(window, opts.subvar);
  
            if(cb) {
                cb(o);
            }
        })
        .catch(function(error) {
            console.error('Error: ', error)
        });
    }

};
