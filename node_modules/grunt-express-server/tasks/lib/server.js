/*
 * grunt-express-server
 * https://github.com/ericclemmons/grunt-express-server
 *
 * Copyright (c) 2013 Eric Clemmons
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var done    = null;
  var server  = null; // Store server between live reloads to close/restart express

  var finished = function() {
    if (done) {
      done();

      done = null;
    }
  };

  return {
    start: function(options) {
      if (server) {
        this.stop();

        if (grunt.task.current.flags.stop) {
          finished();

          return;
        }
      };

      grunt.log.writeln('Starting '.cyan + (options.background ? 'background' : 'foreground') + ' Express server');

      done = grunt.task.current.async();

      // Set PORT for new processes
      process.env.PORT = options.port;

      if (options.background) {
        server = grunt.util.spawn({
          cmd:      process.argv[0],
          args:     options.args,
          env:      process.env,
          fallback: options.fallback
        }, options.error);

        server.stdout.on('data', finished);

        server.stdout.pipe(process.stdout);
        server.stderr.pipe(process.stderr);
      } else {
        // Server is ran in current process
        server = require(options.script);

        finished();
      }

      process.on('exit', finished);
      process.on('exit', this.stop);
    },

    stop: function() {
      if (server) {
        grunt.log.writeln('Stopping'.red + ' Express server');

        server.kill('SIGTERM');
        server = null;
      };

      finished();
    }
  };
};
