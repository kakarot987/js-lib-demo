import assert from 'node:assert/strict';
import { add, subtract, multiply, divide } from '@mdevrani/my-js-lib';

assert.equal(add(5, 3), 8);
assert.equal(subtract(9, 4), 5);
assert.equal(multiply(3, 4), 12);
assert.equal(divide(10, 2), 5);
assert.throws(() => divide(1, 0), /Cannot divide by zero/);
console.log('Package smoke test passed');
