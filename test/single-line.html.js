gt.module('single-line.html.js');

var path = require('path');
var measure = require('../index');
var filename = path.join(__dirname, '../examples/single-line.html');

gt.test('basic', function () {
  gt.func(measure, 'measure is a function');
  gt.arity(measure, 1, 'single argument');
});

gt.test('js in html', function () {
  var result = measure({
    filename: filename,
    type: 'html',
    dirt: 'js'
  });
  gt.object(result, 'returns an object');
  gt.equal(result.loc, 2, 'total lines of code');
  gt.equal(result.dirt, 1, 'number of js lines');
});
