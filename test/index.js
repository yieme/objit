'use strict';

var expect = require('chai').expect,
    objit = require('..')
;


describe('objit', function() {
  var expected = JSON.stringify({ "op": "ok" })
  it('should return ' + expected, function(done) {
    var test = objit('ok')
    expect(JSON.stringify(test)).to.equal(expected)
    done();
  });
});

describe('objit', function() {
  var expected = JSON.stringify({ "you": "ok" })
  it('should return ' + expected, function(done) {
    var test = objit('ok', 'you')
    expect(JSON.stringify(test)).to.equal(expected)
    done();
  });
});

describe('objit', function() {
  var expected = JSON.stringify({ "op": "say", "hello": "world" })
  it('should return ' + expected, function(done) {
    var test = objit('say,hello:world')
    expect(JSON.stringify(test)).to.equal(expected)
    done();
  });
});
