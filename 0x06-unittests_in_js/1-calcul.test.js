const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculate numbers according to type passed in', () => {
  it('should give correct answer for two rounded additio', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('should give correct answer for two rounded subtraction', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('gives correct output for two rounded number division', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('display correct error message when divisor is 0', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
