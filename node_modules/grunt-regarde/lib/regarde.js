'use strict';
var path = require('path');

//
// Observe files changes on disk as per the furnished configuration.
// The +watcherObject+ is an instance of a watcher class that have the same interface
// as Gaze. This is used only for driving easily the tests
//
var Regarde = module.exports = function (events, logcb, watcherClass) {
  this.watcherClass = watcherClass;
  this.events = events;
  this.logcb = logcb || function () {};

  if (! this.watcherClass) {
    this.watcherClass = require('gaze').Gaze;
  }
};

Regarde.prototype.add = function add(name, pattern, tasks, spawn) {
  var _this = this;
  var dir = process.cwd();
  var watcher;

  this.logcb('Watching ' + pattern);
  watcher = new this.watcherClass(pattern, function (err, watcher) {
    if (err) {
      _this.logcb(err, true);
      return false;
    }
    _this.events.on('regarde:close', function () {
      watcher.close();
    });

    this.on('all', function (status, filepath) {
      var rfile = path.relative(dir, filepath);
      // Send out events !
      _this.events.emit('regarde:' + name + ':file:' + status, rfile, tasks, spawn);
      _this.events.emit('regarde:' + name + ':file', status, rfile, tasks, spawn);
      _this.events.emit('regarde:file:' + status, name, rfile, tasks, spawn);
      _this.events.emit('regarde:file', status, name, rfile, tasks, spawn);
    });
    // Emit an event to indicate set-up of this watcher (name) is done
    _this.events.emit('regarde:init:' + name + ':done', name);
  });
};
