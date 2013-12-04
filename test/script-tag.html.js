gt.module('script-tag.html.js');

var path = require('path');
var measure = require('../index');
var filename = path.join(__dirname, '../examples/script-tag.html');

gt.test('js in html', function () {
  var result = measure({
    filename: filename,
    type: 'html',
    dirt: 'js'
  });
  gt.object(result[0], 'returns an object');
  gt.equal(result[0].loc, 21, 'total lines of code');
  gt.equal(result[0].dirt, 7, 'number of js lines');
});
