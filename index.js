#!/usr/bin/env node

var pkg = require('./package.json');

var info = pkg.name + ' - ' + pkg.description + '\n' +
    '  version: ' + pkg.version + '\n' +
    '  author: ' + JSON.stringify(pkg.author);

var optimist = require('optimist');
var program = optimist
    .options('type', {
        string: true,
        alias: 't',
        description: 'main file type (html, js, css)',
        default: 'html'
    })
    .options('dirt', {
        string: true,
        alias: 'd',
        description: 'dirt type polluting the main file (js, css, html)',
        default: 'js'
    })
    .option('version', {
        boolean: true,
        alias: 'v',
        description: 'show version and exit',
        default: false
    })
    .usage(info)
    .argv;

if (program.version) {
    console.log(info);
    process.exit(0);
}

if (program.help) {
    optimist.showHelp();
    process.exit(0);
}

console.log(info);

var updateNotifier = require('update-notifier');
var notifier = updateNotifier();
if (notifier.update) {
    notifier.notify();
}
