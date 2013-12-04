gt.module('sample.ejs');

var path = require('path');
var measure = require('../index');
var filename = path.join(__dirname, '../examples/sample2.ejs');

gt.test('js in sample2.ejs with default options', function () {
  var result = measure({
    filename: filename
  });
  gt.object(result[0], 'returns an object');
  gt.equal(result[0].loc, 14, 'total lines of code');
  gt.equal(result[0].dirt, 8, 'number of js lines');
});
