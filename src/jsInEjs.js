var fs = require('fs');
var check = require('check-types');
var S = require('string');
var color = require('cli-color');

function measureJsInEjs(options) {
  check.verify.unemptyString(options.filename,
    'missing filename in ' + JSON.stringify(options, null, 2));

  var src = fs.readFileSync(options.filename, 'utf-8');
  var n = S(src).lines().length;

  var scriptTagRegExp = /<%([\w\W]+)?%>/gi;
  console.log('EJS matches for\n' + src);

  var foundScript;
  var count = 0;
  while ((foundScript = scriptTagRegExp.exec(src)) !== null) {
    var str = foundScript[0];
    console.log('found at', scriptTagRegExp.lastIndex + '\n' + str);
    count += S(str).lines().length;
  }

  console.log(options.filename, color.green(n), 'EJS lines',
    count ? color.redBright(count) : color.green(count), 'js lines');
}

module.exports = measureJsInEjs;
