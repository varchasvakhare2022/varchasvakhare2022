/**
 * Number utility functions
 * Created: October 24, 2025
 */

/**
 * Generate random number in range
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number
 */
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Round to specified decimal places
 * @param {number} num - Number to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} Rounded number
 */
function roundTo(num, decimals = 2) {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * Check if number is in range
 * @param {number} num - Number to check
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {boolean} True if in range
 */
function inRange(num, min, max) {
  return num >= min && num <= max;
}

/**
 * Convert number to ordinal string (1st, 2nd, 3rd, etc.)
 * @param {number} num - Number to convert
 * @returns {string} Ordinal string
 */
function toOrdinal(num) {
  const suffix = ['th', 'st', 'nd', 'rd'];
  const v = num % 100;
  return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    randomInRange,
    roundTo,
    inRange,
    toOrdinal
  };
}

