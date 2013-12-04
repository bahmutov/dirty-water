gt.module('sample.ejs');

var path = require('path');
var measure = require('../index');
var filename = path.join(__dirname, '../examples/sample.ejs');

gt.test('basic', function () {
  gt.func(measure, 'measure is a function');
  gt.arity(measure, 1, 'single argument');
});

gt.test('js in sample.ejs', function () {
  var result = measure({
    filename: filename,
    type: 'ejs',
    dirt: 'js'
  });
  gt.array(result, 'returns an array');
  gt.equal(result.length, 1, 'single object');
  gt.equal(result[0].loc, 13, 'total lines of code');
  gt.equal(result[0].dirt, 3, 'number of js lines');
});
