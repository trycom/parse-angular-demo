'use strict';
var assert = require('assert');
var utils = require('../lib/utils');

describe('Utils', function () {
  describe('utils.checkConfig', function () {

    it('should allow to have no task', function () {
      var config = {html: {files: '*.txt' }};

      assert.doesNotThrow(function () {
        utils.checkConfig(config);
      });
    });

    it('should check each of the target has a correct config', function () {
      var config = {html: {}};

      assert.throws(function () {
        utils.checkConfig(config);
      },
      /Invalid config for target html: files is missing/);

      config = {fred: { files: 3 }};

      assert.throws(function () {
        utils.checkConfig(config);
      },
      /Invalid config for target fred: files is neither a string nor an Array of patterns/);

      config = {fred: { files: '*.txt', tasks: 3 }};

      assert.throws(function () {
        utils.checkConfig(config);
      },
      /Invalid config for target fred: tasks is neither a string nor an Array of patterns/);
    });

    it('should filter tasks to keep only strings and arrays', function () {
      var config = {html: { files: '*.txt', tasks: ['foo', 1, 'bar']}};

      config = utils.checkConfig(config);
      assert.equal(config.html.tasks.length, 2);
      assert.equal(config.html.tasks[0], 'foo');
      assert.equal(config.html.tasks[1], 'bar');
    });

    it('should filter files to keep only strings and arrays', function () {
      var config = {html: { files: ['*.txt', 1, '*.html']}};

      config = utils.checkConfig(config);
      assert.equal(config.html.files.length, 2);
      assert.equal(config.html.files[0], '*.txt');
      assert.equal(config.html.files[1], '*.html');

      config = {html: { files: '*.txt'}};

      config = utils.checkConfig(config);
      assert.equal(config.html.files.length, 1);
      assert.equal(config.html.files[0], '*.txt');

    });
  });

  describe('launchTask', function () {
    var grunt = require('grunt');
    var _savedTask, _savedSpawn, _savedLog;
    beforeEach(function () {
      _savedTask = grunt.task;
      _savedSpawn = grunt.util.spawn;
      _savedLog = grunt.log;
    });
    afterEach(function () {
      grunt.task = _savedTask;
      grunt.util.spawn = _savedSpawn;
      grunt.log = _savedLog;
    });

    it('should run all the tasks', function () {
      var _tasks;
      var task = { mark: function () {}};
      var myTasks = ['foo', 'bar', 'baz'];
      grunt.task = {
        run: function (t) { _tasks = t; return task; },
        current: { nameArgs: 'foo:bar' }
      };

      utils.launchTasks(grunt, myTasks, false);
      assert.equal(_tasks.length, 3);
      myTasks.forEach(function (t, i) {
        assert.equal(_tasks[i], t);
      });

    });

    it('should spawn the tasks when needed', function () {
      var grunt = require('grunt');
      var _spawned = 0;
      var myTasks = ['foo', 'bar', 'baz'];
      var p = {
        stdout: { on : function () {} },
        stderr: { on: function () {} }
      };
      grunt.util.spawn = function (cfg) {
        _spawned += 1;
        // In the test we're launched by node. hHence process.argv[0] === 'node'
        assert.equal(cfg.cmd, 'node');
        assert.ok(cfg.opts.cwd);
        assert.equal(cfg.opts.cwd, process.cwd());
        assert.ok(cfg.args.indexOf('foo') !== -1);
        assert.ok(cfg.args.indexOf('bar') !== -1);
        assert.ok(cfg.args.indexOf('baz') !== -1);
        return p;
      };

      utils.launchTasks(grunt, myTasks, true);
      assert.equal(_spawned, 1);
    });

    it('should prevent a task from blowing up the process', function () {
      var _error;
      var errorMsg = 'Error from task !';
      var myTasks = ['foo'];
      grunt.task = {
        run: function () { throw (errorMsg); },
        current: { nameArgs: 'foo:bar' }
      };
      grunt.log = {
        error: function (err) { _error = err; }
      };

      assert.doesNotThrow(
        function () {
        utils.launchTasks(grunt, myTasks, false);
      }
      );
      assert.equal(_error, errorMsg);
    });

    it('should convey files changed through a variable of grunt', function (done) {
      var changedFiles = ['bar', 'baz', 'boo'];
      var task = { mark: function () {}};
      grunt.task = {
        run: function () {
          assert.equal(grunt.regarde.changed, changedFiles);
          done();
          return task;
        },
        current: { nameArgs: 'foo:bar' }
      };

      utils.launchTasks(grunt, ['foo'], false, changedFiles);

    });
  });

});