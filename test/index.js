'use strict';

var test = require('blue-tape');
var nock = require('nock');

var track = require('../index');

test('Track a single code', function (t) {
  t.plan(1);
  nock('http://www.elta-courier.gr')
    .post('/track.php')
    .replyWithFile(200, __dirname + '/replies/single_code.json');
  track('123')
    .then(function(body) {
      t.ok(body);
    });
});

test('Track multiple codes', function (t) {
  t.plan(1);
  nock('http://www.elta-courier.gr')
    .post('/track.php')
    .replyWithFile(200, __dirname + '/replies/multiple_codes.json');
  track(['123', '456'])
    .then(function(body) {
      t.ok(body);
    });
});
