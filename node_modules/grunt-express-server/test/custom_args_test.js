/*
 * grunt-express-server
 * https://github.com/ericclemmons/grunt-express-server
 *
 * Copyright (c) 2013 Eric Clemmons
 * Licensed under the MIT license.
 */

'use strict';

var get = require('./lib/get');

module.exports.custom_args = {
  1: function(test) {
    test.expect(2);

    get('http://localhost:3000/1', function(res, body) {
      test.equal(res.statusCode, 200, 'should return 200');
      test.equal(body, 'Howdy 1!', 'should return dynamic page');
      test.done();
    }, function(err) {
      test.done();
    });
  },

  2: function(test) {
    test.expect(2);

    get('http://localhost:3000/2', function(res, body) {
      test.equal(res.statusCode, 200, 'should return 200');
      test.equal(body, 'Howdy 2!', 'should return dynamic page');
      test.done();
    }, function(err) {
      test.done();
    });
  }
};
