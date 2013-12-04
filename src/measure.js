var jsInHtml = require('./jsInHtml');
var jsInEjs = require('./jsInEjs');
var check = require('check-types');

function toInternalDirtType(name) {
  check.verify.unemptyString(name, 'missing dirt type name');
  return {
    'js': 'js',
    'javascript': 'javascript'
  }[name.toLowerCase()];
}

module.exports = function (options) {
  check.verify.object(options, 'missing options');

  options.type = options.type.toLowerCase() || 'html';
  options.dirt = toInternalDirtType(options.dirt);

  if (options.type === 'html' && options.dirt === 'js') {
    return jsInHtml(options);
  }
  if (options.type === 'ejs' && options.dirt === 'js') {
    return jsInEjs(options);
  }

  throw new Error('Don\'t know how to measure for these options ' +
    JSON.stringify(options, null, 2));
};
