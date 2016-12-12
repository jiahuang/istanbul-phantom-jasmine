var fs = require('fs');

module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3000,
          middleware: function(connect, options, middlewares) {
            // inject a custom middleware into the array of default middlewares
            middlewares.unshift(function(req, res, next) {
              if (req.url !== '/coverage') return next();

              var coverage = '';
              req.on('data', function (rawData) {
                coverage += rawData;
              });

              req.on('end', function(){
                fs.writeFileSync('tmp/coverage.json', coverage, 'utf8');
              });
            });

            return middlewares;
          },
        }
      }
    },
    jasmine: {
      test: {
        src: 'tmp/instrument/*.js',
        options: {
          specs: 'spec/**/*.spec.js',
          helpers: 'helpers/*.js',
          host: 'http://127.0.0.1:3000/',
          vendor: ['https://code.jquery.com/jquery-2.2.4.min.js'],
          keepRunner: true
        }
      }
    }
  });

  grunt.registerTask('test', [
    'connect',
    'jasmine:test'
  ]);

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint']);

};
