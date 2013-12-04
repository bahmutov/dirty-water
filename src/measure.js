var jsInHtml = require('./jsInHtml');
var jsInEjs = require('./jsInEjs');
var check = require('check-types');
var path = require('path');

function toInternalDirtType(name) {
  check.verify.unemptyString(name, 'missing dirt type name');
  var names = {
    'js': 'js',
    'javascript': 'js'
  };
  return names[name];
}

module.exports = function (options) {
  check.verify.object(options, 'missing options');
  check.verify.unemptyString(options.filename, 'missing filename');

  if (!options.type) {
    options.type = path.extname(options.filename).replace('.', '');
  }
  options.type = options.type.toLowerCase() || 'html';
  options.dirt = toInternalDirtType(options.dirt || 'js');
  check.verify.unemptyString(options.dirt, 'could not get dirt name ' +
    JSON.stringify(options, null, 2));

  if (options.type === 'html' && options.dirt === 'js') {
    return jsInHtml(options);
  }
  if (options.type === 'ejs' && options.dirt === 'js') {
    return jsInEjs(options);
  }

  throw new Error('Don\'t know how to measure for these options ' +
    JSON.stringify(options, null, 2));
};
