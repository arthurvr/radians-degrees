'use strict';
var assert = require('assert');
var floatEqual = require('float-equal');
var degrees = require('./');

it('should convert radians to degrees', function () {
	assert(floatEqual(degrees(1), 57.29577951308232));
	assert(floatEqual(degrees(0.1), 5.729577951308233));
	assert(floatEqual(degrees(Math.PI), 180));
});

it('should throw when passing a not-numeric value', function () {
	assert.throws(function () {
		degrees({});
	});
});
