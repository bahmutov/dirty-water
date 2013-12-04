module.exports = function (grunt) {

  var jshint = {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: {
      'src': [ '*.js', 'src/*.js' ]
    }
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: jshint,

    jsonlint: {
      all: {
        src: ['*.json']
      }
    },
    complexity: {
      all: grunt.file.readJSON('complexity.json')
    },
    'nice-package': {
      all: {
        options: {}
      }
    }
  });

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['deps-ok', 'jsonlint',
    'jshint', 'jshint-solid',
    'nice-package', 'complexity']);
};
