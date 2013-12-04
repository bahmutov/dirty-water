var jsInHtml = require('./jsInHtml');
var jsInEjs = require('./jsInEjs');
var check = require('check-types');

module.exports = function (options) {
  check.verify.object(options, 'missing options');

  if (options.type === 'html' && options.dirt === 'js') {
    return jsInHtml(options);
  }
  if (options.type === 'ejs' && options.dirt === 'js') {
    return jsInEjs(options);
  }

  throw new Error('Don\'t know how to measure for these options ' +
    JSON.stringify(options, null, 2));
};
