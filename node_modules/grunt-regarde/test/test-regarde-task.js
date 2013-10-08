'use strict';
var assert = require('assert');
var grunt = require('grunt');
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');
var fs = require('fs');

grunt.task.init([]);
grunt.config.init({});

var opts = grunt.cli.options;
opts.redirect = !opts.silent;

var directory = function directory(dir) {
  return function directory(done) {
    process.chdir(__dirname);
    rimraf(dir, function (err) {
      if (err) {
        return done(err);
      }
      mkdirp(dir, function (err) {
        if (err) {
          return done(err);
        }
        process.chdir(dir);
        done();
      });
    });
  };
};

describe('regarde task', function () {
  before(directory('temp'));

  afterEach(function () {
    grunt.task.run('regardeReset');
    grunt.event.removeAllListeners();
    grunt.task.clearQueue();
  });

  it('should forbid config with no task and events false');
  it('should filter tasks to keep only strings and arrays');
  it('should emit events if no task is given');

  it('should accept file patterns', function (done) {
    grunt.log.muted = true;
    grunt.config.init();
    grunt.config('regarde', {fred: {files: '*.txt', events: true }});
    grunt.file.write('fred.txt', '1');
    grunt.file.write('john.txt', '1');

    var changed = [];

    grunt.event.on('regarde:file:changed', function (name, file) {
      assert.equal(name, 'fred');
      assert(file.match(/(fred|john)\.txt$/));
      changed.push(file);
      if (changed.length === 2) {
        changed = changed.sort();
        assert(changed[0].match(/fred\.txt$/));
        assert(changed[1].match(/john\.txt$/));
        assert(true);
        grunt.event.emit('regarde:close');
        done();
      }
    });

    grunt.task.run('regarde');
    grunt.task.start();

    grunt.event.on('regarde:init:fred:done', function () {
      setTimeout(function () {
        fs.writeFileSync('fred.txt', '2');
        fs.writeFileSync('john.txt', '2');
      }, 1000);
    });
  });

  it('should send event when a file is modified', function (done) {
    grunt.log.muted = true;
    grunt.config.init();
    grunt.config('regarde', {fred: {files: 'fred.txt'}});
    fs.writeFileSync('fred.txt', '1');

    grunt.event.on('regarde:file:changed', function (name, file) {
      assert.equal(name, 'fred');
      assert(file.match(/fred\.txt$/));
      grunt.event.emit('regarde:close');
      done();
    });

    grunt.task.run('regardeReset');
    grunt.task.run('regarde:fred');
    grunt.task.start();

    grunt.event.on('regarde:init:fred:done', function () {
      setTimeout(function () {fs.writeFileSync('fred.txt', '2'); }, 1000);
    });
  });

  it('should launch a task upon file change when requested', function (done) {
    grunt.log.muted = true;
    grunt.config.init();
    grunt.config('regarde', {fred: {files: 'fred.txt', tasks: ['changed']}});
    fs.writeFileSync('fred.txt', '1');

    grunt.registerTask('changed', '', function () {
      grunt.event.emit('regarde:close');
      done();
    });

    grunt.task.run('regardeReset');
    grunt.task.run('regarde:fred');
    grunt.task.start();

    grunt.event.on('regarde:init:fred:done', function () {
      setTimeout(function () {fs.writeFileSync('fred.txt', '2'); }, 1000);
    });

  });

  it('should spawn a task upon change when requested');
});