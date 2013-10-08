'use strict';

module.exports = function (grunt) {
  var utils = require('../lib/utils');
  var Regarde = require('../lib/regarde');
  var initialized = false;

  grunt.registerTask('regardeReset', 'Reset the initialized status .. For test purpose ONLY', function () {
    grunt.log.writeln('Resetting initialized state');
    initialized = false;
  });

  grunt.registerTask('regarde', 'Observe files on the filesystem', function (target) {
    var name = this.name;
    var nameArgs = grunt.task.current.nameArgs;
    var config = grunt.config(name);
    var done = this.async();
    var targets;

    if (initialized) {
      return;
    }
    initialized = true;

    config = utils.checkConfig(config);
    targets = target ? [target] : Object.keys(config);

    var regarde = new Regarde(grunt.event, function (msg, error) {
      if (error) {
        grunt.log.error(msg);
      } else {
        grunt.log.writeln(msg);
      }
    });

    targets.forEach(function (t) {
      var pattern = config[t].files;
      var tasks = config[t].tasks;
      var spawn = config[t].spawn;
      regarde.add(t, pattern, tasks, spawn);

    });

    var modified = {};
    var launchTasks = grunt.util._.debounce(function (t, spawn, changed) {
      // Copy the array by value
      var lchanged = changed.slice(0);
      changed.length = 0;

      if (t) {
        utils.launchTasks(grunt, t, spawn, lchanged);
      }

     // Enqueue the regarde task, so that it loops.
      grunt.task.run(nameArgs).mark();
      done();
    }, 250);

    grunt.event.on('regarde:file', function (status, name, filepath, tasks, spawn) {
      // Run or spawn the tasks
      grunt.verbose.writeln('File ' + filepath + ' ' + status + '. Tasks: ' + tasks);
      modified[name] = modified[name] || [];
      modified[name].push(filepath);
      launchTasks(tasks, spawn, modified[name]);
    });
  });
};