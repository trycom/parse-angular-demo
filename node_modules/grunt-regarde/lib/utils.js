'use strict';

var utils = module.exports;

var validType = function validType(v) {
//   return ((typeof v !== 'string') &&
//         !(v instanceof String) &&
//         !(v instanceof Array));
  return (v === undefined ||
    v instanceof String ||
    typeof v === 'string' ||
    Array.isArray(v));
};

var filterElem = function filterElem(a) {
  if (a) {
    return a.filter(function (t) { return typeof t === 'string'; });
  } else {
    return a;
  }
};


utils.checkConfig = function checkConfig(cfg) {
  var config = cfg;

  Object.keys(config).forEach(function (target) {
    var targetCfg = config[target];

    if (!targetCfg.files) {
      throw new Error('Invalid config for target ' + target + ': files is missing');
    }

    ['files', 'tasks'].forEach(function (v) {
      if (!validType(targetCfg[v])) {
        throw new Error('Invalid config for target ' + target + ': ' + v + ' is neither a string nor an Array of patterns');
      }
      if (typeof targetCfg[v] === 'string') {
        targetCfg[v] = [targetCfg[v]];
      }
      targetCfg[v] = filterElem(targetCfg[v]);
    });
  });

  return config;
};

utils.launchTasks = function launchTask(grunt, tasks, spawn, changed) {
  // Get process.argv options without grunt.cli.tasks to pass to child processes
  var cliArgs = grunt.util._.without.apply(null, [[].slice.call(process.argv, 2)].concat(grunt.cli.tasks));

  // if(grunt.task.current.nameArgs !== nameArgs){
  //    // previous task hasn't finished so skipping
  //   grunt.log.warn('A task is already running, queuing...');
  // }

  if (spawn) {
    grunt.verbose.writeln('Spawning tasks...');
    var spawned = grunt.util.spawn({
      // Use the node that spawned this process
      cmd: process.argv[0],
      // Run from current working dir
      opts: { cwd: process.cwd() },
      // Run grunt this process uses, append the task to be run and any cli options
      args: grunt.util._.union([process.argv[1]].concat(tasks), cliArgs)
    }, function () {
          // Spawn is done
          // delete spawned[i];
          grunt.log.writeln('').write('waiting');
        });
    // Display stdout/stderr immediately
    spawned.stdout.on('data', function (buf) { grunt.log.write(String(buf)); });
    spawned.stderr.on('data', function (buf) {
      buf = grunt.log.uncolor(String(buf));
      if (!grunt.util._.isBlank(buf)) { grunt.log.error(buf); }
    });
  } else {
    try {
      // run target tasks
      grunt.regarde = grunt.regarde || {};
      grunt.regarde.changed = changed;
      grunt.task.run(tasks).mark();
      // grunt.task.start();
    } catch (err) {
      grunt.log.error(err);
    }
  }
};

