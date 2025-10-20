/**
 * Performance measurement utilities
 * Created: October 20, 2025
 */

/**
 * Measure execution time of a function
 * @param {Function} fn - Function to measure
 * @param {*} args - Arguments to pass to function
 * @returns {Object} Result and execution time
 */
async function measureTime(fn, ...args) {
  const start = performance.now();
  const result = await fn(...args);
  const end = performance.now();
  return {
    result,
    time: end - start
  };
}

/**
 * Create a performance mark
 * @param {string} name - Mark name
 */
function mark(name) {
  if (performance.mark) {
    performance.mark(name);
  }
}

/**
 * Measure between two marks
 * @param {string} name - Measure name
 * @param {string} startMark - Start mark name
 * @param {string} endMark - End mark name
 */
function measure(name, startMark, endMark) {
  if (performance.measure) {
    performance.measure(name, startMark, endMark);
  }
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    measureTime,
    mark,
    measure
  };
}

