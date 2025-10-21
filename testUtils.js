/**
 * Testing utility functions
 * Created: October 21, 2025
 */

/**
 * Assert that a condition is true
 * @param {boolean} condition - Condition to check
 * @param {string} message - Error message
 * @throws {Error} If condition is false
 */
function assert(condition, message = 'Assertion failed') {
  if (!condition) {
    throw new Error(message);
  }
}

/**
 * Assert that two values are equal
 * @param {*} actual - Actual value
 * @param {*} expected - Expected value
 * @param {string} message - Error message
 */
function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, got ${actual}`);
  }
}

/**
 * Mock function for testing
 * @returns {Function} Mock function
 */
function createMock() {
  const calls = [];
  const mock = function(...args) {
    calls.push(args);
    return mock;
  };
  mock.calls = calls;
  mock.called = () => calls.length > 0;
  return mock;
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    assert,
    assertEqual,
    createMock
  };
}

