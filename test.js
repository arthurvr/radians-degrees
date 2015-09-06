'use strict';
var test = require('ava');
var floatEqual = require('float-equal');
var degrees = require('./');

test('should convert radians to degrees', function (t) {
	t.true(floatEqual(degrees(1), 57.29577951308232));
	t.true(floatEqual(degrees(0.1), 5.729577951308233));
	t.true(floatEqual(degrees(Math.PI), 180));

	t.end();
});

test('should throw when passing a not-numeric value', function (t) {
	t.throws(function () {
		degrees({});
	});

	t.end();
});
