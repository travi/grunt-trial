'use strict';

var grunt = require('grunt'),
    yaml = require('js-yaml'),
    fs   = require('fs');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.trial = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },

    'test that default js file built from yaml definition': function (test) {
        test.equal('file1file2', grunt.file.read('tmp/default.js'));
        test.done();
    },

    'test that page1 js file built from yaml definition': function (test) {
        test.equal('file1file3', grunt.file.read('tmp/page1.js'));

        test.done();
    }
};
