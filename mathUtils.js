/**
 * Mathematical utility functions
 * Created: October 12, 2025
 */

/**
 * Clamp a number between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation between two values
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} t - Interpolation factor (0-1)
 * @returns {number} Interpolated value
 */
function lerp(start, end, t) {
  return start + (end - start) * t;
}

/**
 * Check if a number is even
 * @param {number} num - Number to check
 * @returns {boolean} True if even
 */
function isEven(num) {
  return num % 2 === 0;
}

/**
 * Check if a number is odd
 * @param {number} num - Number to check
 * @returns {boolean} True if odd
 */
function isOdd(num) {
  return num % 2 !== 0;
}

// Export if using modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    clamp,
    lerp,
    isEven,
    isOdd
  };
}

