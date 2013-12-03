var fs = require('fs');
var check = require('check-types');

function measureJsInHtml(options) {
  check.verify.unemptyString(options.filename, 'missing filename in '
    + JSON.stringify(options, null, 2));

  var src = fs.readFileSync(options.filename, 'utf-8');
  var scriptTagRegExp = /<script[\w\W]*>[\w\W]*<\/script>/gi;
  console.log('matches for\n' + src + '\n' + scriptTagRegExp.exec(src));
}

module.exports = measureJsInHtml;
