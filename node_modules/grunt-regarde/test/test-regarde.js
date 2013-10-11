'use strict';
var assert = require('assert');
var helpers = require('./helpers');
var EventEmitter2 = require('eventemitter2').EventEmitter2;
var Regarde = require('../lib/regarde');

describe('Regarde', function () {
  var events;
  var regarde;

  beforeEach(function () {
    events = new EventEmitter2({delimiter: ':'});
    regarde = new Regarde(events, function () {}, helpers.testWatcher);
  });

  afterEach(function () {
    events.removeAllListeners();
  });


  it('should send event when something happened to a file', function (done) {
    events.on('regarde:file', function (status, name, file, tasks, spawn) {
      assert.equal(status, 'changed');
      assert.equal(file, 'fred.txt');
      assert.equal(tasks.length, 0);
      assert.ok(spawn);
      done();
    });

    regarde.add('tname', '*.txt', [], true);

    // Simulate a file change.
    helpers.testWatcher.fileChange('fred.txt');

  });

  it('should send event restricted to watcher name', function (done) {
    events.on('regarde:fred:file', function (status, file, tasks, spawn) {
      assert.equal(status, 'changed');
      assert.equal(file, 'fred.txt');
      assert.equal(tasks.length, 0);
      assert.ok(spawn);
      done();
    });

    regarde.add('fred', '*.txt', [], true);

    // Simulate a file change.
    helpers.testWatcher.fileChange('fred.txt');

  });

  it('should send event when a file is modified', function (done) {
    events.on('regarde:file:changed', function (name, file, tasks, spawn) {
      assert.equal(file, 'fred.txt');
      assert.equal(tasks.length, 0);
      assert.ok(spawn);
      done();
    });

    regarde.add('tname', '*.txt', [], true);

    // Simulate a file change.
    helpers.testWatcher.fileChange('fred.txt');
  });

  it('should send event to indicate the watcher is ready', function (done) {
    events.on('regarde:init:fred:done', function (t) {
      assert.equal(t, 'fred');
      done();
    });
    regarde.add('fred', '*.txt', ['foo', 'bar'], false);
  });

  it('should send events only to the relevant listener', function (done) {
    events.on('regarde:file:changed', function (name, file, tasks) {
      assert.equal(file, 'fred.txt');
      assert.ok(tasks);
      assert.equal(tasks.length, 1);
      assert.equal(tasks[0], 'fred');
      done();
    });

    regarde.add('fred', 'fred.txt', ['fred']);
    regarde.add('foo', 'foo.txt', ['foo']);

    // Simulate a file change.
    helpers.testWatcher.fileChange('fred.txt');
  });

  it('should send the tasks as part of the event\'s argument', function (done) {
    events.on('regarde:file:changed', function (name, file, tasks, spawn) {
      assert.equal(file, 'fred.txt');
      assert(tasks);
      assert.equal(tasks.length, 2);
      assert.equal(tasks[0], 'foo');
      assert.equal(tasks[1], 'bar');
      assert(!spawn);
      done();
    });

    regarde.add('tname', '*.txt', ['foo', 'bar'], false);

    // Simulate a file change.
    helpers.testWatcher.fileChange('fred.txt');
  });
});