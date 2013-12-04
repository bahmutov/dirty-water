gt.module('sample.ejs');

var path = require('path');
var measure = require('../index');
var filename = path.join(__dirname, '../examples/sample.ejs');

gt.test('basic', function () {
  console.log(measure);
  gt.func(measure, 'measure is a function');
  gt.arity(measure, 1, 'single argument');
});

gt.test('js in sample.ejs', function () {
  measure({
    filename: filename,
    type: 'ejs',
    dirt: 'js'
  });
});
