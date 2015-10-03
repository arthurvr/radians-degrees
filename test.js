import test from 'ava';
import floatEqual from 'float-equal';
import degrees from './';

test('should convert radians to degrees', t => {
	t.true(floatEqual(degrees(1), 57.29577951308232));
	t.true(floatEqual(degrees(0.1), 5.729577951308233));
	t.true(floatEqual(degrees(Math.PI), 180));

	t.end();
});

test('should throw when passing a not-numeric value', t => {
	t.throws(() => {
		degrees({});
	});

	t.end();
});
